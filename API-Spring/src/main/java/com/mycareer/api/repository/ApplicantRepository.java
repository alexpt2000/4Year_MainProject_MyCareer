package com.mycareer.api.repository;

import java.math.BigInteger;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mycareer.api.model.Applicants;


/**
 * The Interface ApplicantRepository.
 * 
 * @author Alexander Souza
 */
public interface ApplicantRepository extends JpaRepository<Applicants, Long> {

	/**
	 * Find by fullname containing.
	 *
	 * @param fullname the fullname
	 * @param pageable the pageable
	 * @return the page
	 */
	public Page<Applicants> findByFullnameContaining(String fullname, Pageable pageable);

	/**
	 *  Find applicants base on job select
	 *
	 * @param code the code
	 * @return the list
	 */
	@Query(value = "SELECT * FROM applicants a WHERE a.code_job = ?1", nativeQuery = true)
	public List<Applicants> findByJobCode(Long code);

	/**
	 * Count the total applicants on database.
	 *
	 * @return the list
	 */
	@Query(value = "select count(*) as total from applicants", nativeQuery = true)
	public List<BigInteger> TotalApplicants();

	/**
	 * Count the total applicants on database whe applicant is set as "New applicant".
	 *
	 * @return the list
	 */
	@Query(value = "select count(*) as total from applicants WHERE status like 'New applicant'", nativeQuery = true)
	public List<BigInteger> TotalNewApplicants();

}
