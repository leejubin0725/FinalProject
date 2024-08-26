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

        // Make the POST request to the token endpoint
        Map<String, Object> response = restTemplate.postForObject(tokenEndpoint, requestBody, Map.class);

        // Extract the access token from the response
        String accessToken = (String) response.get("access_token");

        // Optionally: Save the token or use it to make further API calls

        return "redirect:/home"; // Redirect to main page after successful login
    }
}
