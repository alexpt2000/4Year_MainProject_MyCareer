CREATE TABLE schedules (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
	start DATETIME NOT NULL,
	finish DATETIME,
	allday BOOLEAN not null default 0,
	notes TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO schedules (code, title, start, finish, allday, notes ) values (1, 'Alexander Souza', '2018-02-07 10:10', '2018-02-07 12:10', false,'Test Notes');
INSERT INTO schedules (code, title, start, finish, allday, notes ) values (2, 'Albert', '2018-02-07 11:10', '2018-02-07 15:10', false,'Test Notes');
INSERT INTO schedules (code, title, start, finish, allday, notes ) values (3, 'Kevin', '2018-02-08 10:10', '2018-02-08 12:10', false,'Test Notes');
INSERT INTO schedules (code, title, start, finish, allday, notes ) values (4, 'Food', '2018-02-17 08:10', '2018-02-17 09:00', false,'Test Notes');

INSERT INTO schedules (code, title, start, finish, allday, notes ) values (5, 'All day', '2018-02-17', null, true,'Test Notes');
INSERT INTO schedules (code, title, start, finish, allday, notes ) values (6, 'John', '2018-02-17 08:10', '2018-02-19 09:00', false,'Test Notes');

INSERT INTO schedules (code, title, start, finish, allday, notes ) values (7, 'Meeting', '2018-02-13', '2018-02-15', false,'Test Notes');

