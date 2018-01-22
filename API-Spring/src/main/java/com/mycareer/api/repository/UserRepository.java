package com.mycareer.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mycareer.api.model.Users;

public interface UserRepository extends JpaRepository<Users, Long> {

	public Optional<Users> findByUserEmail(String userEmail);
	
}
