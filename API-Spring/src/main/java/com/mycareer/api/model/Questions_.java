package com.mycareer.api.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

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
@StaticMetamodel(Questions.class)
public abstract class Questions_ {

	public static volatile SingularAttribute<Questions, Long> codigo;
	public static volatile SingularAttribute<Questions, String> type_question;
	public static volatile SingularAttribute<Questions, String> question;
	public static volatile SingularAttribute<Questions, Long> score;
	public static volatile SingularAttribute<Questions, String> notes;
	public static volatile SingularAttribute<Questions, Applicants> applicant;

}
