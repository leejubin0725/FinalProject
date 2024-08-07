package com.kh.last.repository;


import com.kh.last.model.vo.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    
    @Query(value = "SELECT SUM(view_count) " +
                   "FROM post " +
                   "WHERE TRUNC(view_date) = TO_DATE(:date, 'YYYY-MM-DD')", 
           nativeQuery = true)
    Integer dailyCount(@Param("date") String date);
}
