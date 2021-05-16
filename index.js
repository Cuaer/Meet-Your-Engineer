const fs = require('fs');
const inquirer = require ('inquirer');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
      },
      {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?',
      },
      {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
    ]);
  };
  
  const generateHTML = (answers) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Meet Your Engineer!</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hello! Here is the Team you have created!</h1>
        <p class="team"><img src="https://cdn2.psychologytoday.com/assets/styles/crop_1_1_180x180/public/2020-08/shutterstock_1731284125_0.jpg?itok=A5XU7AAk"/></p>
        <h3>Employee Team: <span class="badge badge-secondary bg-dark text-danger">Red <!--<img src ="https://www.pngkit.com/png/full/314-3140407_pokeball-8-bit-png-gif.png" class="img-fluid"/>--></span></h3>
        <ul class="manager">
            <li class="list-group-item">Name: ${answers.name}</li>
            <li class="list-group-item">Role: ${answers.role}</li>
            <li class="list-group-item">Id: ${answers.id}</li>
            <li class="list-group-item">Email: ${answers.email}</li>
            <li class="list-group-item">Office Number: ${answers.officenumber}</li>
        </ul>
        <ul class="engineer">
            <li class="list-group-item">Name ${answers.name}</li>
            <li class="list-group-item">Role: ${answers.role}</li>
            <li class="list-group-item">Id: ${answers.Id}</li>
            <li class="list-group-item">Email: ${answers.email}</li>
            <li class="list-group-item">Github: ${answers.github}</li>
          </ul>
          <ul class="intern">
            <li class="list-group-item">Name ${answers.name}</li>
            <li class="list-group-item">Role: ${answers.role}</li>
            <li class="list-group-item">Id: ${answers.id}</li>
            <li class="list-group-item">Email: ${answers.email}</li>
            <li class="list-group-item">School: ${answers.school}</li>
          </ul>
    
      </div>
    </div>
    </body>`;
  
  // Bonus using writeFileAsync as a promise
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
};
  
init();

getName ();

getId ();

getEmail ();

getRole(); //returns employee

//Other three classes will **EXTEND** Employee

//In addition to Employee's properties and methods, Manager will also have the following:

// officeNumber

// // getRole()—overridden to return 'Manager'
// In addition to Employee's properties and methods, Engineer will also have the following:

// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'

// In addition to Employee's properties and methods, Intern will also have the following:

// school

// getSchool()

// getRole()—overridden to return 'Intern'

// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.


const generateHTML = (/*userinput*/) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Meet Your Engineer!</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! M</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;