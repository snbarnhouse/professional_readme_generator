// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

// TODO: Create an array of questions for user input
const questions = [
    //GitHub username with validation
    {
        type: "input",
        name: "username",
        message: "Please enter GitHub username.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log ("Must enter GitHub username.");
            }
            return true;
        }
    },
    //Repository name with validation
    {
        type: "input",
        name: "repository",
        message: "Please enter the name of your GitHub repository.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log ("Must enter GitHub repository name.");
            }
            return true;
        }
    },
    //Project title with validation
    {
        type: "input",
        name: "title",
        message: "Please enter your project title.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log ("Must enter project title.");
            }
            return true;
        }
    },
    //Description of project with validation
    {
        type: "input",
        name: "description",
        message: "Please enter the description of your project.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log ("Must enter dexription of project.");
            }
            return true;
        }
    },
    //Installations needed with validation
    {
        type: "input",
        name: "installation",
        message: "Please enter any needed installations.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log ("Must enter any needed installations.");
            }
            return true;
        }
    },
    //License for project with choices
    {
        type: "input",
        name: "license",
        message: "Choose your license for your project.",
        choices: ["apache-2.0", "booset-software", "bsd-3-clause", "bsd-2-clause"],
    },
    //Projects instructions and examples
    {
        type: "input",
        name: "usage",
        message: "Please enter project instructions and examples if applicable.",
    },
    //Contribution
    {
        type: "input",
        name: "contributing",
        message: "Please explain how users may contribute to your project if applicable.",
    },
    //Tests
    {
        type: "input",
        name: "tests",
        message: "Please provide tests for project and how to use if applicable.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    false.writeToFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your file has been created.")
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();