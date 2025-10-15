const input = document.getElementById("tarefa");
const botao = document.getElementById("botao");
const lista = document.getElementById("lista");

botao.addEventListener("click", () => {
    const valor = input.value.trim();

    // não deixa add item vazio e emite um alerta
    if (valor == "") {
        return alert("Campo vazio! Escreva algo.");
    }

    // não deixa add item repetido
    const itensExistentes = Array.from(lista.children).map(li => li.textContent);
    if (itensExistentes.includes(valor)) {
        return alert("Item repetido! Escreva outro item.");
    }

    // add item em formato de lista
    const li = document.createElement("li");
    li.textContent = valor;
    lista.appendChild(li);

    // limpa texto para escrever outro item
    li.addEventListener("click", () => {
        lista.removeChild(li);
    });
});