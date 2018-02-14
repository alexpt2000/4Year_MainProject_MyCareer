
CREATE TABLE applicant_notes (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	score BIGINT(20),
	notes TEXT,
	score_questions BIGINT(20),
	code_applicant BIGINT(20) NOT NULL,
	FOREIGN KEY (code_applicant) REFERENCES Applicants(code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO applicant_notes (score, score_questions, notes, code_applicant) values (3, 2, 'Very good applicant', 1);
INSERT INTO applicant_notes (score, score_questions, notes, code_applicant) values (5, 1, 'Very bad applicant', 2);

