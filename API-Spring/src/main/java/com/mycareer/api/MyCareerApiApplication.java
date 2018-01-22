package com.mycareer.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.mycareer.api.config.property.MyCareerApiProperty;

@SpringBootApplication
@EnableConfigurationProperties(MyCareerApiProperty.class)
public class MyCareerApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyCareerApiApplication.class, args);
	}
	
}


//spring.profiles.active=basic-security
//spring.profiles.active=oauth-security

// https://github.com/alexpt2000gmit/4Year_MainProject_MyCareer