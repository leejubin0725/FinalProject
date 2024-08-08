package com.kh.last.service;

import com.kh.last.model.vo.Subscription;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class SubscriptionScheduler {

    private final SubscriptionService subscriptionService;

    public SubscriptionScheduler(SubscriptionService subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    @Scheduled(cron = "0 0 0 * * ?") // 매일 자정에 갱신
    public void checkSubscriptions() {
        LocalDate today = LocalDate.now();
        List<Subscription> expiringSubscriptions = subscriptionService.findExpiringSubscriptions(today.plusWeeks(1));
        for (Subscription subscription : expiringSubscriptions) {
            subscriptionService.sendExpiryNotification(subscription);
        }
    }
}