package com.mycareer.api.resource;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mycareer.api.event.ResourceCreatedEvent;
import com.mycareer.api.model.Jobs;
import com.mycareer.api.repository.JobRepository;
import com.mycareer.api.service.JobService;

@RestController
@RequestMapping("/jobs")
public class JobResource {

	@Autowired
	private JobRepository jobRepository;

	@Autowired
	private JobService jobService;

	@Autowired
	private ApplicationEventPublisher publisher;

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_ADD_JOB') and #oauth2.hasScope('write')")
	public ResponseEntity<Jobs> add(@Valid @RequestBody Jobs job, HttpServletResponse response) {
		Jobs saveJob = jobRepository.save(job);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveJob.getCode()));
		return ResponseEntity.status(HttpStatus.CREATED).body(saveJob);
	}

	@DeleteMapping("/{code}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_JOB') and #oauth2.hasScope('write')")
	public void remove(@PathVariable Long code) {
		jobRepository.delete(code);
	}

	@PutMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_ADD_JOB') and #oauth2.hasScope('write')")
	public ResponseEntity<Jobs> update(@PathVariable Long code, @Valid @RequestBody Jobs job) {
		Jobs saveJob = jobService.update(code, job);
		return ResponseEntity.ok(saveJob);
	}

	@GetMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_READ_JOB') and #oauth2.hasScope('read')")
	public ResponseEntity<Jobs> findByCode(@PathVariable Long code) {
		Jobs job = jobRepository.findOne(code);
		return job != null ? ResponseEntity.ok(job) : ResponseEntity.notFound().build();
	}

//	@GetMapping
//	@PreAuthorize("hasAuthority('ROLE_READ_JOB') and #oauth2.hasScope('read')")
//	public Page<Jobs> find(@RequestParam(required = false, defaultValue = "%") String title, Pageable pageable) {
//		return jobRepository.findByTitleContaining(title, pageable);
//	}
	
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_READ_JOB') and #oauth2.hasScope('read')")
	public List<Jobs> listJobs() {
		return jobRepository.findAll();
	}

}
