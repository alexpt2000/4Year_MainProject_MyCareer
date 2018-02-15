package com.mycareer.api.resource;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mycareer.api.event.ResourceCreatedEvent;
import com.mycareer.api.model.ApplicantNotes;
import com.mycareer.api.model.Applicants;
import com.mycareer.api.repository.ApplicantNotesRepository;
import com.mycareer.api.repository.ApplicantRepository;

@RestController
@RequestMapping("/applicantsweb")
public class ApplicantWebResource {

	@Autowired
	private ApplicantRepository applicantRepository;
	
	@Autowired
	private ApplicantNotesRepository applicantNotesRepository;

	@Autowired
	private ApplicationEventPublisher publisher;

	@GetMapping
	public Page<Applicants> find(@RequestParam(required = false, defaultValue = "%") String fullname,
			Pageable pageable) {
		return applicantRepository.findByFullnameContaining(fullname, pageable);
	}

	@PostMapping
	public ResponseEntity<Applicants> save(@Valid @RequestBody Applicants applicant, HttpServletResponse response) {
		Applicants saveApplicants = applicantRepository.save(applicant);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveApplicants.getCode()));
		
		
		// After applicants applies, will be create a new record for notes
		ApplicantNotes applicantNotes = new ApplicantNotes(); 
		applicantNotes.setApplicant(applicant);
		ApplicantNotes saveApplicant = applicantNotesRepository.save(applicantNotes);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, applicantNotes.getCode()));
		
			
		return ResponseEntity.status(HttpStatus.CREATED).body(saveApplicants);
	}

}
