package com.mycareer.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.mycareer.api.model.Jobs;
import com.mycareer.api.repository.JobRepository;


/**
 * The Class JobService.
 * 
 * @author Alexander Souza
 */
@Service
public class JobService {

	@Autowired
	private JobRepository jobRepository;

	/**
	 * Update Job.
	 *
	 * @param code the code
	 * @param job the job
	 * @return the jobs
	 */
	public Jobs update(Long code, Jobs job) {
		Jobs saveJob = findByCode(code);

		BeanUtils.copyProperties(job, saveJob, "code");
		return jobRepository.save(saveJob);
	}

	/**
	 * Find job by code.
	 *
	 * @param code the code
	 * @return the jobs
	 */
	public Jobs findByCode(Long code) {
		Jobs saveJob = jobRepository.findOne(code);
		if (saveJob == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return saveJob;
	}

}
