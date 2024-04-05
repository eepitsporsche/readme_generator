

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
}
  
  module.exports = generateMarkdown;