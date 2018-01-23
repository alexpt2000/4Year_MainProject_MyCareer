package com.mycareer.api.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import javax.validation.constraints.NotNull;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Questions.class)
public abstract class Questions_ {

	public static volatile SingularAttribute<Questions, Long> codigo;
	public static volatile SingularAttribute<Questions, Applicants> applicant;
	public static volatile SingularAttribute<Questions, String> question;
	public static volatile SingularAttribute<Questions, String> note;
	public static volatile SingularAttribute<Questions, Long> score;


}

