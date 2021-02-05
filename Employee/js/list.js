var employeeIdArray = [];



// Functions
// List employees
function listAllUsers() {
    var employees = readFile();

    var listEmployees = document.getElementById("listEmployees");

    for (let i = 0; i < employees.length; i++) {
        const element = employees[i];
        employeeIdArray[i] = [element["employeeId"]];
    }

    employees.forEach(element => {
        var name = document.createElement("p");
        var cpf = document.createElement("p");
        var btnDelete = document.createElement("button")
        var btnUpdate = document.createElement("button")
        var btnDetails = document.createElement("button")
        var hr = document.createElement("hr");

        name.innerHTML = "Nome: " + element["name"];
        cpf.innerHTML = "CPF: " + element["cpf"];
        
        btnDelete.innerHTML = "Deletar";
        btnUpdate.innerHTML = "Editar";
        btnDetails.innerHTML = "Detalhes";

        btnDelete.id = element["employeeId"];
        btnDelete.classList.add("btnDelete");
        btnUpdate.id = element["employeeId"];
        btnUpdate.classList.add("btnUpdate");
        btnDetails.id = element["employeeId"];
        btnDetails.classList.add("btnDetails");

        listEmployees.appendChild(name)
        listEmployees.appendChild(cpf)
        listEmployees.appendChild(btnDelete)
        listEmployees.appendChild(btnUpdate)
        listEmployees.appendChild(btnDetails)
        listEmployees.appendChild(hr)
    });
    var btnsUpdate = document.querySelectorAll(".btnUpdate");
    btnsUpdate.forEach(element => {
        element.addEventListener("click", event => {
            for (let i = 0; i < employeeIdArray.length; i++) {
                const element = employeeIdArray[i];
                if(element == event.target.id){
                    updateUser(employees[i])
                }
            }
        })    
    });

    var btnsDelete = document.querySelectorAll(".btnDelete");
    btnsDelete.forEach(element => {
        element.addEventListener("click", event => {
            for (let i = 0; i < employeeIdArray.length; i++) {
                const element = employeeIdArray[i];
                if(element == event.target.id){
                    deleteUser(employees[i]["employeeId"])
                }
            }
        })    
    });

    var btnsDetails = document.querySelectorAll(".btnDetails");
    btnsDetails.forEach(element => {
        element.addEventListener("click", event => {
            for (let i = 0; i < employeeIdArray.length; i++) {
                const element = employeeIdArray[i];
                if(element == event.target.id){
                    detalhesUser(employees[i])
                }
            }
        })    
    });
}listAllUsers()