// Button
var btnRegister = document.getElementById("register");
// Span || message
var modalRegisterMessage = document.getElementById("modalRegister-message")



// Functions 
function registerUser() {
    btnRegister.addEventListener('click', element => {
        element.preventDefault();

        // Check id
        checkId()

        // Get values
        const name = document.getElementById("name").value;
        const cpf = document.getElementById("cpf").value;
        
        // Save
        const employee = readFile()
        employee.push({employeeId, name, cpf});
        employeeId += 1;
        writeFile(employee)

        modalRegisterMessage.style.opacity = 1;
        modalRegisterMessage.innerHTML = "Funcionário cadastrado com sucesso";

        setTimeout(() => {
            document.location.reload(true);
        }, 2000);
    })
}registerUser()