// Constantes
const btn = document.getElementById("clicar");
const contadorSpan = document.getElementById("contador");
const mensagem = document.getElementById("mensagem");

// o numero de cliques começa com 0 
// o contador recebe uma variavel de texto que é igual ao número de cliques
let cliques = 0;
contadorSpan.textContent = cliques

// exibe em texto o número de cliques no botão 
btn.addEventListener("click", () => {
    cliques++;
    contadorSpan.textContent = cliques;
});
// disabilita o botão depois de 5s e mostra o número de cliques que usuário realizou
setTimeout(() => {
    btn.disabled = true;
    mensagem.textContent = `Parabéns! Você clicou ${cliques} vezes em 5 segundos.`;
}, 5000);