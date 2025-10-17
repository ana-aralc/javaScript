const btn = document.getElementById("btn");
const artistInput = document.getElementById("artist");
const musicContainer = document.getElementById("musicas");
const erro = document.getElementById("erro");

btn.addEventListener("click", function() {
  const artist = artistInput.value.trim();
  if (artist === "") {
    erro.innerText = "Por favor, digite um artista.";
    musicContainer.innerHTML = "";
    return;
  }

  // API iTunes - funciona direto do navegador
  fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(artist)}&entity=song&limit=6`)
    .then(res => res.json())
    .then(dados => {
      musicContainer.innerHTML = "";
      if (dados.results.length === 0) {
        erro.innerText = "Nenhuma música encontrada.";
        return;
      }
      dados.results.forEach(music => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${music.artworkUrl100}" alt="Capa do álbum">
          <h3>${music.trackName}</h3>
          <p>${music.artistName}</p>
          <a href="${music.trackViewUrl}" target="_blank">Ouvir no iTunes</a>
        `;
        musicContainer.appendChild(card);
      });
      erro.innerText = "";
    })
    .catch(() => {
      erro.innerText = "Erro ao buscar músicas. Tente novamente.";
      musicContainer.innerHTML = "";
    });
});