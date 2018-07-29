DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
    );
    
INSERT INTO burgers (burger_name, devoured) VALUES ("The Vegelicious", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("The Carnivore", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("The Exotic", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Not Your Momma's Patty", false);

SELECT * FROM burgers