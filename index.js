const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./utils/questions');
const writeToFile = require('./utils/writeToFile');
const generateHTML = require('./utils/generateHTML');

const start = () => {
  return inquirer
    .prompt(questions)
    .then(answers => {
      return generateHTML(answers);
    })
    .then(htmlData => {
      !fs.existsSync('output') && fs.mkdirSync('output');
      return writeToFile('./output/index.html', htmlData);
    })
    .catch(error => {
      console.log(error);
    });
};

// calls function to start program
start();