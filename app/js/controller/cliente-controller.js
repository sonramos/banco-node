class ClienteController {
    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCPF = document.querySelector("#cpf");
        this.inputNumeroConta = document.querySelector("#numero-conta");
        this.clientes = new Clientes();
        this.contas = new Contas();
    }
    inserir(evento) {
        evento.preventDefault();
        let novoCliente;
        let contaCliente = this.contas.pesquisar(this.inputNumeroConta.value);
        if (contaCliente === undefined) {
            contaCliente = new Conta(this.inputNumeroConta.value);
        }
        novoCliente = new Cliente(this.inputNome.value, this.inputCPF.value, contaCliente);
        this.clientes.inserir(novoCliente);
        this.contas.inserir(contaCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    // inserirClienteManual(novoCliente: Cliente){
    //     this.clientes.inserir(novoCliente);
    //     this.inserirClienteNoHTML(novoCliente);
    //     console.log('Inserido com sucesso');
    // }
    listar() {
        return this.clientes.listar().forEach(cliente => this.inserirClienteNoHTML(cliente));
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.contas.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
