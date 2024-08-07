package com.kh.last.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.kh.last.model.vo.Faq;
import com.kh.last.model.vo.Visit;
import com.kh.last.repository.FaqRepository;
import com.kh.last.repository.MovieRepository;
import com.kh.last.repository.PostRepository;
import com.kh.last.repository.UserRepository;
import com.kh.last.repository.VisitRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ManageService {
    private final MovieRepository movieRepository;
    private final PostRepository postRepository; // 변수 이름을 소문자로 시작
    private final UserRepository userRepository;
    private final VisitRepository visitRepository;
    private final FaqRepository faqRepository;

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

	public int userCount() {
		long count = userRepository.count();
		return (int)count;
	}

    public List<Visit> weekVisit() {
        LocalDate today = LocalDate.now();
        LocalDate weekAgo = today.minusDays(6); // 오늘 포함 7일이기 때문에 6일 전으로 설정

        List<Visit> visitList = visitRepository.findVisitsInRange(weekAgo, today);

        return visitList;
    }

    public void insertFaq(String question, String answer) {
        // Faq 객체 생성
        Faq faq = new Faq();
        faq.setQuestion(question);
        faq.setAnswer(answer);
        faq.setInsertDate(LocalDate.now()); // 오늘 날짜로 설정

        // 데이터베이스에 저장
        faqRepository.save(faq);
    }

    public void updateFaq(Long id, String question, String answer) {
        // ID로 기존 FAQ 항목 조회
        Optional<Faq> optionalFaq = faqRepository.findById(id);
        
        if (optionalFaq.isPresent()) {
            Faq faq = optionalFaq.get();
            faq.setQuestion(question);
            faq.setAnswer(answer);
            faq.setInsertDate(LocalDate.now());
            faqRepository.save(faq);
        } else {
            // 해당 ID를 가진 FAQ 항목이 없을 경우 예외 발생
            throw new RuntimeException("FAQ 항목을 찾을 수 없습니다.");
        }
    }

	public List<Faq> getFaq() {
		List<Faq> list = faqRepository.findAll();
		
		Collections.reverse(list);	

        return list;
	}
}
