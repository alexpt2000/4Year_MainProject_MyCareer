package com.mycareer.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mycareer.api.model.Questions;

public interface QuestionsRepository extends JpaRepository<Questions, Long> {


}
