const questions = [
  {
    type: 'input',
    name: 'team-manager-name',
    message: "Please enter the team-manager's name:",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter your GitHub username!');
        return false;
      }
    }
  }
];

module.exports = questions;