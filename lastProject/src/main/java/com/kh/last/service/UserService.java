package com.kh.last.service;

import java.util.Date;
import java.util.Optional;

import javax.crypto.SecretKey;

import org.apache.http.auth.InvalidCredentialsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kh.last.model.vo.Users;
import com.kh.last.repository.UserRepository;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

// 사용자 정의 예외 클래스


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private final SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256); // 보안 키 생성

    public Users createUser(String userId, String email, String password, String status, String birthday, String username, Long vNumber) {
        Users user = new Users();
        user.setUserId(userId);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password)); // 비밀번호 인코딩
        user.setStatus(status);
        user.setBirthday(birthday);
        user.setUsername(username);
        user.setVNumber(vNumber);
        return userRepository.save(user);
    }

    public String loginUser(String email, String password) throws InvalidCredentialsException {
        Optional<Users> userOpt = userRepository.findByEmail(email);
        if (userOpt.isPresent()) {
            Users user = userOpt.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                return generateToken(user);
            }
        }
        throw new InvalidCredentialsException("Invalid email or password");
    }

    private String generateToken(Users user) {
        long now = System.currentTimeMillis();
        long expirationTime = 1000 * 60 * 60; // 1 hour

        return Jwts.builder()
                .setSubject(user.getEmail())
                .setIssuedAt(new Date(now))
                .setExpiration(new Date(now + expirationTime))
                .signWith(key) // 서명에 사용할 키
                .compact();
    }
}
