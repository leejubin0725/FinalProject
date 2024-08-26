package com.kh.last.service;

import com.paypal.api.payments.*;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

@Service
public class PaymentService {

    @Autowired
    private APIContext apiContext;

    public Map<String, String> createPayment(Double total, String currency, String method, String intent,
                                             String description, String cancelUrl, String successUrl) throws PayPalRESTException {
        Amount amount = new Amount();
        amount.setCurrency(currency);
        amount.setTotal(String.format("%.2f", total));

        Transaction transaction = new Transaction();
        transaction.setDescription(description);
        transaction.setAmount(amount);

        List<Transaction> transactions = new ArrayList<>();
        transactions.add(transaction);

        Payer payer = new Payer();
        payer.setPaymentMethod(method.toString());

        Payment payment = new Payment();
        payment.setIntent(intent);
        payment.setPayer(payer);
        payment.setTransactions(transactions);

        RedirectUrls redirectUrls = new RedirectUrls();
        redirectUrls.setCancelUrl(cancelUrl);
        redirectUrls.setReturnUrl(successUrl);
        payment.setRedirectUrls(redirectUrls);

        Payment createdPayment = payment.create(apiContext);

        Map<String, String> response = new HashMap<>();
        for(Links link : createdPayment.getLinks()) {
            if(link.getRel().equals("approval_url")) {
                response.put("redirectUrl", link.getHref());
                break;
            }
        }
        return response;
    }
    

    public Payment executePayment(String paymentId, String payerId) throws PayPalRESTException {
        Payment payment = new Payment();
        payment.setId(paymentId);
        PaymentExecution paymentExecution = new PaymentExecution();
        paymentExecution.setPayerId(payerId);
        return payment.execute(apiContext, paymentExecution);
    }
}
@Service
public Map<String, String> createPayment(Double total, String currency, String method, String intent,
                                         String description, String cancelUrl, String successUrl) throws PayPalRESTException {
    // 결제 금액 설정
    Amount amount = new Amount();
    amount.setCurrency(currency);
    amount.setTotal(String.format("%.2f", total));

    // 결제 정보 및 트랜잭션 설정
    Transaction transaction = new Transaction();
    transaction.setDescription(description);
    transaction.setAmount(amount);

    // 결제 관련 정보 구성
    Payment payment = new Payment();
    payment.setIntent(intent);
    payment.setPayer(new Payer().setPaymentMethod(method.toString()));
    payment.setTransactions(List.of(transaction));

    // 리디렉션 URL 설정 (결제 성공 및 취소 시)
    RedirectUrls redirectUrls = new RedirectUrls();
    redirectUrls.setCancelUrl(cancelUrl);
    redirectUrls.setReturnUrl(successUrl);
    payment.setRedirectUrls(redirectUrls);

    // PayPal API를 통해 결제 생성
    Payment createdPayment = payment.create(apiContext);

    // 승인 URL 추출 및 반환
    Map<String, String> response = new HashMap<>();
    for (Links link : createdPayment.getLinks()) {
        if (link.getRel().equals("approval_url")) {
            response.put("redirectUrl", link.getHref());
            break;
        }
    }
    return response;
}
