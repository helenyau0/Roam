DROP TABLE IF EXIST users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  current_city VARCHAR(255),
  password VARCHAR(255),
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT,
  body TEXT,
  created_at TIMESTAMP,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  city_id INT REFERENCES cities(id) ON DELETE CASCADE
);
