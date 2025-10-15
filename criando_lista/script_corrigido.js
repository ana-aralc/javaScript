const input = document.getElementById("tarefa");
const botao = document.getElementById("botao");
const lista = document.getElementById("lista");

botao.addEventListener("click", function () {
    const texto = input.value.trim();

    if (texto == "") {
        const item = document.createElement("li");
        item.textContent = texto;
        lista.appendChild(item);
        // input.value = "";
    }
});
