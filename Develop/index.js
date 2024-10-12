// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the ReadMe?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description for your ReadMe.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'installationInstructions',
    },
    {
        type: 'input',
        message: 'Provide your usage information.',
        name: 'usageInformation',
    },
    {
        type: 'input',
        message: 'Provide your contribution guidelines',
        name: 'contributionGuidelines',
    },
    {
        type: 'input',
        message: 'Provide your test Instructions.',
        name: 'testInstructions',
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ['MIT', 'Apache', 'ISC', 'No License'],
    }
];

// TODO: Create a function to write README file
function writeToFile(sampleReadMe, data) {
    fs.writeFile(sampleReadMe, data, function(error) {
        if (error) {
            console.log(error);
        } else {
            console.log("Your ReadMe file has been created.");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    // call inquirer.prompt
    inquirer
        .prompt(
            questions
        ).then (function(answer) {
            const markdown = generateMarkdown(answer);
            writeToFile("sampleReadMe.md", markdown);
        })
    
};

// Function call to initialize app
init();

