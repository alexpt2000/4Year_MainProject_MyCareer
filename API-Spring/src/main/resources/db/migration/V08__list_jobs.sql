CREATE TABLE jobs (
	code BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
	position VARCHAR(50),
	location VARCHAR(50),
	organization VARCHAR(50),
	publication DATE NOT NULL,
	description TEXT NOT NULL,
	status VARCHAR(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO jobs (code, title, position, location, organization, publication, description, status) values (1, 'Java Developer', 'Developer', 'Galway', 'GMIT', '2018-01-23', 'Java Spring, Angular, HTML', 'Open');