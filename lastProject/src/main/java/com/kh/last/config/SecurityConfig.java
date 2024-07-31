package com.kh.last.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // CSRF 보호 비활성화
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/login", "/oauth2/**", "/error", "/api/users/register").permitAll() // 로그인, OAuth2, 오류 경로, 회원가입은 모두 허용
                        .anyRequest().authenticated() // 그 외 모든 요청은 인증 필요
                )
                .formLogin(form -> form
                        .loginPage("/login") // 사용자 정의 로그인 페이지
                        .defaultSuccessUrl("/home", true) // 로그인 성공 후 리디렉션 경로
                        .failureUrl("/login?error=true") // 로그인 실패 시 리디렉션 경로
                )
                .oauth2Login(oauth2 -> oauth2
                        .loginPage("/login") // 사용자 정의 로그인 페이지
                        .defaultSuccessUrl("/home", true) // 로그인 성공 후 리디렉션 경로
                        .failureUrl("/login?error=true") // 로그인 실패 시 리디렉션 경로
                        .authorizationEndpoint(authorization ->
                                authorization.baseUri("/oauth2/authorization") // OAuth2 인증 요청 기본 URI
                        )
                        .redirectionEndpoint(redirection ->
                                redirection.baseUri("/oauth2/callback") // OAuth2 리디렉션 엔드포인트
                        )
                );
        return http.build();
    }
}
