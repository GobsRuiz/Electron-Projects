function deleteUser(id) {
    const content = readFile();

    for (let i = 0; i < content.length; i++) {
        var element = content[i]["employeeId"]
        console.log(id)
        if(element == id){
            content.splice(i, 1);
            writeFile(content)
            alert("Deletado com sucesso")
            document.location.reload(true)
        }
    }
}