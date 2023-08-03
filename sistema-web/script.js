function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;

    if (text.length <= 1) {
        alert("Tarefa precisa ter mais de 1 caractere");
        return;
    }

    var listItem = document.createElement("li");
    listItem.className = "list-item";
    listItem.classList.add("list-item");

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);
}

// Adicione o evento de escuta para a tecla Enter após o carregamento da página
document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("task_name");
    var button = document.getElementById("add-task-button");

    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            button.click();
        }
    });
});


