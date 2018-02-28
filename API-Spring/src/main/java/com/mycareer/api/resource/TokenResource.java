package com.mycareer.api.resource;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycareer.api.config.property.MyCareerApiProperty;

/**
 * The Class TokenResource.
 * 
 * @author Alexander Souza
 */

@Profile("oauth-security")
@RestController
@RequestMapping("/tokens")
public class TokenResource {
	
	@Autowired
	private MyCareerApiProperty mycareerApiProperty;

	/**
	 * Revoke token.
	 * 
	 * Will request a new to token and will return a empty cookie
	 *
	 * @param req the req
	 * @param resp the resp
	 */
	@DeleteMapping("/revoke")
	public void revoke(HttpServletRequest req, HttpServletResponse resp) {
		Cookie cookie = new Cookie("refreshToken", null);
		cookie.setHttpOnly(true);
		cookie.setSecure(mycareerApiProperty.getSecurity().isEnableHttps());
		cookie.setPath(req.getContextPath() + "/oauth/token");
		cookie.setMaxAge(0);
		
		resp.addCookie(cookie);
		resp.setStatus(HttpStatus.NO_CONTENT.value());
	}
	
}
