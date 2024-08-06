package com.kh.last.controller;

import com.kh.last.service.PaymentService;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping("/paypal")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/pay")
    public ResponseEntity<Map<String, String>> pay(@RequestParam("sum") double sum) {
        try {
            Map<String, String> paymentResponse = paymentService.createPayment(
                    sum,
                    "USD",
                    "paypal",
                    "sale",
                    "Payment description",
                    "http://localhost:8088/paypal/cancel",
                    "http://localhost:8088/paypal/success"
            );
            return ResponseEntity.ok(paymentResponse);
        } catch (PayPalRESTException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of("error", "Payment failed"));
        }
    }

    @GetMapping("/success")
    public String successPay(@RequestParam("paymentId") String paymentId, @RequestParam("PayerID") String payerId) {
        try {
            Payment payment = paymentService.executePayment(paymentId, payerId);
            if (payment.getState().equals("approved")) {
                return "success";
            }
        } catch (PayPalRESTException e) {
            e.printStackTrace();
        }
        return "redirect:/";
    }

    @GetMapping("/cancel")
    public String cancelPay() {
        return "cancel";
    }
}