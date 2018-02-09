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

@RestController
@RequestMapping("/applicants/listquestions")
public class ListQuestionsResource {

	@Autowired
	private ListQuestionsRepository listQuestionsRepository;

	@Autowired
	private ListQuestionsService listQuestionsService;

	@Autowired
	private ApplicationEventPublisher publisher;

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_ADD_APPLICANT') and #oauth2.hasScope('write')")
	public ResponseEntity<ListQuestions> add(@Valid @RequestBody ListQuestions listQuestions, HttpServletResponse response) {
		ListQuestions saveListQuestions = listQuestionsRepository.save(listQuestions);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveListQuestions.getCode()));
		return ResponseEntity.status(HttpStatus.CREATED).body(saveListQuestions);
	}

	@DeleteMapping("/{code}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_APPLICANT') and #oauth2.hasScope('write')")
	public void remove(@PathVariable Long code) {
		listQuestionsRepository.delete(code);
	}

	@PutMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_ADD_APPLICANT') and #oauth2.hasScope('write')")
	public ResponseEntity<ListQuestions> update(@PathVariable Long code, @Valid @RequestBody ListQuestions listQuestions) {
		ListQuestions saveListQuestions = listQuestionsService.update(code, listQuestions);
		return ResponseEntity.ok(saveListQuestions);
	}

	@GetMapping("/{code}")
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public ResponseEntity<ListQuestions> findByCode(@PathVariable Long code) {
		ListQuestions listQuestions = listQuestionsRepository.findOne(code);
		return listQuestions != null ? ResponseEntity.ok(listQuestions) : ResponseEntity.notFound().build();
	}

//	@GetMapping
//	@PreAuthorize("hasAuthority('ROLE_READ_SCHEDULE') and #oauth2.hasScope('read')")
//	public Page<Schedules> find(@RequestParam(required = false, defaultValue = "%") String title, Pageable pageable) {
//		return schedulesRepository.findByTitleContaining(title, pageable);
//	}

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_READ_APPLICANT') and #oauth2.hasScope('read')")
	public List<ListQuestions> find() {
		return listQuestionsRepository.findListQuestions();
	}
	
	
}
