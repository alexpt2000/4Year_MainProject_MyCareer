package com.mycareer.api.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mycareer.api.model.Schedules;

public interface SchedulesRepository extends JpaRepository<Schedules, Long> {
	
	public Page<Schedules> findByTitleContaining(String title, Pageable pageable);
	
	@Query(value = "SELECT * FROM Schedules", nativeQuery = true)
	public List<Schedules> findSchedules();

}
