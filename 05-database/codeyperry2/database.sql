CREATE DATABASE codey_perry;

CREATE TABLE students (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  favourite_number INTEGER,
  created_at TIMESTAMP
);