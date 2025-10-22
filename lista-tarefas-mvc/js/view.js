class TarefaView {
    constructor() {
        this.input = document.getElementById("tarefaInput");
        this.botao = document.getElementById("btnAdicionar");
        this.lista = document.getElementById("listaTarefas");

    }
    renderizar(tarefas) {
        this.lista.innerHTML = "";

        tarefas.forEach((tarefa) => {
            const li = document.createElement("li");
            li.textContent = tarefa;
            this.lista.appendChild(li);
        });
    }
    emAdicionar(callback) {
        this.botao.addEventListener("click", () => {
            callback(this.input.value);
            this.input.value = "";
        });
    }
}
