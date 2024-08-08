package com.kh.last.repository;

import com.kh.last.model.vo.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Date;
import java.util.List;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findByEndDate(Date expiryDate);
    List<Subscription> findByUserEmail(String email);
}