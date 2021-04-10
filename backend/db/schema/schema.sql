DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS rooms CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS cities CASCADE;
DROP TABLE IF EXISTS interests CASCADE;
DROP TABLE IF EXISTS users_interests CASCADE;



CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  description TEXT,
  is_owner BOOLEAN NOT NULL,
  level INTEGER,
  address VARCHAR,
  city VARCHAR, 
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE rooms (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  latitude DECIMAL,
  longitude DECIMAL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  roomSize INTEGER,
  startDate DATE,
  endDate DATE,
  price INTEGER NOT NULL,
  petFriendly BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT false,
  address VARCHAR NOT NULL
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  sender INTEGER REFERENCES users(id) ON DELETE CASCADE,
  receiver INTEGER REFERENCES users(id) ON DELETE CASCADE,
  message TEXT,
  sentDate DATE,
  room_id INTEGER REFERENCES rooms(id) ON DELETE CASCADE
);

CREATE TABLE cities (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  latitude DECIMAL,
  longitude DECIMAL
);

CREATE TABLE interests (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255)
);

CREATE TABLE users_interests (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  interest_id INTEGER REFERENCES interests(id) ON DELETE CASCADE
);