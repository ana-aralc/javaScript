// Constantes
const btnRapido = document.getElementById("rapido");
const btnDevagar = document.getElementById("devagar");
const resultado = document.getElementById("resultado");

// variáveis 
let contarRapido = 0;
let contarDevagar = 0;
let totalCliques = 0;

// funções
// Quando número de cliques chegar a 10 será exibido quem está na frente ou se o número de cliques foi igual
function checarResultado(){
    if (totalCliques >= 10){
        if (contarRapido > contarDevagar) {
            resultado.textContent = "O botão rápido venceu";
        } else if (contarDevagar > contarRapido){
            resultado.textContent = "O botão devagar venceu";
        } else {
            resultado.textContent = "Empate";
        }
    }
}

btnRapido.addEventListener("click", () => {
    contarRapido++;
    totalCliques++;
    checarResultado();
});

btnDevagar.addEventListener("click", () => {
    contarDevagar++;
    totalCliques++;
    checarResultado();
});

