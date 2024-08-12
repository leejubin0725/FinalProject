package com.kh.last.model.vo;

import java.io.Serializable;
import java.util.Objects;

public class HeartId implements Serializable {

    private Long profile;
    private Long movie;

    public HeartId() {
    }

    public HeartId(Long profile, Long movie) {
        this.profile = profile;
        this.movie = movie;
    }

    // Getters and setters
    public Long getProfile() {
        return profile;
    }

    public void setProfile(Long profile) {
        this.profile = profile;
    }

    public Long getMovie() {
        return movie;
    }

    public void setMovie(Long movie) {
        this.movie = movie;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HeartId heartId = (HeartId) o;
        return Objects.equals(profile, heartId.profile) && Objects.equals(movie, heartId.movie);
    }

    @Override
    public int hashCode() {
        return Objects.hash(profile, movie);
    }
}
