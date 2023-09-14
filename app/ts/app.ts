let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const c2 = new Conta('2', 300);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
const clientes = new Clientes();
const cli1 = new Cliente('João','123.456.789-11',c1);
const cli2 = new Cliente('Maria','223.456.789-11',c2);

clientes.inserir(cli1);
clientes.inserir(cli2);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

console.log(`Lista de clientes:\n${clientes.listar()}`);
console.log(clientes.pesquisar('223.456.789-11'));
console.log(clientes.remover('123.456.789-11'));
console.log(`Lista de clientes:\n${clientes.listar()}`);

