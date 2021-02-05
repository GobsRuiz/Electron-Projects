function detalhesUser(employee) {
    var modalDetails = document.getElementById("modalDetails")
    modalDetails.style.display = "flex";

    var h2 = document.getElementById("modalDetails-title");
    var modalDetailsData = document.getElementById("modalDetails-data");
    var name = document.createElement("p");
    var cpf = document.createElement("p");

    name.innerHTML = "Nome: " + employee["name"];
    cpf.innerHTML = "CPF: " + employee["cpf"];

    modalDetailsData.appendChild(name);
    modalDetailsData.appendChild(cpf);

    window.addEventListener("click", wind => {
        if(wind.target.id == "modalDetails"){
            modalDetails.style.display = "none";
            h2.innerHTML = "";
            modalDetailsData.innerHTML = "";
        }
    })
}