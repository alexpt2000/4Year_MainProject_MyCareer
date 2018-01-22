CREATE TABLE users (
	userID BIGINT(20) PRIMARY KEY,
	userName VARCHAR(50) NOT NULL,
	userEmail VARCHAR(50) NOT NULL,
	userPassword VARCHAR(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE permissions (
	permissionID BIGINT(20) PRIMARY KEY,
	permissionDescription VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE users_permission (
	userID BIGINT(20) NOT NULL,
	codigo_permissao BIGINT(20) NOT NULL,
	PRIMARY KEY (userID, permissionID),
	FOREIGN KEY (userID) REFERENCES users(userID),
	FOREIGN KEY (permissionID) REFERENCES permissions(permissionID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO users (userID, userName, userEmail, userPassword) values (1, 'Administrator', 'admin@mycareer.com', '$2a$10$X607ZPhQ4EgGNaYKt3n4SONjIv9zc.VMWdEuhCuba7oLAL5IvcL5.');
INSERT INTO users (userID, userName, userEmail, userPassword) values (2, 'Alexander', 'alex@mycareer.com', '$2a$10$X607ZPhQ4EgGNaYKt3n4SONjIv9zc.VMWdEuhCuba7oLAL5IvcL5.');

INSERT INTO permissions (permissionID, permissionDescription) values (1, 'ROLE_CADASTRAR_CATEGORIA');
INSERT INTO permissions (permissionID, permissionDescription) values (2, 'ROLE_PESQUISAR_CATEGORIA');

INSERT INTO permissions (permissionID, permissionDescription) values (3, 'ROLE_CADASTRAR_PESSOA');
INSERT INTO permissions (permissionID, permissionDescription) values (4, 'ROLE_REMOVER_PESSOA');
INSERT INTO permissions (permissionID, permissionDescription) values (5, 'ROLE_PESQUISAR_PESSOA');

INSERT INTO permissions (permissionID, permissionDescription) values (6, 'ROLE_CADASTRAR_LANCAMENTO');
INSERT INTO permissions (permissionID, permissionDescription) values (7, 'ROLE_REMOVER_LANCAMENTO');
INSERT INTO permissions (permissionID, permissionDescription) values (8, 'ROLE_PESQUISAR_LANCAMENTO');

-- admin
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 1);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 2);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 3);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 4);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 5);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 6);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 7);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 8);

-- maria
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 2);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 5);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 8);
