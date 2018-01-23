package com.mycareer.api.model;

import java.time.LocalDate;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Jobs.class)
public abstract class Jobs_ {

	public static volatile SingularAttribute<Jobs, Long> codigo;
	public static volatile SingularAttribute<Jobs, String> title;
	public static volatile SingularAttribute<Jobs, String> position;
	public static volatile SingularAttribute<Jobs, String> location;
	public static volatile SingularAttribute<Jobs, String> organization;
	public static volatile SingularAttribute<Jobs, LocalDate> publication;
	public static volatile SingularAttribute<Jobs, String> description;
	public static volatile SingularAttribute<Jobs, String> status;

}

