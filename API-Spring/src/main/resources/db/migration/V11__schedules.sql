CREATE TABLE schedules (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
	start DATETIME NOT NULL,
	finish DATETIME,
	notes TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO schedules (code, title, start, finish, notes ) values (1, 'Alexander Souza', '2018-02-07 10:10', '2018-02-07 12:10', 'Test Notes');


