package com.kh.last.model.vo;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;
import java.util.List;

@Entity
@Getter
@Setter
@Data
@SequenceGenerator(name = "movie_seq", sequenceName = "seq_movie_no", allocationSize = 1)
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "movie_seq")
    private Long id;

    private String title;
    private String director;
    private int releaseYear;
    private String url;
    private String thumbnailUrl;
    private float rating;
    private String genre;

    @Lob
    private String tags;  // JSON 문자열 형태로 저장
    
    @Transient
    private List<String> tagList;

    @Lob
    private String cast;  // JSON 문자열 형태로 저장

    @Transient
    private List<String> castList;

    @PostLoad
    private void postLoad() {
        if (tags != null) {
            this.tagList = parseJsonArray(tags);
        }
        if (cast != null) {
            this.castList = parseJsonArray(cast);
        }
    }

    @PrePersist
    @PreUpdate
    private void prePersist() {
        if (tagList != null) {
            this.tags = stringifyJsonArray(tagList);
        }
        if (castList != null) {
            this.cast = stringifyJsonArray(castList);
        }
    }

    private List<String> parseJsonArray(String jsonArray) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(jsonArray, new TypeReference<List<String>>(){});
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    private String stringifyJsonArray(List<String> jsonArray) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(jsonArray);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
