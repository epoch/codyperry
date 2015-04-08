CREATE DATABASE omdb;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  Title VARCHAR(100) NOT NULL,
  Year VARCHAR(100),
  Rated VARCHAR(100),
  Released VARCHAR(100),
  Runtime VARCHAR(100),
  Genre VARCHAR(100),
  Director VARCHAR(100),
  Writer VARCHAR(500),
  Actors VARCHAR(500),
  Plot VARCHAR(500),
  Language VARCHAR(100),
  Country VARCHAR(100),
  Awards VARCHAR(100),
  Poster VARCHAR(500),
  Metascore VARCHAR(100),
  imdbRating FLOAT8,
  imdbVotes VARCHAR(100),
  imdbID VARCHAR(100),
  Type VARCHAR(100),
  Response VARCHAR(100)
);

INSERT INTO movies (Title, Year) VALUES ('jaws', '2000');