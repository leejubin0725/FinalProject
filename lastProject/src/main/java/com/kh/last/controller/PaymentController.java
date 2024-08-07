package com.kh.last.controller;

import com.kh.last.service.EmailService;
import com.kh.last.service.PaymentService;
import com.kh.last.service.MockPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.Map;

@Controller
@RequestMapping("/paypal")
public class PaymentController {

    @Autowired
    private MockPaymentService mockPaymentService;

    @Autowired
    private EmailService emailService;

    @PostMapping("/pay")
    public ResponseEntity<Map<String, String>> pay(@RequestParam("sum") double sum) {
        Map<String, String> paymentResponse = mockPaymentService.createPayment(
                sum,
                "USD",
                "paypal",
                "sale",
                "Payment description",
                "http://localhost:3000/failure",
                "http://localhost:3000/success"
        );
        return ResponseEntity.ok(paymentResponse);
    }

    @GetMapping("/success")
    public String successPay(@RequestParam("paymentId") String paymentId, @RequestParam("PayerID") String payerId) {
        try {
            if (mockPaymentService.executePayment(paymentId, payerId)) {
                String emailAddress = System.getProperty("SMTP_USERNAME");
                emailService.sendSubscriptionConfirmationEmail(emailAddress);
                return "redirect:http://localhost:3000/success";
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "redirect:http://localhost:3000/failure";
    }

    @GetMapping("/cancel")
    public String cancelPay() {
        return "redirect:http://localhost:3000/cancel";
    }
}