package com.mycareer.api.resource;

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
import com.mycareer.api.repository.ApplicantNotesRepository;
import com.mycareer.api.service.ApplicantNotesService;


/**
 * The Class ApplicantNotesResource.
 * 
 * @author Alexander Souza
 */
@RestController
@RequestMapping("/applicants/applicantnotes")
public class ApplicantNotesResource {

	@Autowired
	private ApplicantNotesRepository applicantNotesRepository;

	@Autowired
	private ApplicantNotesService applicantNotesService;

	@Autowired
	private ApplicationEventPublisher publisher;

	/**
	 * Add  a new note in applicant
	 *
	 * @param applicant the applicant
	 * @param response the response
	 * @return the response entity
	 */
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_ADD_APPLICANT') and #oauth2.hasScope('write')")
	public ResponseEntity<ApplicantNotes> addNoteToApplicant(@Valid @RequestBody ApplicantNotes applicant,
			HttpServletResponse response) {
		ApplicantNotes saveApplicant = applicantNotesRepository.save(applicant);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveApplicant.getCode()));
		return ResponseEntity.status(HttpStatus.CREATED).body(saveApplicant);
	}

	/**
	 * Removes notes for a applicant, passing by code
	 *
	 * @param code the code
	 */
	@DeleteMapping("/{code}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_APPLICANT') and #oauth2.hasScope('write')")
	public void removeNote(@PathVariable Long code) {
		applicantNotesRepository.delete(code);
	}

	/**
	 * Update note for a applicant.
	 *
	 * @param code the code
	 * @param applicant the applicant
	 * @return the response entity
	 */
	@PutMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_ADD_APPLICANT') and #oauth2.hasScope('write')")
	public ResponseEntity<ApplicantNotes> updateNote(@PathVariable Long code,
			@Valid @RequestBody ApplicantNotes applicant) {
		ApplicantNotes saveApplicant = applicantNotesService.update(code, applicant);
		return ResponseEntity.ok(saveApplicant);
	}

	/**
	 * Find a note for applicant by code.
	 *
	 * @param code the code
	 * @return the response entity
	 */
	@GetMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public ResponseEntity<ApplicantNotes> findNoteByCode(@PathVariable Long code) {
		ApplicantNotes applicant = applicantNotesRepository.findOne(code);
		return applicant != null ? ResponseEntity.ok(applicant) : ResponseEntity.notFound().build();
	}

}
