package com.kh.last.model.vo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.Data;

@Entity
@Data
@SequenceGenerator(name = "movie_seq", sequenceName = "seq_movie_no", allocationSize = 1)
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "movie_seq")
    private Long movie_no;

    private String title;
    private String director;
    private String cast;
    private int releaseYear;
    private String synopsis;
    private String tags; // 콤마로 구분된 태그 문자열
    private String url;
    private String thumbnailUrl;
    private String genre;
}
