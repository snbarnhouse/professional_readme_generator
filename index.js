// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    //GitHub username
    {
        type: "input",
        name: "username",
        message: "Please enter GitHub username.",
    },
    //Repository name
    {
        type: "input",
        name: "repository",
        message: "Please enter the name of your GitHub repository.",
    },
    //Project title
    {
        type: "input",
        name: "title",
        message: "Please enter your project title.",
    },
    //Description of project
    {
        type: "input",
        name: "description",
        message: "Please enter the description of your project.",
    },
    //Installations needed
    {
        type: "input",
        name: "installation",
        message: "Please enter any needed installations.",
        default: "npm i",
    },
    //License for project with choices
    {
        type: "input",
        name: "license",
        message: "Choose your license for your project.",
        choices: ["apache-2.0", "booset-software", "bsd-3-clause", "bsd-2-clause", "MIT"],
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
    //Contact
    {
        type: "input",
        name: "contact",
        message: "Please provide your email address.",
    },
];

// TODO: Create a function to write README file


function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
    try {
    const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Your responses have been logged. Calling to GitHub...");

        // Pass inquirer data and api data to markdown
        console.log("Generating your information")
        const markdown = generateMarkdown(userResponses);
        console.log(markdown);

        // Write markdown
        await writeToFile('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();