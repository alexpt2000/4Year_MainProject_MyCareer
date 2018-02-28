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
import com.mycareer.api.model.ListQuestions;
import com.mycareer.api.repository.ListQuestionsRepository;
import com.mycareer.api.service.ListQuestionsService;

/**
 * The Class ListQuestionsResource.
 * 
 * @author Alexander Souza
 */


@RestController
@RequestMapping("/applicants/listquestions")
public class ListQuestionsResource {

	@Autowired
	private ListQuestionsRepository listQuestionsRepository;

	@Autowired
	private ListQuestionsService listQuestionsService;

	@Autowired
	private ApplicationEventPublisher publisher;

	/**
	 * Adds the new question.
	 *
	 * @param listQuestions the list questions
	 * @param response the response
	 * @return the response entity
	 */
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_ADD_APPLICANT') and #oauth2.hasScope('write')")
	public ResponseEntity<ListQuestions> addNewQuestion(@Valid @RequestBody ListQuestions listQuestions, HttpServletResponse response) {
		ListQuestions saveListQuestions = listQuestionsRepository.save(listQuestions);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveListQuestions.getCode()));
		return ResponseEntity.status(HttpStatus.CREATED).body(saveListQuestions);
	}

	/**
	 * Removes the question.
	 *
	 * @param code the code
	 */
	@DeleteMapping("/{code}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_APPLICANT') and #oauth2.hasScope('write')")
	public void removeQuestion(@PathVariable Long code) {
		listQuestionsRepository.delete(code);
	}

	/**
	 * Update question.
	 *
	 * @param code the code
	 * @param listQuestions the list questions
	 * @return the response entity
	 */
	@PutMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_ADD_APPLICANT') and #oauth2.hasScope('write')")
	public ResponseEntity<ListQuestions> updateQuestion(@PathVariable Long code, @Valid @RequestBody ListQuestions listQuestions) {
		ListQuestions saveListQuestions = listQuestionsService.update(code, listQuestions);
		return ResponseEntity.ok(saveListQuestions);
	}

	/**
	 * Find question by code.
	 *
	 * @param code the code
	 * @return the response entity
	 */
	@GetMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public ResponseEntity<ListQuestions> findQuestionByCode(@PathVariable Long code) {
		ListQuestions listQuestions = listQuestionsRepository.findOne(code);
		return listQuestions != null ? ResponseEntity.ok(listQuestions) : ResponseEntity.notFound().build();
	}


	/**
	 * List all question.
	 *
	 * @return the list
	 */
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public List<ListQuestions> listAllQuestion() {
		return listQuestionsRepository.findListQuestions();
	}
	
	
}
