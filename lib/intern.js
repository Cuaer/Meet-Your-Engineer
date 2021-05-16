//The intern const should be able to add additional information to the employee, therefore will require the employee.js file
const employee = require("./employee.js");

//Manager const with additional properties and methods
const intern = {
    school: "school",//getElementbyId("#school")
    role: `${role}`,
};

//getGithub function. Will have to be written in the employee.js info
function getSchool() {
    console.log (intern.school)
    return
};

//getRole function. Will have to overwrite role with own role
function getRole() {
    console.log (intern.role)
    return
};

// and call role and github
getRole();
getSchool();

//Export info to employee.js via json(?)