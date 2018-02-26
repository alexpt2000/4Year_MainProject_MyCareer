package com.mycareer.api.event;

import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationEvent;

/**
 * The Class ResourceCreatedEvent.
 * 
 * @author Alexander Souza
 */
public class ResourceCreatedEvent extends ApplicationEvent {

	private static final long serialVersionUID = 1L;
	
	private HttpServletResponse response;
	private Long code;

	/**
	 * Instantiates a new resource created event.
	 *
	 * @param source the source
	 * @param response the response
	 * @param code the code
	 */
	public ResourceCreatedEvent(Object source, HttpServletResponse response, Long code) {
		super(source);
		this.response = response;
		this.code = code;
	}

	/**
	 * Gets the response.
	 *
	 * @return the response
	 */
	public HttpServletResponse getResponse() {
		return response;
	}

	/**
	 * Gets the code.
	 *
	 * @return the code
	 */
	public Long getCode() {
		return code;
	}
	
}
