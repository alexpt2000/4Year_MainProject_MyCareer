
CREATE TABLE applicants (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	fullname VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	phone_number VARCHAR(30),
	profile_url VARCHAR(30),
	cover_letter VARCHAR(200),
	upload_cv MEDIUMBLOB,
	status VARCHAR(30),
	applicant_date DATE,
	code_job BIGINT(20) NOT NULL,
	FOREIGN KEY (code_job) REFERENCES jobs(code)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO applicants (fullname, email, phone_number, profile_url, cover_letter, status, applicant_date, code_job) values ('Alexander Souza', 'alexpt2000@gmail.com', '0877687528', 'https://www.w3schools.com/', 'Nice cover letter <br/> by Alex', 'New applicant', '2018-01-29', 1);
INSERT INTO applicants (fullname, email, phone_number, profile_url, cover_letter, status, applicant_date, code_job) values ('Kevin Souza', 'alexpt2000@gmail.com', '0877687528', 'www.alex.com', 'Nice cover letter <br/> by Alex', 'New applicant', '2018-01-29', 2);
INSERT INTO applicants (fullname, email, phone_number, profile_url, cover_letter, status, applicant_date, code_job) values ('Sandra Souza', 'alexpt2000@gmail.com', '0877687528', 'www.alex.com', 'Nice cover letter <br/> by Alex', 'New applicant', '2018-01-29', 3);
INSERT INTO applicants (fullname, email, phone_number, profile_url, cover_letter, status, applicant_date, code_job) values ('Nina Souza', 'alexpt2000@gmail.com', '0877687528', 'www.alex.com', 'Nice cover letter <br/> by Alex', 'New applicant', '2018-01-29', 4);

INSERT INTO applicants (fullname, email, phone_number, profile_url, cover_letter, status, applicant_date, code_job) values ('Alex Souza', 'alexpt2000@gmail.com', '0877687528', 'www.alex.com', 'Nice cover letter <br/> by Alex', 'New applicant', '2018-01-29', 1);
INSERT INTO applicants (fullname, email, phone_number, profile_url, cover_letter, status, applicant_date, code_job) values ('Kevin Fortes Souza', 'alexpt2000@gmail.com', '0877687528', 'www.alex.com', 'Nice cover letter <br/> by Alex', 'New applicant', '2018-01-29', 1);