CREATE TABLE listquestions (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	type_question VARCHAR(50) NOT NULL,
	question VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO listquestions (code, type_question, question) values (1, 'Java', 'What is Bytecode?');
INSERT INTO listquestions (code, type_question, question) values (2, 'Java', 'What is polymorphism in java?');
INSERT INTO listquestions (code, type_question, question) values (3, 'C#', 'What is polymorphism in C#?');


