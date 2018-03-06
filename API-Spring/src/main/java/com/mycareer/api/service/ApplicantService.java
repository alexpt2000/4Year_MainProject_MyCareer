package com.mycareer.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.mycareer.api.model.Applicants;
import com.mycareer.api.repository.ApplicantRepository;


/**
 * The Class ApplicantService.
 * 
 * @author Alexander Souza
 */
@Service
public class ApplicantService {
	
	@Autowired
	private ApplicantRepository applicantRepository;

	/**
	 * Update Applicants.
	 *
	 * @param code the code
	 * @param applicant the applicant
	 * @return the applicants
	 */
	public Applicants update(Long code, Applicants applicant) {
		Applicants saveApplicants = findByCode(code);
		
		BeanUtils.copyProperties(applicant, saveApplicants, "code");
		return applicantRepository.save(saveApplicants);
	}


	/**
	 * Find applicant by code.
	 *
	 * @param code the code
	 * @return the applicants
	 */
	public Applicants findByCode(Long code) {
		Applicants saveApplicants = applicantRepository.findOne(code);
		if (saveApplicants == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return saveApplicants;
	}
	
}
