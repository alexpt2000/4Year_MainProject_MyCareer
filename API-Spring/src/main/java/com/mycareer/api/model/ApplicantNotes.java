package com.mycareer.api.model;

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
	@OneToOne
	@JoinColumn(name = "code_applicant")
	private Applicants applicants;

	private long score_question;

	private long score_test;

	private long score_other;

	private String hr_notes;



	public Long getCode() {
		return code;
	}

	public void setCode(Long code) {
		this.code = code;
	}

	public Applicants getApplicants() {
		return applicants;
	}

	public void setApplicants(Applicants applicants) {
		this.applicants = applicants;
	}

	public long getScore_question() {
		return score_question;
	}

	public void setScore_question(long score_question) {
		this.score_question = score_question;
	}

	public long getScore_test() {
		return score_test;
	}

	public void setScore_test(long score_test) {
		this.score_test = score_test;
	}

	public long getScore_other() {
		return score_other;
	}

	public void setScore_other(long score_other) {
		this.score_other = score_other;
	}

	public String getHr_notes() {
		return hr_notes;
	}

	public void setHr_notes(String hr_notes) {
		this.hr_notes = hr_notes;
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
