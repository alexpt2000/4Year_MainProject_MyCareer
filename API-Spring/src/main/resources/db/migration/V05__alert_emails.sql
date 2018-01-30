CREATE TABLE alerts (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(50) NOT NULL,
	UNIQUE (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO alerts (code, email) values (1, 'admin@mycareer.com');
INSERT INTO alerts (code, email) values (2, 'alex@mycareer.com');
INSERT INTO alerts (code, email) values (3, 'gmit@mycareer.com');
INSERT INTO alerts (code, email) values (4, 'kevin@mycareer.com');
INSERT INTO alerts (code, email) values (5, 'vanessa@mycareer.com');

