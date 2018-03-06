package com.mycareer.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.mycareer.api.model.ApplicantNotes;
import com.mycareer.api.repository.ApplicantNotesRepository;

/**
 * The Class ApplicantNotesService.
 * 
 * @author Alexander Souza
 */
@Service
public class ApplicantNotesService {

	@Autowired
	private ApplicantNotesRepository applicantNotesRepository;

	/**
	 * Update Applicants.
	 *
	 * @param code the code
	 * @param applicantNotes the applicant notes
	 * @return the applicant notes
	 */
	public ApplicantNotes update(Long code, ApplicantNotes applicantNotes) {
		ApplicantNotes saveApplicantNotes = findByCode(code);

		BeanUtils.copyProperties(applicantNotes, saveApplicantNotes, "code");
		return applicantNotesRepository.save(saveApplicantNotes);
	}

	/**
	 * Find applicantNots by code.
	 *
	 * @param code the code
	 * @return the applicant notes
	 */
	public ApplicantNotes findByCode(Long code) {
		ApplicantNotes saveApplicantNotes = applicantNotesRepository.findOne(code);
		if (saveApplicantNotes == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return saveApplicantNotes;
	}

}
