package com.mycareer.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.mycareer.api.model.Jobs;
import com.mycareer.api.repository.JobRepository;

@Service
public class JobService {
	
	@Autowired
	private JobRepository jobRepository;

	public Jobs update(Long code, Jobs job) {
		Jobs saveJob = findByCode(code);
		
		BeanUtils.copyProperties(job, saveJob, "code");
		return jobRepository.save(saveJob);
	}

//	public void updatePropertyEnable(Long code, Boolean ativo) {
//		Jobs saveJob = findByCode(code);
//		saveJob.setAtivo(ativo);
//		jobRepository.save(saveJob);
//	}
	
	public Jobs findByCode(Long code) {
		Jobs saveJob = jobRepository.findOne(code);
		if (saveJob == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return saveJob;
	}
	
}
