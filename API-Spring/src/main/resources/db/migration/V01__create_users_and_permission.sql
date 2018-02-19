CREATE TABLE users (
	code BIGINT(20) PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE permissions (
	code BIGINT(20) PRIMARY KEY,
	description VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE users_permission (
	code_user BIGINT(20) NOT NULL,
	code_permission BIGINT(20) NOT NULL,
	PRIMARY KEY (code_user, code_permission),
	FOREIGN KEY (code_user) REFERENCES users(code),
	FOREIGN KEY (code_permission) REFERENCES permissions(code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO users (code, name, email, password) values (1, 'Administrator', 'admin@mycareer.com', '$2a$10$EM6ffY3XEy.XlcsY17dlJOcLiGNMju7.toLY7nwIV8imCBI35Fo.K');
INSERT INTO users (code, name, email, password) values (2, 'Alexander', 'alex@mycareer.com', '$2a$10$seWaA2fewGpyfHlf35oUhOF0izs5XfBHi3tqOWzY8oGdnTVwBGW62');

-- Jobs permissions
INSERT INTO permissions (code, description) values (9, 'ROLE_READ_JOB');
INSERT INTO permissions (code, description) values (10, 'ROLE_ADD_JOB');
INSERT INTO permissions (code, description) values (11, 'ROLE_REMOVE_JOB');

-- Applicants permissions
INSERT INTO permissions (code, description) values (12, 'ROLE_READ_APPLICANT');
INSERT INTO permissions (code, description) values (13, 'ROLE_ADD_APPLICANT');
INSERT INTO permissions (code, description) values (14, 'ROLE_REMOVE_APPLICANT');

-- Applicants schedules
INSERT INTO permissions (code, description) values (15, 'ROLE_READ_SCHEDULE');
INSERT INTO permissions (code, description) values (16, 'ROLE_ADD_SCHEDULE');
INSERT INTO permissions (code, description) values (17, 'ROLE_REMOVE_SCHEDULE');



-- admin JOBS
INSERT INTO users_permission (code_user, code_permission) values (1, 9);
INSERT INTO users_permission (code_user, code_permission) values (1, 10);
INSERT INTO users_permission (code_user, code_permission) values (1, 11);
-- admin APPLICANTS
INSERT INTO users_permission (code_user, code_permission) values (1, 12);
INSERT INTO users_permission (code_user, code_permission) values (1, 13);
INSERT INTO users_permission (code_user, code_permission) values (1, 14);
-- admin schedules
INSERT INTO users_permission (code_user, code_permission) values (1, 15);
INSERT INTO users_permission (code_user, code_permission) values (1, 16);
INSERT INTO users_permission (code_user, code_permission) values (1, 17);


-- alex JOBS
INSERT INTO users_permission (code_user, code_permission) values (2, 9);
-- alex APPLICANTS
INSERT INTO users_permission (code_user, code_permission) values (2, 12);
-- alex SCHEDULES
INSERT INTO users_permission (code_user, code_permission) values (2, 15);

