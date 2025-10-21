const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () =>{
    const nome = "Maria";
    let idade = 28;
    const cidade = "Brasília";
    
    // contatenar
    output.textContent = `Nome: ${nome}\nIdade: ${idade}\nCidade: ${cidade}`;
});
// let e const
// são as formas modernas de declarar variáveis e substituem o uso de var na maioria dos casos. Aprincipal vantagem é o escopo de bloco, que limita a visibilidade da variável ao bloco ({...}) onde ela foi declarada, evitando bugs comuns associados ao escopo de função do var.