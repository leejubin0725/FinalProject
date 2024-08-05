package com.kh.last.repository;

import com.kh.last.model.vo.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}