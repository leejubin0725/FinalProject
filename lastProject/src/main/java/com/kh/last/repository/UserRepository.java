package com.kh.last.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.kh.last.model.vo.Users;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Users, Long> {
    Optional<Users> findByEmail(String email);
}
