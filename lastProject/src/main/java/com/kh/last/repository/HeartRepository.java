package com.kh.last.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kh.last.model.vo.Heart;
import com.kh.last.model.vo.HeartId;
import com.kh.last.model.vo.Movie;
import com.kh.last.model.vo.Profile;

@Repository
public interface HeartRepository extends JpaRepository<Heart, HeartId> {
    Heart findByProfileAndMovie(Profile profile, Movie movie);
}
