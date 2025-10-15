async function gerarConselho() {
    await fetch("https://api.adviceslip.com/advice").then(response => response.json()).then(data => {
        console.log(data);
        const p = document.getElementById("conselhoTexto");
        p.textContent = data.slip.advice;
    })
        .catch(error => {
            console.error("Erro ao buscar conselho:", error);
            alert("Ocorreu um erro ao carregar o conselho");
        });
}