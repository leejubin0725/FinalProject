package com.kh.last.model.vo;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Entity
@Table(name = "subscriptions")
@Data
public class Subscription {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "subscription_seq")
    @SequenceGenerator(name = "subscription_seq", sequenceName = "subscription_seq", allocationSize = 1)
    @Column(name = "subscription_no")
    private Long id;

    @Column(name = "user_no", nullable = false)
    private Long userId;

    @Column(name = "start_date", nullable = false)
    private Date startDate;

    @Column(name = "end_date", nullable = false)
    private Date endDate;

    @Column(name = "status", nullable = false)
    private String status;
}