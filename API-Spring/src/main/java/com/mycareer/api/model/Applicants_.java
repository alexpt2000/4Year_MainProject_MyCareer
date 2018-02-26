package com.mycareer.api.model;

import java.time.LocalDate;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

import com.mysql.jdbc.Blob;

/**
 * The static metamodel provides a type-safe and easy way to create criteria
 * queries and dynamic entity graphs. This speeds up the initial implementation
 * and makes future refactorings much easier than referencing the attributes via
 * Strings.
 * 
 * 
 * ref.https://www.thoughts-on-java.org/static-metamodel/
 * 
 * @author Alexander Souza
 */
@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Applicants.class)
public abstract class Applicants_ {

	public static volatile SingularAttribute<Applicants, Long> code;
	public static volatile SingularAttribute<Applicants, String> fullname;
	public static volatile SingularAttribute<Applicants, String> email;
	public static volatile SingularAttribute<Applicants, String> phone_number;
	public static volatile SingularAttribute<Applicants, String> profile_url;
	public static volatile SingularAttribute<Applicants, String> cover_letter;
	public static volatile SingularAttribute<Applicants, String> status;
	public static volatile SingularAttribute<Applicants, LocalDate> applicant_date;
	public static volatile SingularAttribute<Applicants, Jobs> job;

}
