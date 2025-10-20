const form = document.getElementById("formCadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const idade = document.getElementById("idade");
const senha = document.getElementById("senha");

const erroNome = document.getElementById("erroNome");
const erroEmail = document.getElementById("erroEmail");
const erroIdade = document.getElementById("erroIdade");
const erroSenha = document.getElementById("erroSenha");

// value.trim - quando recebe o valor atraves de input
function validarNome() {
    if (!nome.value.trim()) {
        erroNome.textContent = "O nome é obrigatório";
        nome.classList.add("erro");
        return false;
    } else {
        erroNome.textContent = "";
        nome.classList.remove("erro");
        nome.classList.add("valido");
        return true;
    }
}
// caracteres para validar email - /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function valildarEmail() {
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!padraoEmail(email.value)) {
        erroEmail.textContent = "Digite um e-mail válido";
        email.classList.add("erro");
        return false;
    } else {
        erroEmail.textContent = ""
        email.classList.remove("erro");
        email.classList.add("valio");
        return true;
    }
}

function validarIdade() {
    const idadeNum = parseInt(idade.value);
    if (idadeNum < 18 || idadeNum > 100) {
        erroIdade.textContent = "A idade deve estar entre 18 e 100";
        idade.classList.add("erro");
        return false;
    } else {
        erroIdade.textContent = "";
        idade.classList.remove("erro");
        idade.classList.add("valido");
        return true;
    }
}

// tamanho da senha - min 8 digitos 
function validarSenha() {
    if (senha.value.length < 8) {
        erroSenha.textContent = "A senha deve ter no minimo 8 caracteres";
        senha.classList.add("erro");
        return false;
    } else {
        erroSenha.textContent = "";
        senha.classList.remove("erro");
        senha.classList.add("valido");
        return true;
    }
}
form.addEventListener("submit", function (evevt) {
    evevt.preventDefault();

    const nomeValido = validarNome();
    const emailValido = valildarEmail();
    const idadeValida = validarIdade();
    const senhaValida = validarSenha();

    if (nomeValido && emailValido && idadeValida && senhaValida) {
        alert("Cadastro realizado com sucesso");
        form.reset();

        document.querySelectorAll("input").forEach(campo => campo.classList.remove("valido"));
    } else {
        alert("Por favor, corrija os erros antes de enviar.");
    }
});
nome.addEventListener("blur", validarNome);
email.addEventListener("blur", valildarEmail);
idade.addEventListener("blur", validarIdade);
senha.addEventListener("blur", validarSenha);

try{
    valildarEmail();
}catch (erro){
    console.log("Ocorreu um erro", erro);
}