package com.mycareer.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mycareer.api.model.Schedules;

/**
 * The Interface SchedulesRepository.
 * 
 * @author Alexander Souza
 */
public interface SchedulesRepository extends JpaRepository<Schedules, Long> {

	/**
	 * Returns the list all schedules
	 *
	 * @return the list
	 */
	@Query(value = "SELECT * FROM schedules", nativeQuery = true)
	public List<Schedules> findSchedules();

}
