//Note: Dependencies needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');

//
const business_db = mysql.createConnection({
    host: 'localhost',
    user: 'source',
    password: '',
    database: 'business_db'
});

// View Menu Options
const options = [
    {
        type: 'list',
        message: 'Please select an option from the menu.',
        choices: ["View Departments", "View Roles", "View Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Employee Job Title"],
        name:'optionMenu',
    },
];

//Department Question
const departments = [
    {
        type: 'input',
        message: 'What is the name of the new department?',
        name: 'newDepartment',
    },
];

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
];

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
];

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
];

// Prompt questions
const question = () => {
    return inquirer
        .prompt(options)
        .then((data) => {
            switch (data.optionMenu) {
                case "Add a Department":
                    addDepartment();
                    break;
                case "Add a Role":
                    addRole();
                    break;
                case "Add an Employee":
                    addEmployee();
                    break;
                case "Update Employee Job Title":
                    updateTitle();
                    break;
                case "View Departments":
                    viewDepartments();
                    break;
                case "View Roles":
                    viewRoles();
                    break;
                case "View Employees":
                    viewEmployees();
                    break;
                default:
                    console.log("Invalid option selected.");
            }
        });
};

// Function to view departments
const viewDepartments = () => {
    business_db.query(`SELECT * FROM department`, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
        }
        question();
    });
};

// Function to view roles
const viewRoles = () => {
    business_db.query(`SELECT * FROM role`, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
        }
        question();
    });
};

// Function to view employees
const viewEmployees = () => {
    business_db.query(`SELECT * FROM employee`, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
        }
        question();
    });
};

// Call the initial question prompt
question();


