package com.mycareer.api.repository;

import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;

import com.mycareer.api.model.Applicants;
import com.mycareer.api.model.ApplicantsScore;

@Transactional
public interface ApplicantRepositoryScore extends JpaRepository<Applicants, Long> {

//	@Query(value = "select * from Applicants", nativeQuery = true)
	
	@Query(value = "select new map (a.fullname) from applicants a", nativeQuery = true)
	public List<Map<String, Object>> applicantsWhitScore();

}



//@Query(value = "select applicants.*, applicant_notes.score, avg(questions.score) as scorequestions "
//		+ "from applicants "
//		+ "join questions "
//		+ "on questions.code_applicant = applicants.code "
//		+ "join applicant_notes "
//		+ "on applicant_notes.code_applicant =  applicants.code", nativeQuery = true)





//select applicants.*, applicant_notes.score, avg(questions.score) as score_questions from applicants join questions on questions.code_applicant = applicants.code join applicant_notes on applicant_notes.code_applicant =  applicants.code
//
//
//select applicants.*, applicant_notes.score, avg(questions.score) as score_questions 
//from applicants
//join questions
//on questions.code_applicant = applicants.code 
//join applicant_notes
//on applicant_notes.code_applicant =  applicants.code