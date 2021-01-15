const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./src/questions');
const writeToFile = require('./src/writeToFile');
const generateHTML = require('./src/generateHTML');

const start = () => {
  return inquirer
    .prompt(questions)
    .then(answers => {
      return generateHTML(answers);
    })
    .then(htmlData => {
      !fs.existsSync('dist') && fs.mkdirSync('dist');
      return writeToFile('./dist/index.html', htmlData);
    })
    .catch(error => {
      console.log(error);
    });
};

// calls function to start program
start();