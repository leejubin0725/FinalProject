package com.kh.last.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.kh.last.model.vo.Profile;
import com.kh.last.model.vo.USERS;
import com.kh.last.repository.ProfileRepository;
import com.kh.last.repository.UserRepository;

import io.jsonwebtoken.io.IOException;

@Service
public class ProfileService {
	@Autowired
	private ProfileRepository profileRepository;

	@Autowired
	private UserRepository userRepository;

	public List<Profile> getProfilesByUserNo(Long userNo) {
		USERS user = userRepository.findById(userNo).orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));
		return profileRepository.findByUserNo(user);
	}

	public Profile createProfile(Long userNo, String profileName, String profileImg) {
		USERS user = userRepository.findById(userNo).orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));
		Profile profile = new Profile();
		profile.setUserNo(user);
		profile.setProfileName(profileName);
		profile.setProfileImg(profileImg);
		return profileRepository.save(profile);
	}

	public String uploadProfileImage(MultipartFile file, Long profileNo) throws IOException {
		// 파일을 서버에 저장
		String fileName = "profile_" + profileNo + "_" + System.currentTimeMillis() + "_" + file.getOriginalFilename();
		Path path = Paths.get("uploads/" + fileName);
		try {
			Files.write(path, file.getBytes());
		} catch (java.io.IOException e) {
			e.printStackTrace();
		}

		// 데이터베이스에서 프로필을 찾아 이미지 경로 업데이트
		Profile profile = profileRepository.findById(profileNo)
				.orElseThrow(() -> new RuntimeException("Profile not found"));
		profile.setProfileImg("/uploads/" + fileName);
		profileRepository.save(profile);

		return profile.getProfileImg();
	}

	// 닉네임 변경
	public void updateProfileName(Long profileNo, String profileName) {
		Profile profile = profileRepository.findById(profileNo)
				.orElseThrow(() -> new RuntimeException("Profile not found"));
		profile.setProfileName(profileName);
		profileRepository.save(profile);
	}
}