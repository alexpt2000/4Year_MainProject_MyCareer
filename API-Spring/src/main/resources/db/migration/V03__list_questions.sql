CREATE TABLE listquestions (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	type_question VARCHAR(50) NOT NULL,
	question TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO listquestions (type_question, question) values ('Java', 'What is Bytecode?');
INSERT INTO listquestions (type_question, question) values ('Java', 'What is polymorphism in java?');
INSERT INTO listquestions (type_question, question) values ('Java', 'What are the important features of Java 8 release?');
INSERT INTO listquestions (type_question, question) values ('Java', 'What do you mean by platform independence of Java?');
INSERT INTO listquestions (type_question, question) values ('Java', 'What is JVM and is it platform independent?');
INSERT INTO listquestions (type_question, question) values ('Java', 'What is the difference between JDK and JVM?');
INSERT INTO listquestions (type_question, question) values ('Java', 'What is the difference between JVM and JRE?');
INSERT INTO listquestions (type_question, question) values ('Java', 'Which class is the superclass of all classes?');

INSERT INTO listquestions (type_question, question) values ('Angular', 'What Is Angular 4?');
INSERT INTO listquestions (type_question, question) values ('Angular', 'Why Use Angular 4?');
INSERT INTO listquestions (type_question, question) values ('Angular', 'What Is Architecture Overview of Angular?');
INSERT INTO listquestions (type_question, question) values ('Angular', 'What Is the forRoot Method in Angular4?');
INSERT INTO listquestions (type_question, question) values ('Angular', 'What are differences between Angular 4 and Angular 2?');

INSERT INTO listquestions (type_question, question) values ('C#', 'What is polymorphism in C#?');
INSERT INTO listquestions (type_question, question) values ('C#', 'What is the difference between a struct and a class in C#?');
INSERT INTO listquestions (type_question, question) values ('C#', 'What is the difference between Interface and Abstract Class?');
INSERT INTO listquestions (type_question, question) values ('C#', 'What is enum in C#?');


INSERT INTO listquestions (type_question, question) values ('HR Interview', 'What are your strengths?');
INSERT INTO listquestions (type_question, question) values ('HR Interview', 'Tell me about yourself');
INSERT INTO listquestions (type_question, question) values ('HR Interview', 'What are your weaknesses?');
INSERT INTO listquestions (type_question, question) values ('HR Interview', 'Why should we hire you?');
INSERT INTO listquestions (type_question, question) values ('HR Interview', 'What can you do for us that other candidates cant?');
INSERT INTO listquestions (type_question, question) values ('HR Interview', 'Where do you see yourself in five years time?');
INSERT INTO listquestions (type_question, question) values ('HR Interview', 'Why do you want to work here?');
INSERT INTO listquestions (type_question, question) values ('HR Interview', 'What are three positive things your last boss would say about you? ');
INSERT INTO listquestions (type_question, question) values ('HR Interview', 'What salary are you seeking?');
INSERT INTO listquestions (type_question, question) values ('HR Interview', 'If you were an animal, which one would you want to be? ');
INSERT INTO listquestions (type_question, question) values ('HR Interview', 'What are your goals?');














