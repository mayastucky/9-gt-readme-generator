const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");



// // array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a short description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "instructions",
  },
  {
    type: "input",
    message: "What is the usage information for your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contribution guidelines for your project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are the test instructions for your project?",
    name: "test",
  },
  {
    type: "list",
    message: "What license is your project under?",
    name: "license",
    choices: ["MIT", "GPL", "MPL"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];
//function that asks the questions and then generates the page
function init() {
  inquirer.prompt(questions).then(function (data) {
    fs.writeFile("SampleReadMe.md", generateMarkdown(data), function (error) {
      if (error) {
        throw error;
      }
      console.log(
        "Success! Please migrate to the new file with your generated Read Me"
      );
    });
  });
}

// function call to initialize program
init();

module.exports = {
  init: init,
};
