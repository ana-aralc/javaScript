const botao = document.getElementById("adicionarItem");
const lista = document.getElementById("lista");

let contar = 0;


botao.addEventListener("click", () => {
    contar++;
    const li = document.createElement("li");
    li.textContent = 'Item' + contar;
    lista.appendChild(li);

});
