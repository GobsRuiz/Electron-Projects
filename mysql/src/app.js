const userForm = document.getElementById("userForm");

const { getConnection } = require('./database');
const remote = require('electron').remote;
const main = remote.require('./main');

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const usersList = document.getElementById("users");
let list = [];
let editingStatus = false;
let editProductId = '';

async function getUsers() {
    const conn = await getConnection();
    list = await conn.query('SELECT * FROM user ORDER BY id DESC');
    // var result = await (await conn).query('SELECT * FROM user');
    renderUsers()
}     

function renderUsers() {
    usersList.innerHTML = "";

    list.forEach(element => {
        usersList.innerHTML += "<div> <p>Nome: " +element.name+ "</p> <p>Email: " +element.email+ `</p> <br> <button onclick='deleteUser(${element.id})'>Deletar</button> <button onclick='editUser(${element.id})'>Editar</button> </div> <hr>`;
    });
}

async function deleteUser(id) {
    const response = confirm('Tem certeza que quer deletar este usuário?')

    if(response) {
        const conn = await getConnection();
        await conn.query('DELETE FROM user WHERE id = ?', id);
    
        getUsers();
    }
}

async function getProductId(id) {
    const conn = await getConnection();
    const result = await conn.query("SELECT * FROM user WHERE id = ?", id);
    return result[0];
}
async function editUser(id) {
    const user = await getProductId(id);
    console.log(user)

    nameInput.value = user.name;
    emailInput.value = user.email;

    editingStatus = true;
    editProductId = user.id;
}

async function updateProduct(id, user) {
    const conn = await getConnection();
    const result = await conn.query("UPDATE user SET ? WHERE id = ?", [user, id]);
    console.log(result);
}

userForm.addEventListener("submit", async (element) => {
    element.preventDefault();

    const newUser = {
        name: nameInput.value,
        email: emailInput.value,
    }

    if(!editingStatus){
        main.saveUser(newUser);
    }else{
        await updateProduct(editProductId, newUser);
        console.log('editando');

        editingStatus = false;
        editProductId = '';
    }

    userForm.reset();
    nameInput.focus();

    getUsers();
})

getUsers();