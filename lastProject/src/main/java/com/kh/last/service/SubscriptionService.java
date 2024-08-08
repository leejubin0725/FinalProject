package com.kh.last.service;

import com.kh.last.model.vo.USERS;
import com.kh.last.model.vo.Subscription;
import com.kh.last.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpSession;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Autowired
    private HttpSession session;

    public List<Subscription> findExpiringSubscriptions(LocalDate expiryDate) {
        return subscriptionRepository.findByEndDate(Date.valueOf(expiryDate));
    }

    public void sendExpiryNotification(Subscription subscription) {
        // Logic to send notification
        System.out.println("Sending notification to " + subscription.getUser().getEmail());
    }

    public Subscription subscribeUser(int months) {
        USERS user = (USERS) session.getAttribute("user");
        if (user == null) {
            throw new IllegalStateException("No user logged in");
        }

        Subscription subscription = new Subscription();
        subscription.setUser(user);
        subscription.setStartDate(Date.valueOf(LocalDate.now()));
        subscription.setEndDate(Date.valueOf(LocalDate.now().plusMonths(months)));
        subscriptionRepository.save(subscription);

        // Logic to send subscription confirmation
        System.out.println(months + " months subscription confirmed for user " + user.getEmail());
        return subscription;
    }
}