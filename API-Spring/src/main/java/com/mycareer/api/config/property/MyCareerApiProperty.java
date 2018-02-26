package com.mycareer.api.config.property;

import org.springframework.boot.context.properties.ConfigurationProperties;


/**
 * The Class MyCareerApiProperty.
 * 
 * Set the origin allowed to the API, this will check by the CORS
 * 
 * @author Alexander Souza
 */

@ConfigurationProperties("mycareer")
public class MyCareerApiProperty {

	private String originAllowed = "http://localhost:8000";

	private final Security security = new Security();

	/**
	 * Gets the security.
	 *
	 * @return the security
	 */
	public Security getSecurity() {
		return security;
	}

	/**
	 * Gets the origin allowed.
	 *
	 * @return the origin allowed
	 */
	public String getOriginAllowed() {
		return originAllowed;
	}

	/**
	 * Sets the origin allowed.
	 *
	 * @param originAllowed the new origin allowed
	 */
	public void setOriginAllowed(String originAllowed) {
		this.originAllowed = originAllowed;
	}

	/**
	 * The Class Security.
	 */
	public static class Security {

		private boolean enableHttps;

		/**
		 * Checks if is enable https.
		 *
		 * @return true, if is enable https
		 */
		public boolean isEnableHttps() {
			return enableHttps;
		}

		/**
		 * Sets the enable https.
		 *
		 * @param enableHttps the new enable https
		 */
		public void setEnableHttps(boolean enableHttps) {
			this.enableHttps = enableHttps;
		}

	}

}
