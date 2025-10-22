class TarefaModel {
    constructor() {
        this.tarefas = [];
    }
    adicionarTarefa(texto) {
        if (texto.trim() !== "") {
            this.tarefas.push(texto);
        }
    }
    getTarefas() {
        return this.tarefas;
    }
}