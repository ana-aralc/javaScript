const btn = document.getElementById("btn");
const btc = document.getElementById("btc");
const eth = document.getElementById("eth");
const doge = document.getElementById("doge");
const erro = document.getElementById("erro");

btn.addEventListener("click", function () {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=brl")
    // alterar para usd para ver em dolar no link e no then que puxa os dados abaixo
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function(dados){
            btc.innerText = "R$" + dados.bitcoin.brl;
            eth.innerText = "R$" + dados.ethereum.brl;
            doge.innerText = "R$" + dados.dogecoin.brl;
            erro.innerText = "";
        })

    .catch(function () {
        erro.innerText = "Erro ao buscar dados";
    });
})
