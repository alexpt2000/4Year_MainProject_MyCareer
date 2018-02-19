CREATE TABLE schedules (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
	start DATETIME NOT NULL,
	finish DATETIME,
	allday BOOLEAN not null default 0,
	notes TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO schedules (title, start, finish, allday, notes ) values ('Intv-Alexander Souza', '2018-02-07 10:10', '2018-02-07 12:10', false,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('Albert', '2018-02-07 11:10', '2018-02-07 15:10', false,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('Kevin', '2018-02-08 10:10', '2018-02-08 12:10', false,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('Food', '2018-02-17 08:10', '2018-02-17 09:00', false,'Test Notes');

INSERT INTO schedules (title, start, finish, allday, notes ) values ('All day', '2018-02-17', null, true,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('John', '2018-02-17 08:10', '2018-02-19 09:00', false,'Test Notes');

INSERT INTO schedules (title, start, finish, allday, notes ) values ('Meeting', '2018-02-13', '2018-02-15', false,'Test Notes');

INSERT INTO schedules (title, start, finish, allday, notes ) values ('Intv-Kevin Souza', '2018-02-19 10:10', '2018-02-19 12:10', false,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('Intv-Sandra Souza', '2018-02-17 10:10', '2018-02-17 12:10', false,'Test Notes');

INSERT INTO schedules (title, start, finish, allday, notes ) values ('Intv-Alexander Souza', '2018-03-07 10:10', '2018-03-07 12:10', false,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('Albert', '2018-03-07 11:10', '2018-03-07 15:10', false,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('Kevin', '2018-03-08 10:10', '2018-03-08 12:10', false,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('Food', '2018-03-17 08:10', '2018-03-17 09:00', false,'Test Notes');

INSERT INTO schedules (title, start, finish, allday, notes ) values ('All day', '2018-03-17', null, true,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('John', '2018-03-17 08:10', '2018-03-19 09:00', false,'Test Notes');

INSERT INTO schedules (title, start, finish, allday, notes ) values ('Meeting', '2018-03-13', '2018-03-15', false,'Test Notes');

INSERT INTO schedules (title, start, finish, allday, notes ) values ('Intv-Kevin Souza', '2018-03-19 10:10', '2018-03-19 12:10', false,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('Intv-Sandra Souza', '2018-03-17 10:10', '2018-03-17 12:10', false,'Test Notes');


INSERT INTO schedules (title, start, finish, allday, notes ) values ('Intv-Alexander Souza', '2018-04-07 10:10', '2018-04-07 12:10', false,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('Albert', '2018-04-07 11:10', '2018-04-07 15:10', false,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('Kevin', '2018-04-08 10:10', '2018-04-08 12:10', false,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('Food', '2018-04-17 08:10', '2018-04-17 09:00', false,'Test Notes');

INSERT INTO schedules (title, start, finish, allday, notes ) values ('All day', '2018-04-17', null, true,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('John', '2018-04-17 08:10', '2018-04-19 09:00', false,'Test Notes');

INSERT INTO schedules (title, start, finish, allday, notes ) values ('Meeting', '2018-04-13', '2018-04-15', false,'Test Notes');

INSERT INTO schedules (title, start, finish, allday, notes ) values ('Intv-Kevin Souza', '2018-04-19 10:10', '2018-04-19 12:10', false,'Test Notes');
INSERT INTO schedules (title, start, finish, allday, notes ) values ('Intv-Sandra Souza', '2018-04-17 10:10', '2018-04-17 12:10', false,'Test Notes');