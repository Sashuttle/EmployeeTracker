--Adding new values into the department table
INSERT INTO department(department_name)
VALUES 
('Driver'),
('Repair');

--Adding new values into the role table
INSERT INTO role(title, salary, department_id)
VALUES 
('Truck Driver', 20000, 05),
('Technician', 45000, 06);

--Adding new values into the employee table
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
('Daniel', 'Doe', 05, 4),
('Jake', 'Tonix', 06, 4);