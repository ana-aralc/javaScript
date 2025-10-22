class ContadorModel {
    constructor() { 
        this.valor = 0;
    }
    incrementar() {
        this.valor++;
    }
    decrementar() {
        this.valor--;
    }
    getValor() {
        return this.valor;
    }
}