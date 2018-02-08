package com.mycareer.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.mycareer.api.model.ApplicantNotes;
import com.mycareer.api.repository.ApplicantNotesRepository;

@Service
public class ApplicantNotesService {

	@Autowired
	private ApplicantNotesRepository applicantNotesRepository;

	public ApplicantNotes update(Long code, ApplicantNotes applicantNotes) {
		ApplicantNotes saveApplicantNotes = findByCode(code);

		BeanUtils.copyProperties(applicantNotes, saveApplicantNotes, "code");
		return applicantNotesRepository.save(saveApplicantNotes);
	}

	public ApplicantNotes findByCode(Long code) {
		ApplicantNotes saveApplicantNotes = applicantNotesRepository.findOne(code);
		if (saveApplicantNotes == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return saveApplicantNotes;
	}

}
