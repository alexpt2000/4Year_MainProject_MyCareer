package com.mycareer.api.repository;

import java.math.BigInteger;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mycareer.api.model.Applicants;

public interface ApplicantRepository extends JpaRepository<Applicants, Long> {

	public Page<Applicants> findByFullnameContaining(String fullname, Pageable pageable);

	@Query(value = "SELECT * FROM applicants a WHERE a.code_job = ?1", nativeQuery = true)
	public List<Applicants> findByJobCode(Long code);

	@Query(value = "select count(*) as total from applicants", nativeQuery = true)
	public List<BigInteger> TotalApplicants();

	@Query(value = "select count(*) as total from applicants WHERE status like 'New applicant'", nativeQuery = true)
	public List<BigInteger> TotalNewApplicants();

}
