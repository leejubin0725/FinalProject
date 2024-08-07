package com.kh.last.model.vo;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "visit")
public class Visit {
    @Id
    private LocalDate visitDate;  // Primary Key로 설정

    private int visitCount;
    
    private String dayCount;
}