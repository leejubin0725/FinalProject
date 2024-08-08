package com.kh.last.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.last.model.vo.Profile;
import com.kh.last.model.vo.USERS;
import com.kh.last.repository.ProfileRepository;
import com.kh.last.repository.UserRepository;

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
	}