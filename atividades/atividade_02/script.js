const botao = document.getElementById("adicionar");
const area = document.getElementById("area");

const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Texto adicionado dinamicamente!"

botao.addEventListener("click", () => {
    area.appendChild(novoParagrafo);

});