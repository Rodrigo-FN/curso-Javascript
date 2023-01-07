/* Vamos entender Variáveis
    Variáveis são "recepientes" onde podemos armazernar informações que podem varia, ou seja, podem ter qualquer tipo de valor.

    No JavaScript temos 3 palavras para declarar variáveis:

    -> var ---> permite reedeclaração de variável

    -> let ---> Não permite reedeclaração de variável

    -> const ---> NUNCA MUDA A VARIÁVEL
*/ 

let a, b, c, nome, sobrenome, nome_sobrenome, idade;  //Declarações de VARIÁVEIS
let txnome = document.querySelector('#txnome');;
// ATRINUIÇÕA DOS VALORES
a = 5; 
b = 6; 
c = 7;
nome = 'Rodrigo';
sobrenome = 'Faria';
nome_sobrenome = nome +' '+ sobrenome;
idade = 26;



var texto = document.querySelector('#texto');

texto.innerHTML = `Olá mundo!</br>`;  // Usado para interação
texto.innerHTML += `Meu Primeiro texto em <b>JS</b>.`;

//alert('Oi isso é um alerta.');

console.log('Oi isso é um console.log.'); // Usado para resultado

txnome.innerHTML = `A idade de <b>${nome_sobrenome}</b> é de <b>${idade}</b> anos.`;


let x = 10; // aqui é 10

{
    let x = 2; // aqui é 2  //Usado para não ter repetição de variável
                            // PODE MUDAR A VARIÁVEL DENTRO DE OUTRO BLOCO
}

// aqui é 10
document.write(x)
document.write('<br>')



var v = 10; // aqui é 10

{
    var v = 2; // aqui é 2   // A VARIÁVEL PODE SER REATRIBUIDA EM QUALQUER PARTE DO ESCOPO.
}

// aqui é 2
document.write(v)
document.write('<br>')


const Y = 10; // aqui é 10

{
    let Y = 2; // aqui é 10,  NÃO MUDA
}

// aqui é 10
document.write(Y)