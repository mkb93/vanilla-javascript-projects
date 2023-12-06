CREATE DATABASE reviews;

CREATE TABLE profiles (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  job VARCHAR(100) NOT NULL,
  img VARCHAR(512),
  text TEXT
);
INSERT INTO profiles (id, name, job, img, text) VALUES
(1, 'Susan Smith', 'Web Developer', 'https://www.course-api.com/images/people/person-1.jpeg', 'I''m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'),
(2, 'Anna Johnson', 'Web Designer', 'https://www.course-api.com/images/people/person-2.jpeg', 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'),
(3, 'Peter Jones', 'Intern', 'https://www.course-api.com/images/people/person-4.jpeg', 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'),
(4, 'Bill Anderson', 'The Boss', 'https://www.course-api.com/images/people/person-3.jpeg', 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.');
