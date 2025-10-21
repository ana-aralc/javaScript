const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
    // Arrow function
    const soma = (a, b) => a + b;

    // Default Parameter
    const saudar = (nome = "Daniel") => `Olá, ${nome}`;

    let resultado = '';
    resultado += `Somar 5 + 7 = ${soma(5,7)}\n`;
    // resultado += saudar("Daniel") + '\n';
    resultado += saudar();
    output.textContent =  resultado;
});