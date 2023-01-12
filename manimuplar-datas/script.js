// COMANDO BASE PARA PEGAR A DATA
let data = new Date(); 


// PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log(ano)

// PEGAR O MÊS ATUAL - DE 0 ATÉ 11
let mes = data.getMonth();


// MOSTRAR MÊS NO FORMATO ESCRITO
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Mail", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

let mesEscrito = mesesDoAno[data.getMonth()]

console.log(mesEscrito)



// PEGAR DIA DO MÊS - 1 ATÉ 31
let diaMes = data.getDate();
console.log(diaMes)

// PEGAR O DIA DA SEMANA
let diaSemana = data.getDay();

// MOSTRA DIA FORMATO ESCRITO
const diaSemanaEscrito = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

let diaEscrito = diaSemanaEscrito[data.getDay()]
console.log(diaEscrito)

// PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();


// PEGAR OS MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();

// PEGAR SEGUNDOS - DE 0 ATÉ 59
let segundos = data.setSeconds();

//PEGAR MILLISEGUNDOS - DE 0 ATÉ 999
let millisegundos = data.getMilliseconds();

// PEGAR A DATA NO PADRÃO BRASILEIRO - DIA / MÊS / ANO
let dataBR = data.toLocaleDateString('pt-br');


// PEGAR OS VALORES SEPARADOS
 d = new Date();
 diaDoMes = d.getDate();
 mess = d.getMonth() + 1;
 anoo = d.getFullYear();

 function addZero(x) {
    return x < 10? '0' + x : ''+x
 };

 let dataPadraoBR = `${addZero(diaDoMes)} / ${addZero(mess)} / ${anoo}`;

 console.log(dataPadraoBR);

// COMPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2023, 0, 15);

if (hoje > vencimento) {
    console.log('Sua conta está vencida!');
} else {
    console.log('Sua conta está em dia!');
}

// DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2023, 11, 31);

var diferençaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferençaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias)