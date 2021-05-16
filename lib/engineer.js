//The engineer const should be able to add additional information to the employee, therefore will require the employee.js file
const employee = require("./employee.js");

//Manager const with additional properties and methods
const engineer = {
    github: "github",//getElementbyId("#github")
    role: "engineer",
};

//getGithub function. Will have to be written in the employee.js info
function getGithub() {
    console.log (employee.github)
    return
};

//getRole function. Will have to overwrite role with own role
function getRole() {
    console.log (employee.role)
    return
};

// and call role and github
getRole();
getGithub();

//Export info to employee.js via json(?)