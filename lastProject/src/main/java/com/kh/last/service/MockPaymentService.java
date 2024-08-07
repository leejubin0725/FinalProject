package com.kh.last.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class MockPaymentService {

    public Map<String, String> createPayment(Double total, String currency, String method, String intent,
                                             String description, String cancelUrl, String successUrl) {
        Map<String, String> response = new HashMap<>();
        response.put("redirectUrl", "https://www.sandbox.paypal.com/checkoutnow?token=EC-60U79041NH123456G"); // 실제 PayPal 샌드박스 URL 사용
        return response;
    }

    public boolean executePayment(String paymentId, String payerId) {
        // Mock logic for payment execution
        return "MOCK_PAYMENT_ID".equals(paymentId) && "MOCK_PAYER_ID".equals(payerId);
    }
}