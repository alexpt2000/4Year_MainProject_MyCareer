
CREATE TABLE applicant_notes (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	score BIGINT(20),
	notes TEXT,
	code_applicant BIGINT(20) NOT NULL,
	FOREIGN KEY (code_applicant) REFERENCES Applicants(code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO applicant_notes (score, notes, code_applicant) values (3, 'Very good applicant', 1);
INSERT INTO applicant_notes (score, notes, code_applicant) values (5, 'Very bad applicant', 2);

