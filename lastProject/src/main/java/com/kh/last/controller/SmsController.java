package com.kh.last.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.kh.last.service.SmsService;

import net.nurigo.java_sdk.exceptions.CoolsmsException;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/sms")
public class SmsController {

    @Autowired
    private SmsService smsService;

    @PostMapping("/send-code")
    public String sendCode(@RequestBody Map<String, String> request) throws CoolsmsException {
        String phoneNumber = request.get("phoneNumber");
        if (phoneNumber == null) {
            throw new IllegalArgumentException("Required parameter 'phoneNumber' is not present.");
        }
        return smsService.sendVerificationCode(phoneNumber);
    }

    @PostMapping("/verify-code")
    public String verifyCode(@RequestParam String phoneNumber, @RequestParam String verificationCode) {
        boolean isValid = smsService.verifyCode(phoneNumber, verificationCode);
        return isValid ? "Verification successful" : "Verification failed";
    }
}
