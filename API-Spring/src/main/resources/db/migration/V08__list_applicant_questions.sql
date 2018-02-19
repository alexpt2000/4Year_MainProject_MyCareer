CREATE TABLE questions (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	type_question VARCHAR(50) NOT NULL,
	question TEXT NOT NULL,
	notes TEXT,
	score BIGINT(20),
	code_applicant BIGINT(20) NOT NULL,
	FOREIGN KEY (code_applicant) REFERENCES Applicants(code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO questions (type_question, question, notes, score, code_applicant) values ('Java', 'What is Bytecode?', 'correct', 5, 1);
INSERT INTO questions (type_question, question, notes, score, code_applicant) values ('Java', 'What is the difference between JVM and JRE?', 'correct', 5, 1);
INSERT INTO questions (type_question, question, notes, score, code_applicant) values ('HR Interview', 'What are your strengths?', 'HR comments', 5, 1);
INSERT INTO questions (type_question, question, notes, score, code_applicant) values ('HR Interview', 'Tell me about yourself', 'HR comments', 5, 1);
INSERT INTO questions (type_question, question, notes, score, code_applicant) values ('HR Interview', 'Why should we hire you?', 'HR comments', 5, 1);
INSERT INTO questions (type_question, question, notes, score, code_applicant) values ('HR Interview', 'Where do you see yourself in five years time?', 'HR comments', 5, 1);


INSERT INTO questions (type_question, question, notes, score, code_applicant) values ('C#', 'What is enum in C#?', 'correct', 3, 2);
INSERT INTO questions (type_question, question, notes, score, code_applicant) values ('C#', 'What is the difference between a struct and a class in C#?', 'correct', 2, 2);
INSERT INTO questions (type_question, question, notes, score, code_applicant) values ('HR Interview', 'What are your strengths?', 'HR comments', 2, 2);
INSERT INTO questions (type_question, question, notes, score, code_applicant) values ('HR Interview', 'Tell me about yourself', 'HR comments', 5, 2);
INSERT INTO questions (type_question, question, notes, score, code_applicant) values ('HR Interview', 'Why should we hire you?', 'HR comments', 4, 2);
INSERT INTO questions (type_question, question, notes, score, code_applicant) values ('HR Interview', 'Where do you see yourself in five years time?', 'HR comments', 5, 2);

