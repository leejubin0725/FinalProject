package com.kh.last.service;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.last.model.vo.Visit;
import com.kh.last.repository.VisitRepository;

@Service
public class VisitService {

	@Autowired
    private VisitRepository visitRepository;

    public void updateVisitCount() {
    	
        LocalDate today = LocalDate.now();

        // 오늘 날짜에 해당하는 Visit 레코드가 있는지 확인
        Optional<Visit> visitOpt = visitRepository.findByVisitDate(today);
        if (visitOpt.isPresent()) {
            // 이미 존재하는 레코드가 있으면 방문 수를 증가
            Visit visit = visitOpt.get();
            visit.setVisitCount(visit.getVisitCount() + 1);
            visitRepository.save(visit);
        } else {
            // 존재하지 않으면 새로운 레코드를 생성하고 방문 수를 1로 설정
            Visit newVisit = new Visit();
            newVisit.setVisitDate(today);
            newVisit.setVisitCount(1);
            visitRepository.save(newVisit);
        }
    }
    
}
