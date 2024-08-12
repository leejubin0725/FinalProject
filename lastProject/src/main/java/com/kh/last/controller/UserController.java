package com.kh.last.controller;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kh.last.model.dto.EmailCheckRequest;
import com.kh.last.model.dto.EmailCheckResponse;
import com.kh.last.model.dto.LoginResponse;
import com.kh.last.model.dto.UserCreateRequest;
import com.kh.last.model.dto.UserLoginRequest;
import com.kh.last.model.vo.USERS;
import com.kh.last.service.UserService;
import com.kh.last.service.VisitService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;
    private final SecretKey key;

    @Autowired
    private VisitService visitService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
        this.key = userService.getKey(); // UserService로부터 SecretKey 주입
    }

    @PostMapping("/register")
    public ResponseEntity<USERS> createUser(@RequestBody UserCreateRequest request) {
        try {
            USERS createdUser = userService.createUser(request.getEmail(), request.getPassword(),
                    request.getStatus(), request.getBirthday(), request.getUsername());
            return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginUser(@RequestBody UserLoginRequest request) {
        try {
            String token = userService.loginUser(request.getEmail(), request.getPassword());
            visitService.updateVisitCount();
            return ResponseEntity.ok(new LoginResponse(token));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }

    @GetMapping("/me")
    public ResponseEntity<USERS> getCurrentUser(@RequestHeader("Authorization") String token) {
        String jwt = token.substring(7); // "Bearer " 부분을 제거
        Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
        String email = claims.getSubject();
        USERS user = userService.getUserByEmail(email);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("/check-email")
    public ResponseEntity<EmailCheckResponse> checkEmail(@RequestBody EmailCheckRequest request) {
        boolean exists = userService.emailExists(request.getEmail());
        return ResponseEntity.ok(new EmailCheckResponse(exists));
    }
}
