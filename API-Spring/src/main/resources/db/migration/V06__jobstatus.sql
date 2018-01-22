CREATE TABLE jobstatus (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	status VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO jobstatus (code, status) values (1, 'Open');
INSERT INTO jobstatus (code, status) values (2, 'Closed');
INSERT INTO jobstatus (code, status) values (3, 'Pending');


