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
import com.mycareer.api.model.Alerts;
import com.mycareer.api.repository.AlertsRepository;
import com.mycareer.api.service.AlertsService;

@RestController
@RequestMapping("/alertsweb")
public class AlertsWebResource {

	@Autowired
	private AlertsRepository alertsRepository;
	
	@Autowired
	private AlertsService alertsService;
	
	@Autowired
	private ApplicationEventPublisher publisher;


	@GetMapping //@PreAuthorize("hasAuthority('ROLE_PESQUISAR_PESSOA')")
	public Page<Alerts> find(@RequestParam(required = false, defaultValue = "%") String email, Pageable pageable) {
		return alertsRepository.findByEmailContaining(email, pageable);
	}
	
	@PostMapping
	public ResponseEntity<Alerts> save(@Valid @RequestBody Alerts alert, HttpServletResponse response) {
		Alerts saveAlert = alertsRepository.save(alert);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveAlert.getCode()));
		return ResponseEntity.status(HttpStatus.CREATED).body(saveAlert);
	}

}
