CREATE TABLE dishes (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  image_url VARCHAR(100)
);

INSERT INTO dishes (name,image_url)
VALUES ('prime ribs', 'http://s3.amazonaws.com/foodspotting-ec2/reviews/189665/thumb_600.jpg?1288643586?1428373189');