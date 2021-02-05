// Span || message
var modalEditMessage = document.getElementById("modalEdit-message");


// Functions
function updateUser(employee) {
    var modalEdit = document.getElementById("modalEdit")
    modalEdit.style.display = "flex";

    var h2 = document.getElementById("modalEdit-title")
    var modalEditName = document.getElementById("editName");
    var modalEditCpf = document.getElementById("editCpf");
    var modalEditBtnSave = document.getElementById("modalEdit-btnSave");

    h2.innerHTML += employee["employeeId"];
    modalEditName.value = employee["name"]
    modalEditCpf.value = employee["cpf"]

    modalEditBtnSave.addEventListener("click", btn => {
        btn.preventDefault();

        var lista = readFile();
        var listaAnterior = lista;
       
        var employeeEmployeeId = employee["employeeId"];
        var employeeName = modalEditName.value;
        var employeeCpf = modalEditCpf.value;
        lista = [];
        writeFile(lista)

        listaAnterior.forEach(element => {
            console.log(element)
            var employeeId = "";
            var name = "";
            var cpf = "";
            if(element["employeeId"] == employeeEmployeeId){
                employeeId = employeeEmployeeId;
                name = employeeName;
                cpf = employeeCpf;
                console.log("If")
            }else{
                employeeId = element["employeeId"];
                name = element["name"];
                cpf = element["cpf"];
                console.log("else")
            }
            lista.push({employeeId, name, cpf})
            writeFile(lista)
        });

        modalEditMessage.style.opacity = 1;
        modalEditMessage.innerHTML = "Funcionário editado com sucesso";

        setTimeout(() => {
            document.location.reload(true);
        }, 2000);
    })

    window.addEventListener("click", wind => {
        if(wind.target.id === "modalEdit"){
            modalEdit.style.display = "none";
            h2.innerHTML = "Editar usuário: ";
            modalEditName.value = "";
            modalEditCpf.value = "";
        }
    })
}