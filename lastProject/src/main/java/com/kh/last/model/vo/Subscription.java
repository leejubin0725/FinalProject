package com.kh.last.model.vo;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Data
@Entity
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "subscription_seq")
    @SequenceGenerator(name = "subscription_seq", sequenceName = "subscription_seq", allocationSize = 1)
    @Column(name = "subscription_id")
    private Long subscriptionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_no", nullable = false)
    private USERS user;

    @Column(name = "start_date", nullable = false)
    private Date startDate;

    @Column(name = "end_date", nullable = false)
    private Date endDate;
    
    @Column(name = "sub_status", nullable = false, length = 3)
    private String subStatus;

    // expiryDate 필드 추가
    @Transient // 데이터베이스 컬럼이 아니라 계산된 값일 경우
    private Date expiryDate;

    public Date getExpiryDate() {
        return this.endDate;
    }
}