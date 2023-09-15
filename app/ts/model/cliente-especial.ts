class ClienteEspecial extends Cliente {

    private _dependentes: Clientes;
    constructor(nome: string, cpf: string, conta: Conta) {
        super(nome, cpf, conta);
        this._dependentes = new Clientes();
    }

    get dependentes(){
        return this._dependentes.listar();
    }

    adicionaDependente(cliente: Cliente){
        this._dependentes.inserir(cliente);
    }

    removerDependente(cpf: string){
        this._dependentes.remover(cpf);
    }
}