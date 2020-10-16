const args = process.argv;
const user = args[args.length -1];
const mes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

const hoje = new Date();

console.log(`Olá ${user}, hoje é dia ${hoje.getDate()}, de ${mes[hoje.getMonth()]}`);