// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return "";

  switch (license) {
    case "Apache License 2.0":
      return '![License Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case "GNU General Public License v3.0":
      return '![License Badge](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case "MIT License":
      return '![License Badge](https://img.shields.io/badge/License-MIT-blue.svg)';
    case "BSD 2-Clause 'Simplified' License":
      return '![License Badge](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)';
    default:
      return "";
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return "";

  switch (license) {
    case "Apache License 2.0":
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    case "GNU General Public License v3.0":
      return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.html)';
    case "MIT License":
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case "BSD 2-Clause 'Simplified' License":
      return '[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)';
    default:
      return "";
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return "";

  return `
  ## License 

  This application has the ${license} license.

  ${renderLicenseBadge(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ${data.contents}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage) 
  - [License](#license)
  - [Contributing](#contributions)
  - [Tests](#test)
  - [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributions}

  ## Tests
  ${data.test}
`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
};
