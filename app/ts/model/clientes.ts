class Clientes {
    public clientes:Array<Cliente>;
    constructor(){
        this.clientes = Array();
    }

    inserir(cliente: Cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf: string){
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const clienteIdx = this.clientes.indexOf(clienteARemover);
            if (clienteIdx >= 0) {
                this.clientes.splice(clienteIdx, 1);
            }
        }
        return clienteARemover;
    }
    pesquisar(cpf: string){
        return this.clientes.find(cliente => cliente.cpf === cpf); 
    }
    listar() {
        return this.clientes;
    }
}   