package com.mycareer.api.event.listener;

import java.net.URI;

import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.mycareer.api.event.ResourceCreatedEvent;

/**
 * The listener interface for receiving resourceCreate events.
 * The class that is interested in processing a resourceCreate
 * event implements this interface, and the object created
 * with that class is registered with a component using the
 * component's code addResourceCreateListener code method. When
 * the resourceCreate event occurs, that object's appropriate
 * method is invoked.
 *
 * 
 * 
 * @author Alexander Souza
 */
@Component
public class ResourceCreateListener implements ApplicationListener<ResourceCreatedEvent> {

	/* (non-Javadoc)
	 * @see org.springframework.context.ApplicationListener#onApplicationEvent(org.springframework.context.ApplicationEvent)
	 */
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
