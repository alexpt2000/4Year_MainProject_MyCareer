package com.mycareer.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.mycareer.api.model.Schedules;
import com.mycareer.api.repository.SchedulesRepository;

/**
 * The Class SchedulesService.
 * 
 * @author Alexander Souza
 */
@Service
public class SchedulesService {

	@Autowired
	private SchedulesRepository schedulesRepository;

	/**
	 * Update Schedule.
	 *
	 * @param code the code
	 * @param schedule the schedule
	 * @return the schedules
	 */
	public Schedules update(Long code, Schedules schedule) {
		Schedules saveSchedule = findByCode(code);

		BeanUtils.copyProperties(schedule, saveSchedule, "code");
		return schedulesRepository.save(saveSchedule);
	}

	/**
	 * Find Schedule by code.
	 *
	 * @param code the code
	 * @return the schedules
	 */
	public Schedules findByCode(Long code) {
		Schedules saveSchedule = schedulesRepository.findOne(code);
		if (saveSchedule == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return saveSchedule;
	}

}
