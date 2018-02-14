package com.mycareer.api.repository;

import java.math.BigInteger;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mycareer.api.model.Applicants;
import com.mycareer.api.model.ApplicantsScore;

public interface ApplicantRepository extends JpaRepository<Applicants, Long> {

	public Page<Applicants> findByFullnameContaining(String fullname, Pageable pageable);

	@Query(value = "SELECT * FROM Applicants a WHERE a.code_job = ?1", nativeQuery = true)
	public List<Applicants> findByJobCode(Long code);

	@Query(value = "select count(*) as total from Applicants", nativeQuery = true)
	public List<BigInteger> TotalApplicants();

	@Query(value = "select count(*) as total from Applicants WHERE status like 'New applicant'", nativeQuery = true)
	public List<BigInteger> TotalNewApplicants();
	
//	@Query(value = "select applicants.*, applicant_notes.score, avg(questions.score) as score_questions "
//			+ "from applicants "
//			+ "join questions "
//			+ "on questions.code_applicant = applicants.code "
//			+ "join applicant_notes "
//			+ "on applicant_notes.code_applicant =  applicants.code", nativeQuery = true)
//	public List<ApplicantsScore> applicantsWhitScore();

}


//select applicants.*, applicant_notes.score, avg(questions.score) as score_questions from applicants join questions on questions.code_applicant = applicants.code join applicant_notes on applicant_notes.code_applicant =  applicants.code
//
//
//select applicants.*, applicant_notes.score, avg(questions.score) as score_questions 
//from applicants
//join questions
//on questions.code_applicant = applicants.code 
//join applicant_notes
//on applicant_notes.code_applicant =  applicants.code