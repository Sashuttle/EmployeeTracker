--Removes database if it exists with the name given & creates a new database
DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

--Makes the newly created business_db "active"
\c business_db;

--Creating Department table
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(20) NOT NULL
);

--Creating Role table
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(35) NOT NULL,
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE INDEX idx_department_id ON role(department_id);

--Creating Employee table
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR (35) NOT NULL,
    last_name VARCHAR (35) NOT NULL,
    job_title VARCHAR (35) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON UPDATE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);
-- Create an index on role_id
CREATE INDEX idx_role_id ON employee(role_id);