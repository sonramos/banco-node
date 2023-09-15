class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCPF: HTMLInputElement;
    private inputNumeroConta: HTMLInputElement;

    private clientes: Clientes;
    private contas: Contas;

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector("#nome");
        this.inputCPF = <HTMLInputElement>document.querySelector("#cpf");
        this.inputNumeroConta = <HTMLInputElement>document.querySelector("#numero-conta");

        this.clientes = new Clientes();
        this.contas = new Contas();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente: Cliente;
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

    inserirClienteNoHTML(cliente: Cliente){
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.contas.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}


