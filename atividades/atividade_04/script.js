const minhaLista = document.getElementById("minhaLista"); const item2 = document.getElementById("item2"); const botao = document.getElementById("inserirItem1");

botao.addEventListener("click", () => {

    const itemExistente = document.querySelector("#item1");

    if (itemExistente) { alert("Item 1 já existe"); return; }

    const novoiItem = document.createElement('li'); novoiItem.id = "item1"; novoiItem.textContent = "Item 1" minhaLista.insertBefore(novoiItem, item2);

});