package com.mycareer.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mycareer.api.model.ApplicantNotes;


/**
 * The Interface ApplicantNotesRepository.
 * 
 * @author Alexander Souza
 */
public interface ApplicantNotesRepository extends JpaRepository<ApplicantNotes, Long> {

	/**
	 * Find applicants base on job select
	 *
	 * @param code the code
	 * @return the list
	 */
	@Query(value = "SELECT * FROM applicant_notes join applicants on applicants.code = applicant_notes.code_applicant where applicants.code_job = ?1", nativeQuery = true)
	public List<ApplicantNotes> findByJobCode(Long code);

}
