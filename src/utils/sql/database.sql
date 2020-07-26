-- CREATE ROLE postgres LOGIN
--   ENCRYPTED PASSWORD 'md53175bce1d3201d16594cebf9d7eb3f9d'
--   SUPERUSER INHERIT CREATEDB CREATEROLE REPLICATION;

-- Database: testdatabase

CREATE DATABASE testdatabase
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'en_US.utf8'
       LC_CTYPE = 'en_US.utf8'
       CONNECTION LIMIT = -1;