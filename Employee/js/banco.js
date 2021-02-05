const fs = require('fs');

// Id
var employeeId = 0;



// Functions
// Read file
function readFile() {
    const employee = fs.readFileSync('./database/employee.json', 'utf-8');
    return JSON.parse(employee);
}

// Write file
function writeFile(value) {
    fs.writeFileSync('./database/employee.json', JSON.stringify(value), 'utf-8');
}

// Check id 
function checkId() {
    const employee = readFile() 
    if(employee.length !== 0){
        employee.forEach(element => {
            employeeId = element["employeeId"];
        });
        employeeId += 1;
    }
}
