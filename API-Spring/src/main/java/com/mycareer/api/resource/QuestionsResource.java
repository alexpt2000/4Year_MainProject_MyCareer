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
import com.mycareer.api.model.Questions;
import com.mycareer.api.repository.QuestionsRepository;
import com.mycareer.api.service.QuestionsService;

/**
 * The Class QuestionsResource.
 * 
 * Are questions to be applied to applicant
 * 
 * @author Alexander Souza
 */

@RestController
@RequestMapping("/applicants/questions")
public class QuestionsResource {

	@Autowired
	private QuestionsRepository questionsRepository;

	@Autowired
	private QuestionsService questionsService;

	@Autowired
	private ApplicationEventPublisher publisher;

	/**
	 * Adds the question to applicant.
	 *
	 * @param questions the questions
	 * @param response the response
	 * @return the response entity
	 */
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_ADD_APPLICANT') and #oauth2.hasScope('write')")
	public ResponseEntity<Questions> addQuestionToApplicant(@Valid @RequestBody Questions questions, HttpServletResponse response) {
		Questions saveQuestion = questionsRepository.save(questions);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveQuestion.getCode()));
		return ResponseEntity.status(HttpStatus.CREATED).body(saveQuestion);
	}

	/**
	 * Removes the.
	 *
	 * @param code the code
	 */
	@DeleteMapping("/{code}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_APPLICANT') and #oauth2.hasScope('write')")
	public void remove(@PathVariable Long code) {
		questionsRepository.delete(code);
	}

	/**
	 * Update question on applicant.
	 *
	 * @param code the code
	 * @param question the question
	 * @return the response entity
	 */
	@PutMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_ADD_APPLICANT') and #oauth2.hasScope('write')")
	public ResponseEntity<Questions> updateQuestionOnApplicant(@PathVariable Long code, @Valid @RequestBody Questions question) {
		Questions saveQuestion = questionsService.update(code, question);
		return ResponseEntity.ok(saveQuestion);
	}

	/**
	 * Find question for applicant by code.
	 *
	 * @param code the code
	 * @return the list
	 */
	@GetMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public List<Questions> findQuestionForApplicantByCode(@PathVariable Long code) {
		//Questions question = questionsRepository.findQuestions(code);
		return questionsRepository.findQuestions(code);
	}
	
	/**
	 * Find by question code.
	 *
	 * @param code the code
	 * @return the list
	 */
	@GetMapping("/question/{code}")
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public List<Questions> findByQuestionCode(@PathVariable Long code) {
		//Questions question = questionsRepository.findQuestions(code);
		return questionsRepository.findOneQuestions(code);
	}

}
