package com.mycareer.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mycareer.api.model.ApplicantNotes;

public interface ApplicantNotesRepository extends JpaRepository<ApplicantNotes, Long> {

	@Query(value = "SELECT * FROM applicant_notes join applicants on applicants.code = applicant_notes.code_applicant where applicants.code_job = ?1", nativeQuery = true)
	public List<ApplicantNotes> findByJobCode(Long code);

}
