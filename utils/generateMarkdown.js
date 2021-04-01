// Create a function that returns a license badge based on which license is passed in .If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return (`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`);
        case 'APACHE 2.0':
            return (`[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)`);
        case 'GPL 3.0':
            return (`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`);
        case 'BSD 3':
            return (`[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)`);
        default:
            return ('');
    }
}

// Create a function that returns the license link. If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'MIT':
            return (`[MIT](https://opensource.org/licenses/MIT)`);
        case 'APACHE 2.0':
            return (`[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`);
        case 'GPL 3.0':
            return (`[GPL v3](https://www.gnu.org/licenses/gpl-3.0)`);
        case 'BSD 3':
            return (`[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`);
        default:
            return ('');
    }
}

// Create a function that returns the license section of README. If there is no license, return an empty string
function renderLicenseSection(license) {
    return (license) ? (`${renderLicenseBadge(license)} This project is licensed under the ${renderLicenseLink(license)} license.`) : ("");
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    
#### Table of contents

    1. [Project Description](#project-description)
    2. [Installation Instructions](#installation-instructions)
    3. [Usage Information](#usage-information)
    4. [Contributor Guidelines](#contributor-guidelines)
    5. [Test Instructions](#test-instructions)
    6. [License](#license)
    7. [Questions](#questions)

## Project Description
    * ${data.description}
    
## Installation Instructions
    * ${data.installation}
    
## Usage Information
    * ${data.usage}
    
## Contributor Guidlines
    * ${data.contribution}
    
## Test Instructions
    * ${data.test}
    
## License 
    * ${renderLicenseSection(data.license)}
    
## Questions
    * Emails me at ${data.email}
    * Find me on GitHub [${data.github}](http://github.com/${data.github})`;
}
module.exports = generateMarkdown;