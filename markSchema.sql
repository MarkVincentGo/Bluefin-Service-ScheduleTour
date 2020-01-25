DROP DATABASE if exists scheduleTours;

CREATE DATABASE scheduleTours;

USE scheduleTours;

CREATE TABLE agents (
  id int primary key auto_increment,
  name text,
  phone_number text,
  email text
);

CREATE TABLE listings (
  id int primary key,
  listing_price int,
  agent_id int,
  FOREIGN KEY (agent_id)
      REFERENCES agents(id)
);

CREATE TABLE users (
  id int primary key auto_increment,
  name text,
  phone_number text,
  email text
);

CREATE TABLE chats (
  id int primary key auto_increment,
  message text,
  user_id int,
  agent_id int,
  FOREIGN KEY (user_id)
      REFERENCES users(id),
  FOREIGN KEY (agent_id)
      REFERENCES agents(id)
);