//The manager const should be able to add additional information to the employee, therefore will require the employee.js file
// const employee = require("./employee.js");

//Manager const with additional properties and methods
const manager = {
    officeNum: "officeNum", //getElementbyId("#officeNum")
    role: "manager",
};

//getRole function
function getRole() {
    console.log (manager.role)
    return
};

// and call
getRole();

//Extend info to employee.js via json(?)
