package com.mycareer.api.cors;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.mycareer.api.config.property.MyCareerApiProperty;

/**
 * The Class CorsFilter.
 * 
 * For security reasons, browsers prohibit AJAX calls to resources residing
 * outside the current origin. For example, as you’re checking your bank account
 * in one tab, you could have the evil.com website in another tab. The scripts
 * from evil.com shouldn’t be able to make AJAX requests to your bank API
 * (withdrawing money from your account!) using your credentials.
 * 
 * Cross-origin resource sharing (CORS) is a W3C specification implemented by
 * most browsers that allows you to specify in a flexible way what kind of cross
 * domain requests are authorized, instead of using some less secured and less
 * powerful hacks like IFrame or JSONP.
 * 
 * ref. https://spring.io/blog/2015/06/08/cors-support-in-spring-framework
 * 
 * @author Alexander Souza
 */
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsFilter implements Filter {

	@Autowired
	private MyCareerApiProperty mycareerApiProperty;

	/*
	 * (non-Javadoc)
	 * 
	 * @see javax.servlet.Filter#doFilter(javax.servlet.ServletRequest,
	 * javax.servlet.ServletResponse, javax.servlet.FilterChain)
	 */
	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {

		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) resp;

		mycareerApiProperty.setOriginAllowed(request.getHeader("Origin"));

		// Verify those two origin allowed
		// if(request.getHeader("Origin").equals("https://mycareer-webjobs.herokuapp.com")
		// ||
		// request.getHeader("Origin").equals("https://mycareer-webadmin.herokuapp.com")
		// || request.getHeader("Origin").equals("https://mycareer-api.herokuapp.com"))
		// {
		// mycareerApiProperty.setOriginAllowed(request.getHeader("Origin"));
		// }

		response.setHeader("Access-Control-Allow-Origin", mycareerApiProperty.getOriginAllowed());
		response.setHeader("Access-Control-Allow-Credentials", "true");

		if ("OPTIONS".equals(request.getMethod())
				&& mycareerApiProperty.getOriginAllowed().equals(request.getHeader("Origin"))) {
			response.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
			response.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type, Accept");
			response.setHeader("Access-Control-Max-Age", "3600");

			response.setStatus(HttpServletResponse.SC_OK);
		} else {
			chain.doFilter(req, resp);
		}

	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see javax.servlet.Filter#destroy()
	 */
	@Override
	public void destroy() {
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see javax.servlet.Filter#init(javax.servlet.FilterConfig)
	 */
	@Override
	public void init(FilterConfig arg0) throws ServletException {
	}

}
