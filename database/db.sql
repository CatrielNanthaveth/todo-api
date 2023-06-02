CREATE DATABASE tododb;

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    user_id INTEGER REFERENCES users(id)
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(50)
);