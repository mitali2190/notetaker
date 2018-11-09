DROP DATABASE IF EXISTS notetaker_db;
CREATE DATABASE notetaker_db;
USE notetaker_db;

-- Create the tables table
CREATE TABLE note
(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (255) NOT NULL,
  containt VARCHAR (255),
  isEmpty BOOLEAN DEFAULT FALSE,
  PRIMARY KEY(id)
);