// Exemplos de variáveis
var nome = "Joe"; //string
let idade = 18;  //NUMBER
const aprovado = true; //boolean
let pessoa = { nome: "Lucas", idade: 17 }; //objeto
let notas = [8, 9, 7, 10]; //array

console.log(nome, typeof nome);



// Testando const
const escola = "SENAI";
// escola = "Outra; // Isso dará erro"

// Operadosres Aritméticos
let a = 10;
let b = 3;

console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Modulo:", a % b);
console.log("Exponenciação:", a ** b);

// Operadores Lógicos //

// AND: Verdadeiro se ambas as condições forem verdadeiras
// OR: Verdadeiro se pelo menos uma condição for verdadeira
// NOT: Inverte o valor booleano

let x = true;
let y = false;

console.log("AND(&&):", x && y);
console.log("OR (||):", x || y);
console.log("NOT (!):", "!x");

// Precedência
console.log("Sem parêntese:", 2 + 3 * 4);
console.log("Com parêntese:", (2 + 3) * 4);

function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
        document.getElementById("resultado").innerText = "Valores inválidos";
        return;
    }
    let imc = peso / (altura * altura);
    let mensagem = "";

    if (imc < 18.5) {
        mensagem = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        mensagem = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        mensagem = "Sobrepeso";
    } else {
        mensagem = "Obesidade";
    }
    document.getElementById("resultado").innerText = "Seu IMC é " + imc.toFixed(2) + " - " + mensagem;
}