function renderLicenseBadge(data) {
    const licenseInput = data.licensing;
    let licenseBadge = "";

    if (licenseInput === "none") {
        return licenseBadge;
    }
    if (licenseInput === "MIT") {
        licenseBadge =
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        return licenseBadge;
    }
    if (licenseInput === "Apache") {
        licenseBadge =
            "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        return licenseBadge;
    }
    if (licenseInput === "BDS 3-Clause") {
        licenseBadge =
            "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        return licenseBadge;
    }
    if (licenseInput === "Mozilla") {
        licenseBadge =
            "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        return licenseBadge;
    }
}

function renderLicenseLink(data) {
    const licenseInput = data.license;

    if (licenseInput === "none") {
        return "";
    } else {
        return `* [License](#license)`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    const licenseInput = data.license;

    if (licenseInput === "none") {
        return "";
    } else {
        return `# License
    ${renderLicenseBadge(data)}`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  
  
  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
 
  ${renderLicenseLink(data)}
  
  
  # Installation
  ${data.installation}
  
  # Usage
  ${data.usage}
  
  ${renderLicenseSection(data)}

  # Contributing
  ${data.contributing}

  # Tests
  ${data.tests}

  # Questions
  * [Github](github.com/${data.username})
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
