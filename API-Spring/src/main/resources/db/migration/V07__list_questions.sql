CREATE TABLE listquestions (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	type_question VARCHAR(50) NOT NULL,
	question VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO listquestions (code, type_question, question) values (1, 'Java', 'What is Bytecode?');
INSERT INTO listquestions (code, type_question, question) values (2, 'Java', 'What is polymorphism in java?');
INSERT INTO listquestions (code, type_question, question) values (3, 'C#', 'What is polymorphism in C#?');
INSERT INTO listquestions (code, type_question, question) values (4, 'Java', 'What are the important features of Java 8 release?');
INSERT INTO listquestions (code, type_question, question) values (5, 'Java', 'What do you mean by platform independence of Java?');
INSERT INTO listquestions (code, type_question, question) values (6, 'Java', 'What is JVM and is it platform independent?');
INSERT INTO listquestions (code, type_question, question) values (7, 'Java', 'What is the difference between JDK and JVM?');
INSERT INTO listquestions (code, type_question, question) values (8, 'Java', 'What is the difference between JVM and JRE?');
INSERT INTO listquestions (code, type_question, question) values (9, 'Java', 'Which class is the superclass of all classes?');










