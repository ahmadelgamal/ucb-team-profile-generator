const addManager = [
  {
    type: 'input',
    name: 'team-manager-name',
    message: "Please enter the team manager's name:",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log("You must enter the team manager's name!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'team-manager-employee-id',
    message: "Please enter the team manager's employee ID:",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log("You must enter the team manager's employee ID!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'team-manager-email-address',
    message: "Please enter the team-manager's email address:",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log("You must enter the team manager's email address!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'team-manager-office-number',
    message: "Please enter the team-manager's office number:",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log("You must enter the team manager's office number!");
        return false;
      }
    }
  }
];

const next = [
  {
    type: 'rawlist',
    name: 'nextAction',
    message: 'Would you like to:',
    choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
  }
]

const addEngineer = [
  {
    type: 'input',
    name: 'engineer-name',
    message: "Please enter the engineer's name:",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log("You must enter the engineer's name!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'engineer-employee-id',
    message: "Please enter the engineer's employee ID:",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log("You must enter the engineer's employee ID!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'engineer-email-address',
    message: "Please enter the engineer's email address:",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log("You must enter the engineer's email address!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'engineer-github-username',
    message: "Please enter the engineer's GitHub username:",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log("You must enter the engineer's GitHub username!");
        return false;
      }
    }
  }
];

const addIntern = [
  {
    type: 'input',
    name: 'intern-name',
    message: "Please enter the intern's name:",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log("You must enter the intern's name!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'intern-employee-id',
    message: "Please enter the intern's employee ID:",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log("You must enter the intern's employee ID!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'intern-email-address',
    message: "Please enter the intern's email address:",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log("You must enter the intern's email address!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'intern-school',
    message: "Please enter the intern's school:",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log("You must enter the intern's school!");
        return false;
      }
    }
  }
];

module.exports = {addManager, next, addEngineer, addIntern};