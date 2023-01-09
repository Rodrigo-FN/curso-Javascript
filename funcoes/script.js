// FUNÇÃO DE SOMA
function soma(valor1, valor2) {
    return valor1 + valor2;
}


let total = soma(20,50);
alert(total);


// FUNÇÃO DE COTAÇÃO DO DOLAR 
function realParaDollar (real, cotacaoDolar) {
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08;

var cambio = realParaDollar (valorReal, cotacao);
alert(`O valor de $${valorReal} dollar em real é de R$${cambio}!`);


function alertHello() {
    alert ('Olá pessoal!')
}

// FUNÇÃO DE TEMPERATURA
function paraCelsius(valorFahrenheit) {
    return (5/9) * (valorFahrenheit - 32);
}

let x = paraCelsius (77);
document.write(`A temperatura é de ${x} graus Cesius. `);

function minhaFuncao() {
    let x = 2; // funciona como '2' apenas dentro da função
}
