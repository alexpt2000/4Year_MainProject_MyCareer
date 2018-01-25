package com.mycareer.api.event.listener;

import java.net.URI;

import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.mycareer.api.event.ResourceCreatedEvent;

@Component
public class ResourceCreateListener implements ApplicationListener<ResourceCreatedEvent> {

	@Override
	public void onApplicationEvent(ResourceCreatedEvent resourceCreatedEvent) {
		HttpServletResponse response = resourceCreatedEvent.getResponse();
		Long code = resourceCreatedEvent.getCode();
		
		addHeaderLocation(response, code);
	}

	private void addHeaderLocation(HttpServletResponse response, Long code) {
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{code}")
				.buildAndExpand(code).toUri();
		response.setHeader("Location", uri.toASCIIString());
	}

}
