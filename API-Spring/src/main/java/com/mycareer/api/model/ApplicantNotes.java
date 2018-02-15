package com.mycareer.api.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "applicant_notes")
public class ApplicantNotes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long code;

	@NotNull
	@OneToOne(cascade=CascadeType.REMOVE)
	@JoinColumn(name = "code_applicant")
	private Applicants applicant;

	private long score;

	private String notes;
	
	private long score_questions;

	public Long getCode() {
		return code;
	}

	public void setCode(Long code) {
		this.code = code;
	}

	public Applicants getApplicant() {
		return applicant;
	}

	public void setApplicant(Applicants applicant) {
		this.applicant = applicant;
	}

	public long getScore() {
		return score;
	}

	public void setScore(long score) {
		this.score = score;
	}

	public String getNotes() {
		return notes;
	}
	
	

	public long getScore_questions() {
		return score_questions;
	}

	public void setScore_questions(long score_questions) {
		this.score_questions = score_questions;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((code == null) ? 0 : code.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ApplicantNotes other = (ApplicantNotes) obj;
		if (code == null) {
			if (other.code != null)
				return false;
		} else if (!code.equals(other.code))
			return false;
		return true;
	}

}
