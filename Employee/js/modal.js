// Modal register
var addEmployee = document.getElementById("addEmployee");
// Modal edit
// Modal details
var modals = document.querySelectorAll(".modal");



// Functions
function eventListener() {
    addEmployee.addEventListener("click", () => {
        openModal("modalRegister");
    });
    
    window.addEventListener("click", event => {
        closeModal(event.target.id);
    })
}eventListener()

function openModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "flex";
}
function closeModal(id) {
    if(id.substr(5) == "Register" || id.substr(5) == "Edit" || id.substr(5) == "Detail"){
        var modal = document.getElementById(id);
        modal.style.display = "none";
    }
}