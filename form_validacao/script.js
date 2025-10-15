const form = document.getElementById("formFeedback");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const textareaComentario = document.getElementById("comentario");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const comentario = textareaComentario.value.trim();

    //validação dos campos
    if (nome === "") {
        mensagem.textContent = "Por favor, digite seu nome";
        mensagem.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        mensagem.textContent = "Email inválido. Inclua '@'";
        mensagem.style.color = "red";
        return;
    }

    if (comentario.length < 10) {
        mensagem.textContent = "Comentário muito curto. Escreva pelo menos 10 caracteres.";
        mensagem.style.color = "red";
        return;
    }

    //Todos os campos válidos
    mensagem.textContent = "Obrigado pelo feedback";
    mensagem.style.color = "green";

    form.reset();
});