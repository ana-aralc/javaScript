const botaoCriar = document.getElementById("botaoCriar");

botaoCriar.addEventListener("click", () => {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Parágrafo criado dinamicamente";


    console.log(novoParagrafo);

    console.log("Tag criada:", novoParagrafo.tagName);
});

