const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("util")
const { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require("./utils/generateMarkdown.js");

const writeFileAsync = utils.promisify(fs.writeFile);


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
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Cluase 'Simplified' License"]
    },
    {
        type: "input",
        name: "github",
        message: "Provide your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Provide your email address:"
    }
];

async function promptUser() {
    try {
        const userResponses = await inquirer.prompt(questions);
        return userResponses;
    } catch (error) {
        console.log(error);
    }
};

function generateREADME(data) {
    return `
    # ${data.title}

    ## Description
    ${data.description}

    ${data.contents}
    
    ## Table of Contents
    - [Installation] (#installation)
    - [Usage] (#usage) 
    - [License] (#license)
    - [Contributing] (#contributing)
    - [Tests] (#tests)
    - [Questions] (#questions)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ${renderLicenseSection(data.license)}

    ## Contributing
    ${data.contributions}

    ## Tests
    ${data.test}

    ## Questions
    Contact [GitHub Profile](https://github.com/${data.github}) or email at ${data.email}.
    `;
};

async function writeToFile(fileName, data) {
    try {
        await writeFileAsync(fileName, data);
        console.log("Your README.md has been generated.");
    } catch (err) {
        console.log(err);
    }
};

async function init() {
    try {
        const userResponses = await promptUser();
        const markdown = generateREADME(userResponses);
        await writeToFile("README.md", markdown);
    } catch (error) {
        console.log(error);
    }
};

init();