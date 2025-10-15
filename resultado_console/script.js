// No arquivo scritp.js crie variáveis para guardar as seguintes informações:
// • Nome do jogador (string)
// • Idade (number)
// • Se está online ou não (boolean)
// • Um objeto com os dados do jogo favorito (nome e ano de lançamento).
// • Um array com as últimas 3 pontuações obtidas em partidas.

// Exiba no console o tipo de cada variável utilizando o operador typeof.

// Exemplos de variáveis
var nome = "Joe"; //string
let idade = 18;  //NUMBER
const online = true; //boolean
let jogo = {nome:"cry of fear", lancamento:2010}; //objeto

let notas = [70, 80, 100]; //array
let resultado = 0;

console.log("Nome:", nome, typeof nome);
console.log("Idade:", idade, typeof idade);
console.log("Online:",online, typeof online);
console.log("Jogo Favorito:", jogo, typeof jogo);
console.log("Pontuações", notas, typeof notas);

// Alterar valores
// idade = 17;
// online = false;

// console.log("Nova idade:", idade);
// console.log("Novo status online:", online);

// Média das 3 pontuações e mostrando no console:
let soma = notas[0] + notas [1] + notas [2];
let media = soma / notas.length;

console.log("Média:", media);