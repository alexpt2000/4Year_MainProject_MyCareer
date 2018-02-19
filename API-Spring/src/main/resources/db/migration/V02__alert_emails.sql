CREATE TABLE alerts (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(50) NOT NULL,
	UNIQUE (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO alerts (email) values ('admin@mycareer.com');
INSERT INTO alerts (email) values ('alex@mycareer.com');
INSERT INTO alerts (email) values ('gmit@mycareer.com');
INSERT INTO alerts (email) values ('kevin@mycareer.com');
INSERT INTO alerts (email) values ('vanessa@mycareer.com');
INSERT INTO alerts (email) values ('admin@gmail.com.com');
INSERT INTO alerts (email) values ('john@mycareer.com');
INSERT INTO alerts (email) values ('sean@mycareer.com');
INSERT INTO alerts (email) values ('martin@mycareer.com');
INSERT INTO alerts (email) values ('maria@mycareer.com');
