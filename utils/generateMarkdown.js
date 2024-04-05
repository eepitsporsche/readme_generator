//Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    const badges = {
        MIT: '![License](https://img.shields.io/badge/License-MIT-blue.svg)',
        Apache2: '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
        GNUGPLv3: '![License](https://img.shields.io/badge/License-GPLv3-blue.svg)',
        MPL2: '![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
    };
    return badges[license]
}



//Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
    ## Table of Contents

    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [Contribution] (#contribution)
    * [Tests](#tests)
    * [License](#license)
    * [Questions](#questions)

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Credits
    * Creator: ${data.name}
    * ${data.credits}

    ## Contribution
    ${data.contribution}

    ## Tests
    ${data.tests}

    ## License
    ${data.license}

    ## Questions
    For more information on this project:
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visit me on [GitHub](https://github.com/${data.username})
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[E-mail me](mailto:${data.email})

    ### <p align="center">[Back to Top](#${data.title})</p>`;
};
  
module.exports = generateMarkdown;