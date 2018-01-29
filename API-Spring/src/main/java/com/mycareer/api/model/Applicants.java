package com.mycareer.api.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import javax.validation.constraints.NotNull;

@Entity
@Table(name = "applicants")
public class Applicants {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long code;

	@NotNull
	@ManyToOne
	@JoinColumn(name = "code_job")
	private Jobs job;

	@NotNull
	private String fullname;
	@NotNull
	private String email;
	private String cover_letter;
	@NotNull
	private String phone_number;
	private String profile_url;
	private String upload_cv;
	private String status;
	private long score_question;
	private long score_test;
	private long score_other;
	@NotNull
	private LocalDate applicant_date;
	private String hr_notes;

	public Long getCode() {
		return code;
	}

	public void setCode(Long code) {
		this.code = code;
	}

	public Jobs getJob() {
		return job;
	}

	public void setJob(Jobs job) {
		this.job = job;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFull_name(String fullname) {
		this.fullname = fullname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCover_letter() {
		return cover_letter;
	}

	public void setCover_letter(String cover_letter) {
		this.cover_letter = cover_letter;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public String getProfile_url() {
		return profile_url;
	}

	public void setProfile_url(String profile_url) {
		this.profile_url = profile_url;
	}

	public String getUpload_cv() {
		return upload_cv;
	}

	public void setUpload_cv(String upload_cv) {
		this.upload_cv = upload_cv;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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

	public LocalDate getApplicant_date() {
		return applicant_date;
	}

	public void setApplicant_date(LocalDate applicant_date) {
		this.applicant_date = applicant_date;
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
		Applicants other = (Applicants) obj;
		if (code == null) {
			if (other.code != null)
				return false;
		} else if (!code.equals(other.code))
			return false;
		return true;
	}

}
