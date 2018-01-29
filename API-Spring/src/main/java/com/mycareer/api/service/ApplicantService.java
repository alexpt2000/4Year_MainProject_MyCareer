package com.mycareer.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.mycareer.api.model.Alerts;
import com.mycareer.api.model.Applicants;
import com.mycareer.api.model.Jobs;
import com.mycareer.api.repository.AlertsRepository;
import com.mycareer.api.repository.ApplicantRepository;
import com.mycareer.api.repository.JobRepository;

@Service
public class ApplicantService {
	
	@Autowired
	private ApplicantRepository applicantRepository;

	public Applicants update(Long code, Applicants applicant) {
		Applicants saveApplicants = findByCode(code);
		
		BeanUtils.copyProperties(applicant, saveApplicants, "code");
		return applicantRepository.save(saveApplicants);
	}


	public Applicants findByCode(Long code) {
		Applicants saveApplicants = applicantRepository.findOne(code);
		if (saveApplicants == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return saveApplicants;
	}
	
}
