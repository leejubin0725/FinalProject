package com.kh.last.model.vo;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;      // 자동 생성되는 고유 아이디

    @ManyToOne
    @JoinColumn(name = "movie_id", nullable = false)
    private Movie movie;         // 영화고유번호

    private LocalDate viewDate;  // 조회수가 기록된 날짜
    private int viewCount;           // 해당 날짜의 조회수
    
//    @ManyToOne
//    @JoinColumn(name = "profile_id", nullable = false)
    private int profileNo;         // 프로필 번호
    
}