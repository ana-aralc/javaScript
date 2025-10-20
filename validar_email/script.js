const email = document.getElementById("email");
const btnValidar = document.getElementById("btnValidar");
const erroEmail = document.getElementById("erroEmail");

// value.trim - quando recebe o valor atraves de input
btnValidar.addEventListener("click", function () {
   
    if (!email.value.includes("@") || !email.value.includes(".")) {
        erroEmail.textContent = "Email inválido. Inclua '@' e ou o '.'";
    } else {
        erroEmail.textContent = "";
        alert("Email enviado com sucesso");
    }
});
