package com.kh.last.controller;

import javax.crypto.SecretKey;

import org.apache.http.auth.InvalidCredentialsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kh.last.model.vo.USERS;
import com.kh.last.service.UserService;
import com.kh.last.service.VisitService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import lombok.Getter;
import lombok.Setter;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000") // 클라이언트의 출처 설정
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
	public ResponseEntity<?> createUser(@RequestBody UserCreateRequest request) {
		try {
			USERS createdUser = userService.createUser(request.getUserId(), request.getEmail(), request.getPassword(),
					request.getStatus(), request.getBirthday(), request.getUsername(), request.getVNumber());
			return ResponseEntity.status(HttpStatus.CREATED).body(createdUser); // 생성된 리소스를 반환
		} catch (Exception e) {
			// 예외 처리 및 에러 메시지 반환
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("An error occurred while creating the user.");
		}
	}

	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody UserLoginRequest request) {
		try {
			String token = userService.loginUser(request.getEmail(), request.getPassword());
			return ResponseEntity.ok(new LoginResponse(token));
		} catch (InvalidCredentialsException e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password.");
		}
	}

	@GetMapping("/me")
	public ResponseEntity<?> getCurrentUser(@RequestHeader("Authorization") String token) {
		String jwt = token.substring(7); // "Bearer " 부분을 제거
		Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
		String email = claims.getSubject();
		USERS user = userService.getUserByEmail(email);
		if (user != null) {
			return ResponseEntity.ok(user);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
		}
	}
  
      @PostMapping("/check-email")

    public ResponseEntity<?> checkEmail(@RequestBody EmailCheckRequest request) {
        boolean exists = userService.emailExists(request.getEmail());
        return ResponseEntity.ok(new EmailCheckResponse(exists));
    }
    
    @PostMapping("/check-password")
    public ResponseEntity<?> checkPassword(@RequestBody PasswordRequest request) {
        try {
            boolean isValid = userService.checkPassword(request.getPassword());
            visitService.updateVisitCount();
            return ResponseEntity.ok(new PasswordResponse(isValid));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while checking the password.");
        }
    }
}

@Getter
@Setter
class PasswordRequest {
	private String password;
}

@Getter
@Setter
class PasswordResponse {
	private boolean valid;

	public PasswordResponse(boolean valid) {
		this.valid = valid;
	}
}

@Getter
@Setter
class UserCreateRequest {
	private String userId;
	private String email;
	private String password;
	private String status;
	private String birthday;
	private String username;
	private Long vNumber;
}

@Getter
@Setter
class UserLoginRequest {
	private String email;
	private String password;
}

@Getter
@Setter
class LoginResponse {
	private String token;

	public LoginResponse(String token) {
		this.token = token;
	}
}

@Getter
@Setter
class EmailCheckRequest {
	private String email;
}

@Getter
@Setter
class EmailCheckResponse {
	private boolean exists;

	public EmailCheckResponse(boolean exists) {
		this.exists = exists;
	}
}