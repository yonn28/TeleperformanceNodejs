
CREATE DATABASE UsersTeleperformace;

use UsersTeleperformace;

CREATE TABLE  users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    cc INT(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL
);


SHOW TABLES;

describe users;