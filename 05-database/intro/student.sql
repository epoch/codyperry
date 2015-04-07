/* comment */
-- comment

CREATE TABLE students 
(
  id SERIAL4 PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  dob DATE,
  gpa FLOAT8
);

INSERT INTO students 
(firstname,lastname,dob,gpa) 
VALUES
('cody','perry','1/1/1995',4.0); 


INSERT INTO students 
(firstname,lastname,dob,gpa) 
VALUES
('bill','jones','1/1/1990',3.3); 
INSERT INTO students 
(firstname,lastname,dob,gpa) 
VALUES
('janet','jones','1/1/1980',3.7); 
INSERT INTO students 
(firstname,lastname,dob,gpa) 
VALUES
('jim','smith','1/1/1990',3.4); 

INSERT INTO students 
(firstname,lastname,dob,gpa) 
VALUES
('jim','perry','1/1/1980',1.3); 

UPDATE students SET gpa=5.0 WHERE id = 5;
DELETE FROM students WHERE id = 5;
select avg(gpa) from students;
select * from students order by id, gpa;