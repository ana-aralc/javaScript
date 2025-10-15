const input = document.getElementById("novoItem");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("listaItens");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    const valor = input.value.trim();

    if (valor == "") {
        mensagem.textContent = "Digite o item";
        return;
    }

    mensagem.textContent = "";

    const itensExistentes = Array.from(lista.children).map(li => li.textContent);
    if (itensExistentes.includes(valor)) {
        mensagem.textContent = "Item já existente";
        return;
    }

    const li = document.createElement("li");
    li.textContent = valor;
    lista.appendChild(li);

    li.addEventListener("click", () => {
        lista.removeChild(li);
    });
});