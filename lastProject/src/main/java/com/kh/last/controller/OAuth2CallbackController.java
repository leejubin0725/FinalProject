package com.kh.last.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Controller
public class OAuth2CallbackController {

    @Value("${spring.security.oauth2.client.registration.google.client-id}")
    private String clientId;

    @Value("${spring.security.oauth2.client.registration.google.client-secret}")
    private String clientSecret;

    @Value("${spring.security.oauth2.client.registration.google.redirect-uri}")
    private String redirectUri;

    @GetMapping("/oauth2/callback")
    public String handleOAuth2Callback(@RequestParam("code") String code) {
        RestTemplate restTemplate = new RestTemplate();
        String tokenEndpoint = "https://oauth2.googleapis.com/token";

        // parameter 설정 
        Map<String, String> requestBody = new HashMap<>();
        requestBody.put("code", code);
        requestBody.put("client_id", clientId);
        requestBody.put("client_secret", clientSecret);
        requestBody.put("redirect_uri", redirectUri);
        requestBody.put("grant_type", "authorization_code");

        // 엔드포인트 설정
        Map<String, Object> response = restTemplate.postForObject(tokenEndpoint, requestBody, Map.class);

        // 응답에서 Access token 추출
        String accessToken = (String) response.get("access_token");

        // Optionally: 토큰을 저장하거나 추가 API 호출에 사용함

        return "redirect:/home"; // Redirect to main page after successful login
    }
}
