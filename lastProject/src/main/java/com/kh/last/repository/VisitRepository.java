package com.kh.last.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.kh.last.model.vo.Visit;

public interface VisitRepository extends JpaRepository<Visit, LocalDate> {
    Optional<Visit> findByVisitDate(LocalDate visitDate);
    
    @Query("SELECT v FROM Visit v WHERE v.visitDate >= :startDate AND v.visitDate <= :endDate ORDER BY v.visitDate ASC")
    List<Visit> findVisitsInRange(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
}
