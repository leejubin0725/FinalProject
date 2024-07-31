package com.kh.last.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.kh.last.model.vo.Users;
import com.kh.last.repository.UserRepository;


public class UserService {

     @Autowired
   private UserRepository userRepository;
   
   public Users saveUser(Users user) {
      return userRepository.save(user);   
   }
}
