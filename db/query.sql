--Adding new values into the department table
INSERT INTO department(department_name)
VALUES (newDepartment);

--Adding new values into the role table
INSERT INTO role(title, salary, department_id)
VALUES (newTitle, newSalary, newDepartmentId);

--Adding new values into the employee table
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES (newFirstName, newLastName, newRoleId, newManagerId);