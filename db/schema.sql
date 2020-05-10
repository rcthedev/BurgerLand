DROP DATABASE IF EXISTS burgerland_db;
CREATE DATABASE burgerland_db;

USE burgerland_db;

CREATE TABLE funkyburgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);