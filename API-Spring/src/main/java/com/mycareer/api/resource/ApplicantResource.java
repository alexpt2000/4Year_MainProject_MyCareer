package com.mycareer.api.resource;

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
import com.mycareer.api.model.Applicants;
import com.mycareer.api.repository.ApplicantRepository;
import com.mycareer.api.service.ApplicantService;

@RestController
@RequestMapping("/applicants")
public class ApplicantResource {

	@Autowired
	private ApplicantRepository applicantRepository;

	@Autowired
	private ApplicantService applicantService;

	@Autowired
	private ApplicationEventPublisher publisher;

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_ADD_APPLICANT') and #oauth2.hasScope('write')")
	public ResponseEntity<Applicants> add(@Valid @RequestBody Applicants applicant, HttpServletResponse response) {
		Applicants saveApplicant = applicantRepository.save(applicant);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveApplicant.getCode()));
		return ResponseEntity.status(HttpStatus.CREATED).body(saveApplicant);
	}

	@DeleteMapping("/{code}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_APPLICANT') and #oauth2.hasScope('write')")
	public void remove(@PathVariable Long code) {
		applicantRepository.delete(code);
	}

	@PutMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_ADD_APPLICANT') and #oauth2.hasScope('write')")
	public ResponseEntity<Applicants> update(@PathVariable Long code, @Valid @RequestBody Applicants applicant) {
		Applicants saveApplicant = applicantService.update(code, applicant);
		return ResponseEntity.ok(saveApplicant);
	}

	@GetMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public ResponseEntity<Applicants> findByCode(@PathVariable Long code) {
		Applicants applicant = applicantRepository.findOne(code);
		return applicant != null ? ResponseEntity.ok(applicant) : ResponseEntity.notFound().build();
	}

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public Page<Applicants> find(@RequestParam(required = false, defaultValue = "%") String fullname, Pageable pageable) {
		return applicantRepository.findByFullnameContaining(fullname, pageable);
	}

}