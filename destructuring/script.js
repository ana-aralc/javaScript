const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
    let resultado = '';

    const pessoa = {nome: "Lucas", idade: 35, cidade:"Brasília"};
    const {nome, idade} = pessoa;
    resultado += `Pessoa: nome= ${nome}, idade= ${idade}\n`;

    // Destructuring array e spread
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    const combinado = [...arr1,...arr2];
    resultado += `Arrays combinados: ${combinado}\n`;

    // Rest 
    const somarTudo = (...nums) => nums.reduce((a,b)=>a+b,0);
    resultado += `Soma com rest: ${somarTudo(1,2,3,4)}\n`;

    // Classes - sempre com letra maiuscula
    class Carro {
        constructor(modelo) {this.modelo = modelo;}
        dirigir() {return `${this.modelo} está dirigindo`;}
    }
    const meuCarro = new Carro("Fusca");
    resultado += meuCarro.dirigir();
    output.textContent = resultado;
});