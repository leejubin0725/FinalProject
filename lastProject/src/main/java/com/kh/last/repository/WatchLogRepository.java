package com.kh.last.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kh.last.model.vo.Movie;
import com.kh.last.model.vo.Profile;
import com.kh.last.model.vo.WatchLog;
import com.kh.last.model.vo.WatchLogId;

@Repository
public interface WatchLogRepository extends JpaRepository<WatchLog, WatchLogId> {
    void deleteByProfileAndMovie(Profile profile, Movie movie);
}
