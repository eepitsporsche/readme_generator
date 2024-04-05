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


//Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseLink = {
        MIT: `<a href="https://opensource.org/licenses/MIT">MIT License</a>

            Copyright© ${new Date().getFullYear()} ${data.name}
        
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
        
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
        
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.`,
        Apache2: `<a href="https://opensource.org/licenses/Apache-2.0">Apache 2.0 License</a>
        
            Copyright© ${new Date().getFullYear()} ${data.name}
            
            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                <a href="http://www.apache.org/licenses/LICENSE-2.0">http://www.apache.org/licenses/LICENSE-2.0</a>

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.`,
        GNUGPLv3: `<a href="https://www.gnu.org/licenses/gpl-3.0">GNU General Public License</a>

            Copyright© ${new Date().getFullYear()} ${data.name}
            
            This program is free software: you can redistribute it and/or modify
            it under the terms of the GNU General Public License as published by
            the Free Software Foundation, either version 3 of the License, or
            (at your option) any later version.

            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU General Public License for more details.

            You should have received a copy of the GNU General Public License
            along with this program.  If not, see <a href"https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>.`,
        MPL2: `<a href="https://opensource.org/licenses/MPL-2.0">Mozilla Public License 2.0</a>

            Copyright© ${new Date().getFullYear()} ${data.name}
            
            This Source Code Form is subject to the terms of the Mozilla Public
            License, v. 2.0. If a copy of the MPL was not distributed with this
            file, You can obtain one at <a href="http://mozilla.org/MPL/2.0/">http://mozilla.org/MPL/2.0/</a>.`,
    }
    return licenseLink[license]
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