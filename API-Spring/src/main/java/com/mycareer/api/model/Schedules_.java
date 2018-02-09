package com.mycareer.api.model;

import java.time.LocalDateTime;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Schedules.class)
public abstract class Schedules_ {

	public static volatile SingularAttribute<Schedules, Long> code;
	public static volatile SingularAttribute<Schedules, String> title;
	public static volatile SingularAttribute<Schedules, LocalDateTime> start;
	public static volatile SingularAttribute<Schedules, LocalDateTime> end;
	public static volatile SingularAttribute<Schedules, Boolean> allDay;
	public static volatile SingularAttribute<Schedules, String> notes;

}
