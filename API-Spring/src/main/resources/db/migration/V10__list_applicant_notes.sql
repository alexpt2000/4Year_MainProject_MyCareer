
CREATE TABLE applicant_notes (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	score_question BIGINT(2),
	score_test BIGINT(2),
	score_other BIGINT(2),
	hr_notes VARCHAR(200),
	code_applicant BIGINT(20) NOT NULL,
	FOREIGN KEY (code_applicant) REFERENCES Applicants(code)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

