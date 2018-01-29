package com.mycareer.api.resource;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycareer.api.event.ResourceCreatedEvent;
import com.mycareer.api.model.Applicants;
import com.mycareer.api.repository.ApplicantRepository;

@RestController
@RequestMapping("/applicantsweb")
public class ApplicantWebResource {

	@Autowired
	private ApplicantRepository applicantRepository;
	
	
	@Autowired
	private ApplicationEventPublisher publisher;


	@PostMapping
	public ResponseEntity<Applicants> save(@Valid @RequestBody Applicants applicant, HttpServletResponse response) {
		Applicants saveApplicants = applicantRepository.save(applicant);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveApplicants.getCode()));
		return ResponseEntity.status(HttpStatus.CREATED).body(saveApplicants);
	}

}
