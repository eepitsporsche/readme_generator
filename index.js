//Packages needed for this application:
const inquirer = require("inquirer");
const fs = require("fs");

//Array of questions for user input
const questions = [

    //Title of project *USER INPUT REQUIRED*
    {
        type: "input",
        name: "title",
        message: "Enter the name of your project:",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("A project name is required. Enter the name of your project:");
                return false;
            }
        }
    },

    //Description of project
    {
            type: "input",
            name: "description",
            message: "Enter a verbose description of your project:",
    },

    //Installation of project
    {
            type: "input",
            name: "installation",
            message: "Enter any installation instructions or requirements necessary to operate your project:",
    },

    //Usage of project
    {
        type: "input",
        name: "usage",
        message: "Enter usage information for your project:",
    },

    //Credits for project
    {
        type: "input",
        name: "credits",
        message: "Enter any collaborators, third-party assets, or other entities to attribute credit for this project:",
    },

    //Contribution for project
    {
        type: "input",
        name: "contribution",
        message: "Enter instructions necessary to contribute to this project:",
    },

    //Tests for project
    {
    type: "input",
    name: "tests",
    message: "Enter any information on for tests on this project:",
    },

    //License for project
    {
        type: "list",
        name: "license",
        message: "Select the license necessary for your project:",
        choices: ["MIT", "Apache2.0", "GNUGPLv3", "MPL2.0"]
    },

    //User's name
    {
        type: "input",
        name: "name",
        message: "Enter your name:",
    },

    //User's GitHub username *USER INPUT REQUIRED*
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Your GitHub username is required. Enter your GitHub username:");
                return false;
            }
        }
    },

    //User's E-mail Address *USER INPUT REQUIRED*
    {
        type: "input",
        name: "email",
        message: "Enter your e-mail address:",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Your e-mail address is required. Enter your e-mail address:");
                return false;
            }
        }
    },
];