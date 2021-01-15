const fs = require('fs');
const inquirer = require('inquirer');
const { addManager, next, addEngineer, addIntern } = require('./src/questions');
const writeToFile = require('./src/writeToFile');
const generateHTML = require('./src/generateHTML');

// import and config for ascii-art
const logo = require('asciiart-logo');
const config = require('./package.json');
// prints splash screen
console.log(logo(config).render());

// declares variable to hold answers
let manager = {};
const engineers = [];
const interns = [];

const finish = () => {
  // STARTS FOR TESTING PURPOSES ONLY
  console.log('Manager:', manager);
  console.log('Engineers:', engineers);
  console.log('Interns:', interns);
  // ENDS FOR TESTING PURPOSES ONLY

  const htmlData = generateHTML(manager, engineers, interns);
  !fs.existsSync('dist') && fs.mkdirSync('dist');
  return writeToFile('./dist/index.html', htmlData);
};

const nextAction = () => {
  return inquirer
    .prompt(next)
    .then(answers => {
      switch (answers.nextAction) {
        case 'Add an engineer':
          return inquirer
            .prompt(addEngineer)
            .then(answers => {
              engineers.push(answers);
              nextAction();
            })
        case 'Add an intern':
          return inquirer
            .prompt(addIntern)
            .then(answers => {
              interns.push(answers);
              nextAction();
            })
        case 'Finish building the team':
          finish();
      }
    })
    .catch(error => {
      console.log(error);
    });
};

const start = () => {
  return inquirer
    .prompt(addManager)
    .then(answers => {
      manager = answers;
      nextAction();
    })
    .catch(error => {
      console.log(error);
    });
};

// calls function to start program
start();