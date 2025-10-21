const form = document.getElementById("formCadastro");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    let valido = true;
    
    //Validar o nome
    if (!nome.value.trim()) {
        document.getElementById("erroNome").textContent = "O nome é obrigatório";
        nome.style.border = "1px solid red";
        valido = false;
    } else {
        document.getElementById("erroNome").textContent = "";
        nome.style.border = "";
    }
    //Validar Email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !regexEmail.test(email.value)) {
        document.getElementById("erroEmail").textContent = "Email inválido";
        email.style.border = "1px solid red";
        valido = false;
    } else {
        document.getElementById("erroEmail").textContent = "";
        email.style.border = "";
    }
    if(valido) {
        alert("Formulário válido! Cadastro realizado.");
        form.reset();
    } else {
        alert("Corrija os erros antes de enviar");
    }
});