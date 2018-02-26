package com.mycareer.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mycareer.api.model.ListQuestions;


/**
 * The Interface ListQuestionsRepository.
 * 
 * @author Alexander Souza
 */
public interface ListQuestionsRepository extends JpaRepository<ListQuestions, Long> {

	/**
	 * Find all elements of list questions.
	 *
	 * @return the list
	 */
	@Query(value = "select * from listquestions", nativeQuery = true)
	public List<ListQuestions> findListQuestions();

}
