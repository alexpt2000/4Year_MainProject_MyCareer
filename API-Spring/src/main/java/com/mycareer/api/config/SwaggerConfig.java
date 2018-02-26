package com.mycareer.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static springfox.documentation.builders.PathSelectors.regex;


/**
 * The Class SwaggerConfig.
 * 
 * Generate documentation of API using Swagger UI
 * 
 * The docuement can be see here:
 * https://mycareer-api.herokuapp.com/swagger-ui.html
 * 
 * Ref. http://www.baeldung.com/swagger-2-documentation-for-spring-rest-api
 * Ref. https://dzone.com/articles/spring-boot-restful-api-documentation-with-swagger
 * 
 * 
 * 
 * @author Alexander Souza
 */
@EnableSwagger2
@Configuration
public class SwaggerConfig {

	/**
	 * Product api.
	 *
	 * @return the docket
	 */
	@Bean
	public Docket productApi() {
		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors.basePackage("com.mycareer.api")).paths(regex("/.*")).build()
				.apiInfo(metaInfo());
	}

	private ApiInfo metaInfo() {

		ApiInfo apiInfo = new ApiInfo(
				"MyCarrer API", "4th Year Project - GMIT", "1.0", "Terms of Service", new Contact("Alexander Souza",
						"https://github.com/alexpt2000gmit/4Year_MainProject_MyCareer", "alexpt2000@gmail.com"),
				"", "");

		return apiInfo;
	}
}
