CREATE DATABASE fumblr;

\c fumblr

CREATE TABLE posts (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(100),
  body text
);

ALTER TABLE posts ADD category VARCHAR(100);

CREATE TABLE categories (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100)
);

ALTER TABLE posts ADD category_id INTEGER;

ALTER TABLE posts DROP category;