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

@RestController
@RequestMapping("/schedules")
public class SchedulesResource {

	@Autowired
	private SchedulesRepository schedulesRepository;

	@Autowired
	private SchedulesService schedulesService;

	@Autowired
	private ApplicationEventPublisher publisher;

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_ADD_SCHEDULE') and #oauth2.hasScope('write')")
	public ResponseEntity<Schedules> add(@Valid @RequestBody Schedules schedule, HttpServletResponse response) {
		Schedules saveSchedule = schedulesRepository.save(schedule);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveSchedule.getCode()));
		return ResponseEntity.status(HttpStatus.CREATED).body(saveSchedule);
	}

	@DeleteMapping("/{code}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_SCHEDULE') and #oauth2.hasScope('write')")
	public void remove(@PathVariable Long code) {
		schedulesRepository.delete(code);
	}

	@PutMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_ADD_SCHEDULE') and #oauth2.hasScope('write')")
	public ResponseEntity<Schedules> update(@PathVariable Long code, @Valid @RequestBody Schedules schedule) {
		Schedules saveSchedule = schedulesService.update(code, schedule);
		return ResponseEntity.ok(saveSchedule);
	}

	@GetMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_READ_SCHEDULE') and #oauth2.hasScope('read')")
	public ResponseEntity<Schedules> findByCode(@PathVariable Long code) {
		Schedules schedule = schedulesRepository.findOne(code);
		return schedule != null ? ResponseEntity.ok(schedule) : ResponseEntity.notFound().build();
	}

	// @GetMapping
	// @PreAuthorize("hasAuthority('ROLE_READ_SCHEDULE') and
	// #oauth2.hasScope('read')")
	// public Page<Schedules> find(@RequestParam(required = false, defaultValue =
	// "%") String title, Pageable pageable) {
	// return schedulesRepository.findByTitleContaining(title, pageable);
	// }

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_READ_SCHEDULE') and #oauth2.hasScope('read')")
	public List<Schedules> find() {
		return schedulesRepository.findSchedules();
	}

}
