//Note: Dependencies needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require ('console.table');

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
        choices: ['01', '02', '03', '04', '05', '06'],
        name: 'departmentId',
    },
]