DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    passwordHash TEXT NOT NULL,
    isAdmin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE Sessions (
    token TEXT PRIMARY KEY,
    userId INT NOT NULL REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Songs (
    id SERIAL PRIMARY KEY
    -- meechai's job :3
);