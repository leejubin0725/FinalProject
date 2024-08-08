package com.kh.last.model.vo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long profileNo;

    @ManyToOne
    @JoinColumn(name = "user_no", nullable = false)
    private USERS userNo;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    private String name;
}