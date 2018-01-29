package com.mycareer.api.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ApplicantNotes.class)
public abstract class ApplicantNotes_ {

	public static volatile SingularAttribute<ApplicantNotes, Long> code;
	public static volatile SingularAttribute<ApplicantNotes, Long> score_question;
	public static volatile SingularAttribute<ApplicantNotes, Long> score_test;
	public static volatile SingularAttribute<ApplicantNotes, Long> score_other;
	public static volatile SingularAttribute<ApplicantNotes, String> hr_notes;
	public static volatile SingularAttribute<ApplicantNotes, Applicants> applicants;
}

