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
import com.mycareer.api.model.Jobs;
import com.mycareer.api.repository.JobRepository;
import com.mycareer.api.service.JobService;

/**
 * The Class JobResource.
 * 
 * @author Alexander Souza
 */
@RestController
@RequestMapping("/jobs")
public class JobResource {

	@Autowired
	private JobRepository jobRepository;

	@Autowired
	private JobService jobService;

	@Autowired
	private ApplicationEventPublisher publisher;

	/**
	 * Adds the job.
	 *
	 * @param job the job
	 * @param response the response
	 * @return the response entity
	 */
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_ADD_JOB') and #oauth2.hasScope('write')")
	public ResponseEntity<Jobs> addJob(@Valid @RequestBody Jobs job, HttpServletResponse response) {
		Jobs saveJob = jobRepository.save(job);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveJob.getCode()));
		return ResponseEntity.status(HttpStatus.CREATED).body(saveJob);
	}

	/**
	 * Removes the job.
	 *
	 * @param code the code
	 */
	@DeleteMapping("/{code}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_JOB') and #oauth2.hasScope('write')")
	public void removeJob(@PathVariable Long code) {
		jobRepository.delete(code);
	}

	/**
	 * Update job.
	 *
	 * @param code the code
	 * @param job the job
	 * @return the response entity
	 */
	@PutMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_ADD_JOB') and #oauth2.hasScope('write')")
	public ResponseEntity<Jobs> updateJob(@PathVariable Long code, @Valid @RequestBody Jobs job) {
		Jobs saveJob = jobService.update(code, job);
		return ResponseEntity.ok(saveJob);
	}

	/**
	 * Find job by code.
	 *
	 * @param code the code
	 * @return the response entity
	 */
	@GetMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_READ_JOB') and #oauth2.hasScope('read')")
	public ResponseEntity<Jobs> findJobByCode(@PathVariable Long code) {
		Jobs job = jobRepository.findOne(code);
		return job != null ? ResponseEntity.ok(job) : ResponseEntity.notFound().build();
	}

	/**
	 * List all jobs.
	 *
	 * @return the list
	 */
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_READ_JOB') and #oauth2.hasScope('read')")
	public List<Jobs> listAllJobs() {
		return jobRepository.findAll();
	}

}
