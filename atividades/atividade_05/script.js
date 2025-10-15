const container = document.getElementById("container");
const botaoInicio = document.getElementById("botaoInicio");
const botaoFinal = document.getElementById("botaoFim");

botaoInicio.addEventListener("click", () => {
    const pTopo = document.createElement("p");
    pTopo.textContent = "Inserir no topo";
    pTopo.style.color = "blue";
    pTopo.style.fontWeight = "bold";
    container.prepend(pTopo);
})
botaoFinal.addEventListener("click", () => {
    const pFim = document.createElement("p");
    pFim.textContent = "Inserir no final";
    pFim.style.color = "red";
    pFim.style.fontWeight = "bold";
    container.prepend(pFim);
})