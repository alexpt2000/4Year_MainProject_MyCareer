package com.mycareer.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mycareer.api.model.ListQuestions;

public interface ListQuestionsRepository extends JpaRepository<ListQuestions, Long> {

	@Query(value = "select distinct type_question as value from listquestions", nativeQuery = true)
	public List<String> findListQuestions();

}
