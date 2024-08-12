package com.kh.last.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Date;
import java.util.Optional;

import javax.crypto.SecretKey;

import com.kh.last.model.vo.Subscription;
import com.kh.last.model.vo.USERS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kh.last.repository.SubscriptionRepository;
import com.kh.last.repository.UserRepository;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SubscriptionRepository subscriptionRepository; // 추가된 부분

    @Autowired
    private PasswordEncoder passwordEncoder;

    private final SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256); // 보안 키 생성
    private final long tokenValidity = 3600000; // 1 hour in milliseconds

    public SecretKey getKey() {
        return key;
    }

    public USERS createUser(String email, String password, String status, String birthday,
                            String username) {
        USERS user = new USERS();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password)); // 비밀번호 인코딩
        user.setStatus(status);
        user.setBirthday(birthday);
        user.setUsername(username);
        return userRepository.save(user);
    }

    public String loginUser(String email, String password) throws BadCredentialsException {
        Optional<USERS> userOpt = userRepository.findByEmail(email);
        if (userOpt.isPresent()) {
            USERS user = userOpt.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                return generateToken(user);
            }
        }
        throw new BadCredentialsException("Invalid email or password");
    }

    private String generateToken(USERS user) {
        long now = System.currentTimeMillis();
        return Jwts.builder().setSubject(user.getEmail()).setIssuedAt(new java.util.Date(now))
                .setExpiration(new java.util.Date(now + tokenValidity)).signWith(key).compact();
    }

    public boolean emailExists(String email) {
        return userRepository.findByEmail(email).isPresent();
    }


    public boolean checkPassword(String password) {
        List<USERS> users = userRepository.findAll();
        for (USERS user : users) {
            if (passwordEncoder.matches(password, user.getPassword())) {
                return true;
            }
        }
        return false;
    }

    public boolean isUserSubscribed(String email) {
        Optional<USERS> userOpt = userRepository.findByEmail(email);
        if (!userOpt.isPresent()) {
            return false;
        }

        USERS user = userOpt.get();

        // 현재 날짜를 기준으로 활성화된 구독을 찾음
        Optional<Subscription> activeSubscription = subscriptionRepository.findByUserUserNoAndSubStatusAndEndDateAfter(
                user.getUserNo(),
                "ACTIVE",  // 구독 상태가 "ACTIVE"인 경우에만 구독 중으로 간주
                new java.sql.Date(System.currentTimeMillis())
        );

        return activeSubscription.isPresent(); // 활성화된 구독이 있으면 true, 없으면 false 반환
    }

    // 새로운 구독을 추가하는 메서드
    public Subscription subscribeUser(String email, int months) {
        Optional<USERS> userOpt = userRepository.findByEmail(email);
        USERS user = userOpt.orElseThrow(() -> new IllegalStateException("User not found"));

        Subscription subscription = new Subscription();
        subscription.setUser(user);
        subscription.setStartDate(java.sql.Date.valueOf(LocalDate.now()));
        subscription.setEndDate(java.sql.Date.valueOf(LocalDate.now().plusMonths(months)));
        subscription.setSubStatus("ACTIVE"); // 구독 상태를 활성으로 설정
        subscriptionRepository.save(subscription);

        // Logic to send subscription confirmation
        System.out.println(months + " months subscription confirmed for user " + user.getEmail());
        return subscription;
    }
    public USERS getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }
}