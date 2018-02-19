CREATE TABLE questions (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	type_question VARCHAR(50) NOT NULL,
	question VARCHAR(50) NOT NULL,
	notes TEXT,
	score BIGINT(20),
	code_applicant BIGINT(20) NOT NULL,
	FOREIGN KEY (code_applicant) REFERENCES Applicants(code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO questions (type_question, question, notes, score, code_applicant) values ('Java', 'What is Bytecode?', 'Its ok', 4, 1);
INSERT INTO questions (type_question, question, notes, score, code_applicant) values ('Java', 'What is the difference between JVM and JRE?', 'Its ok', 2, 1);


