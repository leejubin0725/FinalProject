package com.kh.last.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.kh.last.model.vo.Movie;
import com.kh.last.model.vo.Profile;
import com.kh.last.model.vo.WatchLog;
import com.kh.last.model.vo.WatchLogId;

import java.util.List;

public interface WatchLogRepository extends JpaRepository<WatchLog, WatchLogId> {
    void deleteByProfileAndMovie(Profile profile, Movie movie);

    List<WatchLog> findAllByProfileOrderByViewedAtDesc(Profile profile);
}
