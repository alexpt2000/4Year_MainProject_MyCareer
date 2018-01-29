package com.mycareer.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mycareer.api.model.Applicants;

public interface ApplicantRepository extends JpaRepository<Applicants, Long> {

	public Page<Applicants> findByFullnameContaining(String fullname, Pageable pageable);

}
