DROP DATABASE IF EXISTS candles;
CREATE DATABASE candles;

\c candles;

CREATE TABLE candles (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price INT,
    image TEXT,
    category TEXT
);