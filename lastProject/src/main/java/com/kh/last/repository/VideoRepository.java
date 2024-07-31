package com.kh.last.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.kh.last.model.vo.Video;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {

}
