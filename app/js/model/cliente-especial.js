class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = new Clientes();
    }
    get dependentes() {
        return this._dependentes.listar();
    }
    adicionaDependente(cliente) {
        this._dependentes.inserir(cliente);
    }
    removerDependente(cpf) {
        this._dependentes.remover(cpf);
    }
}
