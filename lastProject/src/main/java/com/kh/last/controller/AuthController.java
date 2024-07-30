package com.kh.last.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Map;

@Controller
public class AuthController {

    @GetMapping("/home")
    public String home(Model model, @AuthenticationPrincipal OAuth2User oauth2User) {
        if (oauth2User == null) {
            System.out.println("User is not authenticated");
            return "redirect:/login"; // 로그인 페이지로 리디렉션
        }

        Map<String, Object> attributes = oauth2User.getAttributes();
        attributes.forEach((key, value) -> {
            System.out.println(key + ": " + value);
        });

        String name = (String) oauth2User.getAttribute("name");
        model.addAttribute("name", name != null ? name : "Anonymous User");
        return "redirect:http://localhost:3000/main";
    }
}