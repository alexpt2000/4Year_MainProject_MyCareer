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
import com.mycareer.api.model.ApplicantNotes;
import com.mycareer.api.model.Applicants;
import com.mycareer.api.repository.ApplicantNotesRepository;
import com.mycareer.api.repository.ApplicantRepository;
import com.mycareer.api.repository.QuestionsRepository;
import com.mycareer.api.service.ApplicantService;

/**
 * The Class ApplicantResource.
 * 
 * @author Alexander Souza
 */
@RestController
@RequestMapping("/applicants")
public class ApplicantResource {

	@Autowired
	private ApplicantRepository applicantRepository;

	@Autowired
	private ApplicantService applicantService;

	@Autowired
	private QuestionsRepository questionsRepository;

	@Autowired
	private ApplicantNotesRepository applicantNotesRepository;

	@Autowired
	private ApplicationEventPublisher publisher;

	/**
	 * Adds new applicant, from WebJobs
	 *
	 * @param applicant the applicant
	 * @param response the response
	 * @return the response entity
	 */
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_ADD_APPLICANT') and #oauth2.hasScope('write')")
	public ResponseEntity<Applicants> add(@Valid @RequestBody Applicants applicant, HttpServletResponse response) {
		Applicants saveApplicant = applicantRepository.save(applicant);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveApplicant.getCode()));
		return ResponseEntity.status(HttpStatus.CREATED).body(saveApplicant);
	}

	/**
	 * Removes applicant, passing the applicant code and code questions.
	 *
	 * @param code the code
	 * @param codeQ the code Q
	 */
	@DeleteMapping("/{code}/{codeQ}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_APPLICANT') and #oauth2.hasScope('write')")
	public void remove(@PathVariable Long code, @PathVariable Long codeQ) {
		// Delete all questions first
		questionsRepository.deleteQuestions(codeQ);
		// Delete the applicant
		applicantNotesRepository.delete(code);
	}

	/**
	 * update a applicant by code.
	 *
	 * @param code the code
	 * @param applicant the applicant
	 * @return the response entity
	 */
	@PutMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_ADD_APPLICANT') and #oauth2.hasScope('write')")
	public ResponseEntity<Applicants> update(@PathVariable Long code, @Valid @RequestBody Applicants applicant) {
		Applicants saveApplicant = applicantService.update(code, applicant);
		return ResponseEntity.ok(saveApplicant);
	}

	/**
	 * Find a applicant by code
	 *
	 * @param code the code
	 * @return the response entity
	 */
	@GetMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public ResponseEntity<Applicants> findByCode(@PathVariable Long code) {
		Applicants applicant = applicantRepository.findOne(code);
		return applicant != null ? ResponseEntity.ok(applicant) : ResponseEntity.notFound().build();
	}

	/**
	 * Find a applicant by a job code.
	 *
	 * @param code the code
	 * @return the list
	 */
	@GetMapping("/job/{code}")
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public List<ApplicantNotes> findJobByCode(@PathVariable Long code) {
		return applicantNotesRepository.findByJobCode(code);
	}

	/**
	 * List all applicants.
	 *
	 * @return the list
	 */
	@GetMapping("/list")
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public List<Applicants> listApplicants() {
		return applicantRepository.findAll();
	}

	/**
	 * Find all applicants by notes table.
	 *
	 * @return the list
	 */
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public List<ApplicantNotes> findScore() {
		return applicantNotesRepository.findAll();
	}
}
