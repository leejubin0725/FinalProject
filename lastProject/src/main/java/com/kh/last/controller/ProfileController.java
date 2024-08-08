package com.kh.last.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kh.last.model.vo.Profile;
import com.kh.last.service.ProfileService;

@RestController
@RequestMapping("/api/profiles")
@CrossOrigin(origins = "http://localhost:3000") // 클라이언트의 출처 설정
public class ProfileController {

	@Autowired
	private ProfileService profileService;

	@GetMapping("/user/{userNo}")
	public ResponseEntity<List<Profile>> getProfilesByUserNo(@PathVariable Long userNo) {
		List<Profile> profiles = profileService.getProfilesByUserNo(userNo);
		return ResponseEntity.ok(profiles);
	}

	@PostMapping("/create")
	public ResponseEntity<Profile> createProfile(@RequestParam Long userNo, @RequestParam String profileName,
			@RequestParam String profileImg) {
		Profile profile = profileService.createProfile(userNo, profileName, profileImg);
		return ResponseEntity.ok(profile);
	}
}