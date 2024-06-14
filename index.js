//Note: Dependencies needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');

//
const business_db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'source',
        password: '',
        database: 'business_db'
    },
)

// View Menu Options
const options = [
    {
        type: 'list',
        message: 'Please select an option from the menu.',
        choices: ["View Departments", "View Roles", "View Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Employee Job Title"],
        name:'optionMenu',
    },
]

//Department Question
const departments = [
    {
        type: 'input',
        message: 'What is the name of the new department?',
        name: 'newDepartment',
    },
]

//Role question
const role = [
    {
        type: 'input',
        message: 'What title name goes to this new role?',
        name: 'roleTitle'
    },

    {
        type: 'input',
        message: 'What salary goes with this role?',
        name: 'roleSalary'
    },

    {
        type: 'list',
        message: 'What department ID goes to the new role?',
        choices: ['01', '02', '03', '04'],
        name: 'departmentId',
    },
]

//Employee Questions
const employee = [
    {
        type: 'input',
        message: "What is the first name of the employee?",
        name: 'firstName'
    },

    {
        type: 'input',
        message: "What is the last name of the employee?",
        name: 'lastName'
    },

    {
        type: 'input',
        message: "What is their role title?",
        name: 'roleTitle'
    },

    {
        type: 'input',
        message: "What is the manager ID for the employee?",
        name: 'managerId'
    },

    {
        type: 'list',
        message: "What is the role ID for the new employee?",
        choices:['01', '02', '03', '04', '05'],
        name: 'roleId'
    },
]

//update question
const update = [
    {
        type: 'input',
        message: "What is the employee ID number?",
        name: 'idNum'
    },

    {
        type: 'input',
        message: "What is their new job title?",
        name: 'updateTitle'
    }
]

//Prompt questions
const question = () => {
    return inquirer
    .prompt(options)
    .then((data) => {
        if (data.menuOptions == "Add a Department") {
            addDepartment();
        } else if (data.menuOptions == "Add a Role") {
            addRole();
        } else if (data.menuOptions == "Add an Employee") {
            addEmployee();
        } else if (data.menuOptions == "Update the employee's job title") {
            updateTitle();
        } else if (data.menuOptions == "View Departments") {
            business_db.query(`SELECT * FROM departments`, function(err,results) {
                console.table(results);
                question();
            })
        } else if (data.menuOptions == "View roles") {
            business_db.query(`SELECT * FROM role`, function(err,results) {
                console.table(results);
                question;
            })
        } else if (data.menuOptions == "View employees") {
            business_db.query(`SELECT * FROM employee`, function(err,results) {
                console.table(results);
                question();
            })
        }
})
};

//adding department
const addDepartment = () => {
    return inquirer
        .prompt(departments)
        .then((data) => {
            business_db.query(`INSERT INTO departments(department_name) VALUES ("${data.newDepartment}")`, (err, result) => {
                if(err) {
                    console.log(err)
                }
                console.log(`${data.newDepartment} has been added to the company database.`)
            });
            question();
        })
};

//adding role
const addRole = () => {
    return inquirer
        .prompt(role)
        .then((data) => {
            business_db.query(`INSERT INTO role(title, salary, department_id) VALUES ("${data.roleTitle}", "${data.roleSalary}", "${data.deptId}")`, (err, result) => {
                if (err) {
                    console.log(err)
                }
                    console.log(`${data.roleTitle} has been added to the company database.`)
            });
            question();
        })
};

//adding employee
const addEmployee = () => {
    return inquirer 
        .prompt(employee)
        .then((data) => {
            company_db.query(`INSERT INTO employee (first_name, last_name, job_title, role_id, manager_id) VALUES ("${data.firstName}", "${data.lastName}", "${data.jobTitle}", "${data.roleId}", "${data.managerId}")`,  
            (err,result) => {
            if (err) {
                console.log(err)
            }
                console.log(`${data.firstName} ${data.lastName} has been added to the database!`)
            });
            question(); 
        })
};

//updating employee title
const updateTitle = () => {
    return inquirer
        .prompt(update)
        .then((data) => {
            business_db.query(`UPDATE employee SET job_title = "${data.updateTitle}" WHERE id= "${data.idNumber}"`, (err,result) => {
                if (err) {
                    console.log(err)
                }
                    console.log(`Congratulations on your new position. Your new title, ${data.updateTitle} has been added to the company database.`)
            });
            question();
        })
};

question();