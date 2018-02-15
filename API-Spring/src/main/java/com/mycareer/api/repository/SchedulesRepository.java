package com.mycareer.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mycareer.api.model.Schedules;

public interface SchedulesRepository extends JpaRepository<Schedules, Long> {

	@Query(value = "SELECT * FROM Schedules", nativeQuery = true)
	public List<Schedules> findSchedules();

}
