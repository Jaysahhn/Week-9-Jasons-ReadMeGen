// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("utils")
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Provide the title of your file."
    },
    {
        type: "input",
        name: "description",
        message: "Provide the description of your file."
    },
    {
        type: "input",
        name: "contents",
        message: "Provide the table of contents of your file."
    },
    {
        type: "input",
        name: "installation",
        message: "Provide the installation instructions of your file."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide the usage information of your file."
    },
    {
        type: "input",
        name: "contributions",
        message: "Provide the contribution guidelines of your file."
    },
    {
        type: "input",
        name: "test",
        message: "Provide the test instructions of your file."
    },
    {
        type: "list",
        name: "license",
        message: "Select a license for your file.",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Cluase 'Simplified' License", "BSD 3-Cluase 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md file generated successfully.");
    });
}

// TODO: Create a function to initialize app
// function init() {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 message: questions[0],
//                 name: 'project',
//             },
//             {
//                 type: 'input',
//                 message: questions[1],
//                 name: 'project',
//             },
//             {
//                 type: 'input',
//                 message: questions[2],
//                 name: 'project',
//             },])

//         .then((response) => writeToFile(response)
//         );



// };

// Function call to initialize app

