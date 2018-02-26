package com.mycareer.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.mycareer.api.model.Questions;


/**
 * The Interface QuestionsRepository.
 * 
 * @author Alexander Souza
 */
public interface QuestionsRepository extends JpaRepository<Questions, Long> {

	/**
	 * List all questions of one specific applicant.
	 *
	 * @param code the code
	 * @return the list
	 */
	@Query(value = "select * from questions where code_applicant = ?1", nativeQuery = true)
	public List<Questions> findQuestions(Long code);

	/**
	 * Find a especific question by code
	 *
	 * @param code the code
	 * @return the list
	 */
	@Query(value = "select * from questions where code = ?1", nativeQuery = true)
	public List<Questions> findOneQuestions(Long code);

	/**
	 * Delete all questions related applicant
	 *
	 * @param codeQ the code Q
	 */
	@Modifying
	@Transactional
	@Query(value = "delete from questions where code_applicant = ?1", nativeQuery = true)
	public void deleteQuestions(Long codeQ);

}
