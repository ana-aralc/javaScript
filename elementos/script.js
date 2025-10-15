const container = document.getElementById("container");

// appendChild - adiciona texto no final
document.getElementById("btnAppend").addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Parágrafo adicionado com appendChild no final";
    container.appendChild(p);
});

// prepend - adiciona no inicio
document.getElementById("btnPrepend").addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Prágrafo adicionado com prepend no inicio";
    container.prepend(p);
});

// insertBefore - inserir antes do primeiro
document.getElementById("btnInsertBefore").addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Parágrafo inserido antes do primeiro";
    const primeiro = container.firstElementChild;
    container.insertBefore(p, primeiro);
});

// Manipulção de texto com innerHTML
document.getElementById("btnInnerHTML").addEventListener("click", () => {
    const muller = document.createElement("p");
    muller.innerHTML = "Texto usado no innerHTML";
    container.appendChild(muller);
});