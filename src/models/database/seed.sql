INSERT INTO cities (name, image)
VALUES
('Oakland', '/image/oakland.jpg'),
('Oaktown', '/image/Oak-Town.png');

INSERT INTO users (name, email, password, image)
VALUES
('asdf', 'asdf@asdf', '$2a$10$hy5WinueVzTuQJD45VwI2u0s8ywXzQaFFti5CqS6d/Y.d7IozdBsq', '/image/squirtle.png');

INSERT INTO posts (title, body, user_id, city_id)
VALUES
('On my way to Oaktown', 'I caught a pickachu', 1, 2),
('My adventures in Oaktown', 'I met misty', 1, 2),
('Oakland Raiders Game', 'Lost as usaual', 1, 1),
('Learning how to code in Oakland', 'Working on Roam', 1, 1),
('On my way to Oaktown Part 2', 'I met brock', 1, 2);
