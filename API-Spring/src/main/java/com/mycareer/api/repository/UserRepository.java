package com.mycareer.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mycareer.api.model.Users;


/**
 * The Interface UserRepository.
 * 
 * @author Alexander Souza
 */
public interface UserRepository extends JpaRepository<Users, Long> {

	/**
	 * Find User by email.
	 *
	 * @param email the email
	 * @return the optional
	 */
	public Optional<Users> findByEmail(String email);
	
}
