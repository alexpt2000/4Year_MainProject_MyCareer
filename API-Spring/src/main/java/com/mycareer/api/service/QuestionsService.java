package com.mycareer.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.mycareer.api.model.Questions;
import com.mycareer.api.repository.QuestionsRepository;

@Service
public class QuestionsService {

	@Autowired
	private QuestionsRepository questionsRepository;

	public Questions update(Long code, Questions question) {
		Questions saveQuestion = findByCode(code);

		BeanUtils.copyProperties(question, saveQuestion, "code");
		return questionsRepository.save(saveQuestion);
	}

	public Questions findByCode(Long code) {
		Questions saveQuestion = questionsRepository.findOne(code);
		if (saveQuestion == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return saveQuestion;
	}

}
