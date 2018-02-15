package com.mycareer.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.mycareer.api.model.Questions;

public interface QuestionsRepository extends JpaRepository<Questions, Long> {

	@Query(value = "select * from questions where code_applicant = ?1", nativeQuery = true)
	public List<Questions> findQuestions(Long code);

	@Query(value = "select * from questions where code = ?1", nativeQuery = true)
	public List<Questions> findOneQuestions(Long code);

	@Modifying
	@Transactional
	@Query(value = "delete from questions where code_applicant = ?1", nativeQuery = true)
	public void deleteQuestions(Long codeQ);

}
