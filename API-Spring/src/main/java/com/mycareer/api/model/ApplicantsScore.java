package com.mycareer.api.model;

import java.math.BigInteger;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.mysql.jdbc.Blob;

@Entity
@Table(name = "applicants")
public class ApplicantsScore {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long code;

	private String fullname;

//	private String email;
//
//	private String phone_number;
//
//	private String profile_url;
//	
//	private Blob upload_cv;
//
//	private String cover_letter;
//
//	private String status;
//
//	private LocalDate applicant_date;
//
//	@ManyToOne
//	@JoinColumn(name = "code_job")
//	private Jobs job;
	
//	private String score;
//	
//	private String score_questions;
//

	
	
	
	

	
	public String getFullname() {
		return fullname;
	}


	public Long getCode() {
		return code;
	}


	public void setCode(Long code) {
		this.code = code;
	}


	public void setFullname(String fullname) {
		this.fullname = fullname;
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
		ApplicantsScore other = (ApplicantsScore) obj;
		if (code == null) {
			if (other.code != null)
				return false;
		} else if (!code.equals(other.code))
			return false;
		return true;
	}




}
