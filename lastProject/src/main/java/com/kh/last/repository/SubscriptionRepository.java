package com.kh.last.repository;

import com.kh.last.model.vo.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Date;
import java.util.Optional;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {

    // 특정 사용자의 활성화된 구독을 조회하는 메서드
    Optional<Subscription> findByUserUserNoAndSubStatusAndEndDateAfter(Long userNo, String subStatus, Date currentDate);

    Optional<Subscription> findByUserUserNo(Long userNo);
}