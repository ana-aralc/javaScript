const galeria = document.getElementById("galeria");
const btn = document.getElementById("btn");

async function carregarPersonagens() {
    galeria.innerHTML = "<p>Carregando Personagens...</p>";

    try {
        const resposta = await fetch("https://rickandmortyapi.com/api/character");
        if (!resposta.ok) {
            throw new Error("Erro na requisição:" + resposta.status);
        }
        const dados = await resposta.json();
        const personagens = dados.results.slice(0, 8);

        galeria.innerHTML = "";

        personagens.forEach(p => {
            const card = document.createElement("div");
            card.className = "card";

            const img = document.createElement("img");
            img.src = p.image;
            img.alt = p.name;

            const nome = document.createElement("p");
            nome.textContent = p.name;

            card.appendChild(img);
            card.appendChild(nome);
            galeria.appendChild(card);
        });
    } catch (erro) {
        console.error("Erro ao buscar personagem", erro);
        galeria.innerHTML = "<p>Erro ao carregar personagem. tente novamente</p>";
    }
}
btn.addEventListener("click", carregarPersonagens);
