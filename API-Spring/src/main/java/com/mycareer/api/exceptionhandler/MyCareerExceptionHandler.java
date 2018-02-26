package com.mycareer.api.exceptionhandler;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 * The Class MyCareerExceptionHandler.
 * 
 * Handling errors correctly in APIs while providing meaningful error messages
 * is a very desirable feature, as it can help the API client properly respond
 * to issues. The default behavior tends to be returning stack traces that are
 * hard to understand and ultimately useless for the API client. Partitioning
 * the error information into fields also enables the API client to parse it and
 * provide better error messages to the user. In this article, we will cover how
 * to do proper error handling when building a REST API with Spring Boot.
 * 
 * Ref. https://www.toptal.com/java/spring-boot-rest-api-error-handling
 * 
 * @author Alexander Souza
 */
@ControllerAdvice
public class MyCareerExceptionHandler extends ResponseEntityExceptionHandler {

	@Autowired
	private MessageSource messageSource;

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.web.servlet.mvc.method.annotation.
	 * ResponseEntityExceptionHandler#handleHttpMessageNotReadable(org.
	 * springframework.http.converter.HttpMessageNotReadableException,
	 * org.springframework.http.HttpHeaders, org.springframework.http.HttpStatus,
	 * org.springframework.web.context.request.WebRequest)
	 */
	@Override
	protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {

		String mensagemUser = messageSource.getMessage("message.invalid", null, LocaleContextHolder.getLocale());
		String mensagemDeveloper = ex.getCause() != null ? ex.getCause().toString() : ex.toString();
		List<Erro> erros = Arrays.asList(new Erro(mensagemUser, mensagemDeveloper));
		return handleExceptionInternal(ex, erros, headers, HttpStatus.BAD_REQUEST, request);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.web.servlet.mvc.method.annotation.
	 * ResponseEntityExceptionHandler#handleMethodArgumentNotValid(org.
	 * springframework.web.bind.MethodArgumentNotValidException,
	 * org.springframework.http.HttpHeaders, org.springframework.http.HttpStatus,
	 * org.springframework.web.context.request.WebRequest)
	 */
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {

		List<Erro> erros = createListError(ex.getBindingResult());
		return handleExceptionInternal(ex, erros, headers, HttpStatus.BAD_REQUEST, request);
	}

	/**
	 * Handle empty result data access exception.
	 *
	 * @param ex
	 *            the ex
	 * @param request
	 *            the request
	 * @return the response entity
	 */
	@ExceptionHandler({ EmptyResultDataAccessException.class })
	public ResponseEntity<Object> handleEmptyResultDataAccessException(EmptyResultDataAccessException ex,
			WebRequest request) {
		String mensagemUser = messageSource.getMessage("resource.not-found", null, LocaleContextHolder.getLocale());
		String mensagemDeveloper = ex.toString();
		List<Erro> erros = Arrays.asList(new Erro(mensagemUser, mensagemDeveloper));
		return handleExceptionInternal(ex, erros, new HttpHeaders(), HttpStatus.NOT_FOUND, request);
	}

	/**
	 * Handle data integrity violation exception.
	 *
	 * @param ex
	 *            the ex
	 * @param request
	 *            the request
	 * @return the response entity
	 */
	@ExceptionHandler({ DataIntegrityViolationException.class })
	public ResponseEntity<Object> handleDataIntegrityViolationException(DataIntegrityViolationException ex,
			WebRequest request) {
		String mensagemUser = messageSource.getMessage("resource.operation-not-allowed", null,
				LocaleContextHolder.getLocale());
		String mensagemDeveloper = ExceptionUtils.getRootCauseMessage(ex);
		List<Erro> erros = Arrays.asList(new Erro(mensagemUser, mensagemDeveloper));
		return handleExceptionInternal(ex, erros, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
	}

	private List<Erro> createListError(BindingResult bindingResult) {
		List<Erro> erros = new ArrayList<>();

		for (FieldError fieldError : bindingResult.getFieldErrors()) {
			String mensagemUser = messageSource.getMessage(fieldError, LocaleContextHolder.getLocale());
			String mensagemDeveloper = fieldError.toString();
			erros.add(new Erro(mensagemUser, mensagemDeveloper));
		}

		return erros;
	}

	/**
	 * The Class Erro.
	 */
	public static class Erro {

		private String mensagemUser;
		private String mensagemDeveloper;

		/**
		 * Instantiates a new erro.
		 *
		 * @param mensagemUser
		 *            the mensagem user
		 * @param mensagemDeveloper
		 *            the mensagem developer
		 */
		public Erro(String mensagemUser, String mensagemDeveloper) {
			this.mensagemUser = mensagemUser;
			this.mensagemDeveloper = mensagemDeveloper;
		}

		/**
		 * Gets the mensagem user.
		 *
		 * @return the mensagem user
		 */
		public String getMensagemUser() {
			return mensagemUser;
		}

		/**
		 * Gets the mensagem developer.
		 *
		 * @return the mensagem developer
		 */
		public String getMensagemDeveloper() {
			return mensagemDeveloper;
		}

	}

}
