package com.mycareer.api.resource;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mycareer.api.event.ResourceCreatedEvent;
import com.mycareer.api.model.Schedules;
import com.mycareer.api.repository.SchedulesRepository;
import com.mycareer.api.service.SchedulesService;


/**
 * The Class SchedulesResource.
 * 
 * @author Alexander Souza
 */

@RestController
@RequestMapping("/schedules")
public class SchedulesResource {

	@Autowired
	private SchedulesRepository schedulesRepository;

	@Autowired
	private SchedulesService schedulesService;

	@Autowired
	private ApplicationEventPublisher publisher;

	/**
	 * Adds the new schedule.
	 *
	 * @param schedule the schedule
	 * @param response the response
	 * @return the response entity
	 */
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_ADD_SCHEDULE') and #oauth2.hasScope('write')")
	public ResponseEntity<Schedules> addNewSchedule(@Valid @RequestBody Schedules schedule, HttpServletResponse response) {
		Schedules saveSchedule = schedulesRepository.save(schedule);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveSchedule.getCode()));
		return ResponseEntity.status(HttpStatus.CREATED).body(saveSchedule);
	}

	/**
	 * Removes the schedule.
	 *
	 * @param code the code
	 */
	@DeleteMapping("/{code}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_SCHEDULE') and #oauth2.hasScope('write')")
	public void removeSchedule(@PathVariable Long code) {
		schedulesRepository.delete(code);
	}

	/**
	 * Update schedule.
	 *
	 * @param code the code
	 * @param schedule the schedule
	 * @return the response entity
	 */
	@PutMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_ADD_SCHEDULE') and #oauth2.hasScope('write')")
	public ResponseEntity<Schedules> updateSchedule(@PathVariable Long code, @Valid @RequestBody Schedules schedule) {
		Schedules saveSchedule = schedulesService.update(code, schedule);
		return ResponseEntity.ok(saveSchedule);
	}

	/**
	 * Find schedule by code.
	 *
	 * @param code the code
	 * @return the response entity
	 */
	@GetMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_READ_SCHEDULE') and #oauth2.hasScope('read')")
	public ResponseEntity<Schedules> findScheduleByCode(@PathVariable Long code) {
		Schedules schedule = schedulesRepository.findOne(code);
		return schedule != null ? ResponseEntity.ok(schedule) : ResponseEntity.notFound().build();
	}


	/**
	 * List all schedules.
	 *
	 * @return the list
	 */
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_READ_SCHEDULE') and #oauth2.hasScope('read')")
	public List<Schedules> listAllSchedules() {
		return schedulesRepository.findSchedules();
	}

}
