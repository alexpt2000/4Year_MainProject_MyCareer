package com.mycareer.api.model;

import java.time.LocalDate;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Applicants.class)
public abstract class Applicants_ {

	public static volatile SingularAttribute<Applicants, Long> codigo;
	public static volatile SingularAttribute<Applicants, Jobs> job;
	public static volatile SingularAttribute<Applicants, String> full_name;
	public static volatile SingularAttribute<Applicants, String> email;
	public static volatile SingularAttribute<Applicants, String> cover_letter;
	public static volatile SingularAttribute<Applicants, String> phone_number;
	public static volatile SingularAttribute<Applicants, String> profile_url;
	public static volatile SingularAttribute<Applicants, String> upload_cv;
	public static volatile SingularAttribute<Applicants, String> status;
	public static volatile SingularAttribute<Applicants, Long> score_question;
	public static volatile SingularAttribute<Applicants, Long> score_test;
	public static volatile SingularAttribute<Applicants, Long> score_other;
	public static volatile SingularAttribute<Applicants, LocalDate> applicant_date;
	public static volatile SingularAttribute<Applicants, String> hr_notes;
}

