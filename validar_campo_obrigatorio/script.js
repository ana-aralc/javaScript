const nome = document.getElementById("nome");
const btnEnviar = document.getElementById("btnEnviar");
const mensagemErro = document.getElementById("mensagemErro");

// value.trim - quando recebe o valor atraves de input
btnEnviar.addEventListener("click", function () {

    if (!nome.value.trim()) {
        mensagemErro.textContent = "Campo nome obrigatório";
        form.reset();
    } else {
        mensagemErro.textContent = "";
        alert("Nome enviado com sucesso");
    }
});
