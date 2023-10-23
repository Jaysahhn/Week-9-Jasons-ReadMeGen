// TODO: Include packages needed for this application
const inquirer = require('inquirer');

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Cady POG",//questions[0],
                name: 'project',
            },
            {
                type: 'input',
                message: "Cady POG",//questions[0],
                name: 'project',
            },
            {
                type: 'input',
                message: "Cady POG",//questions[0],
                name: 'project',
            },])

        .then((response) => writeToFile(response)
        );



}
init();

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app


// Function call to initialize app

