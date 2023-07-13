// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const createMd = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:'
    },
    {
      type: 'input',
      name: 'tableOfContents',
      message: 'Provide a table of contents:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC', 'None']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:'
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Provide information on how to reach you for questions:'
    },
  ];
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((answers) => writeFile('../README.md', createMd.generateMarkdown(answers)))
        .then(() => console.log('Answers successfully written to README file'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
