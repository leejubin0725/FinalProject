package com.kh.last.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kh.last.model.vo.Movie;
import com.kh.last.model.vo.Profile;
import com.kh.last.model.vo.WatchLog;
import com.kh.last.model.vo.WatchLogId;

public interface WatchLogRepository extends JpaRepository<WatchLog, WatchLogId> {
    Optional<WatchLog> findFirstByProfileAndMovieOrderByIdDesc(Profile profile, Movie movie);
    void deleteAllByProfileAndMovie(Profile profile, Movie movie);
}