package com.kh.last.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.kh.last.model.vo.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    List<Movie> findByGenre(String genre);
    
    List<Movie> findByTagsContaining(String tag);

    // JSON 문자열 형태의 필드에서 특정 값을 포함하는지 확인하는 메서드
    List<Movie> findByCastContaining(String cast);
}
