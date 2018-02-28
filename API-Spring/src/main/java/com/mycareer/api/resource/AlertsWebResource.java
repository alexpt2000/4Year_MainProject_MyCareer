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
import com.mycareer.api.model.Alerts;
import com.mycareer.api.repository.AlertsRepository;


/**
 * The Class AlertsWebResource.
 * 
 * @author Alexander Souza
 */
@RestController
@RequestMapping("/alertsweb")
public class AlertsWebResource {

	/** The alerts repository. */
	@Autowired
	private AlertsRepository alertsRepository;

	/** The publisher. */
	@Autowired
	private ApplicationEventPublisher publisher;

	/**
	 * Save email for alerts
	 *
	 * @param alert the alert
	 * @param response the response
	 * @return the response entity
	 */
	@PostMapping
	public ResponseEntity<Alerts> saveEmail(@Valid @RequestBody Alerts alert, HttpServletResponse response) {
		Alerts saveAlert = alertsRepository.save(alert);
		publisher.publishEvent(new ResourceCreatedEvent(this, response, saveAlert.getCode()));
		return ResponseEntity.status(HttpStatus.CREATED).body(saveAlert);
	}

}
