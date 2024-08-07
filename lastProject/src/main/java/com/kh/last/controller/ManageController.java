package com.kh.last.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kh.last.model.vo.Faq;
import com.kh.last.model.vo.Visit;
import com.kh.last.service.ManageService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "http://localhost:3000")  // 클라이언트의 출처 설정
@RequiredArgsConstructor
public class ManageController {
	
	private final ManageService service;
	
	@GetMapping("/viewCount")
	public int viewCount() {
		LocalDate date = LocalDate.now();
		int count = 0;
		count = service.viewCount(date);
		
		return count;
	}
	
	@GetMapping("/movieCount")
	public int movieCount() {
		int count = service.movieCount();
		return count;
	}
	
	@GetMapping("/allUserCount")
	public int allUserCount() {
		int count = service.userCount();
		return count;
	}
		
	@GetMapping("/weekVisit")
	public List<Visit> weekVisit() {
		List<Visit> list = service.weekVisit();
		
		for(int i = 0;i < list.size(); i++) {
			if (i == list.size() - 1) {  // 마지막 요소인지 확인
	            Visit visit = list.get(i);
	            visit.setDayCount("오늘");  // '오늘'로 설정
	        }else {
	            Visit visit = list.get(i);
	            visit.setDayCount((list.size() - i - 1) + "일전");
	        }
		}
		
		return list;
	}
	
	@GetMapping("/todayVisit")
	public int todayVisit() {
		return 0;  //미완성(일별 방문자 테이블 만든 후 viewCount 참고해 날짜 변수 보낼 예정)
	}
	
	@GetMapping("/getFaq")
	public List<Faq> getFaq(){
		List<Faq> list = service.getFaq();
		return list;
	}
	
	@PostMapping("/faq")
	public void insertOrUpdateFaq(@RequestBody Faq faq) {
		Long id = faq.getId();
		String question = faq.getQuestion();
		String answer = faq.getAnswer();
		
		if(id != null) {
			service.updateFaq(id, question, answer);
		}else {
			service.insertFaq(question, answer);			
		}
	}
	
	
}






