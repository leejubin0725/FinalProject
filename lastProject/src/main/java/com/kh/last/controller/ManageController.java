package com.kh.last.controller;

import java.time.LocalDate;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
