--Department Information including assigned id and department name
INSERT INTO department(id, department_name)
VALUES
(01, 'Sales'),
(02, 'Claims'),
(03, 'Legal'),
(04, 'Warehouse');

--Role information including the assigned id number to that role, name of role, salary, and the corresponding department id that goes with the role
INSERT INTO role (id, title, salary, department_id)
VALUES
(01, 'Sales Agent', 50000, 01),
(02, 'Auto Adjuster', 40000, 02),
(03, 'Lawyer', 80000, 03),
(04, 'Document Specialist', 30000, 04);

-- Employee information including first name, last name, job title, and their manager id
INSERT INTO employee(first_name, last_name, job_title, manager_id)
VALUES
('Sammi', 'Snugglesworth', 'Document Specialist', 4),
('Lorenzo', 'Everette', 'Lawyer', 3),
('Hunter', 'Stevens', 'Auto Adjuster', 2),
('Mark', 'Walker', 'Sales Agent', 1);
