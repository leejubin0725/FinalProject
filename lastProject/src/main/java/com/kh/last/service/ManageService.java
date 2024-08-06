package com.kh.last.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Service;

import com.kh.last.repository.MovieRepository;
import com.kh.last.repository.PostRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ManageService {
    private final MovieRepository movieRepository;
    private final PostRepository postRepository; // 변수 이름을 소문자로 시작

    public int viewCount(LocalDate date) {
        // LocalDate를 String으로 변환
        String formattedDate = date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));

        // 변환된 String 값을 사용하여 쿼리 실행
        int count = postRepository.dailyCount(formattedDate);
        log.debug("count = {}", count);

        return count;
    }

	public int movieCount() {
		long count = movieRepository.count();
		return (int)count;
	}
}
