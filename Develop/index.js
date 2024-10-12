// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";
import { type } from "os";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the ReadMe?',
        name: 'title',
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ['MIT', 'Apache', 'IBM', 'No License'],
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

