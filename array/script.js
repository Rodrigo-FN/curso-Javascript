/*                 //0       //1       //2        //3       //SEMPRE COMEÇA DO 0
const lista = ["arroz", "feijão", "macarrão", "leite"]; //ARRAY LITERAL



//const lista = new Array("arroz", "feijão", "macarrão", "leite");  // Outra forma de ARRAY


document.write(`${lista[0]}, ${lista[1]}, ${lista[2]}, ${lista[3]}.`);

//alert(lista[3])


let x = lista[2];

//alert(x);

console.log(lista);
*/

/*
const pessoa = ["Dimitri", "Teixeira", 30]; // array
document.write(`Seu nome completo é ${pessoa[0]} ${pessoa[1]}, de ${pessoa[2]} anos.</br>`);


//alert(pessoa[3]);

/*const pessoa = {nome:"Dimitri", sobrenome:"Teixeira", idade:30} // OBJETO
document.write(`Seu nome completo é ${pessoa.nome} ${pessoa.sobrenome}, de ${pessoa.idade} anos.`)


alert(Array.isArray(pessoa));  // Vai te dizer se é array ou não
*/

/*
const pessoa = ["Dimitri", "Teixeira", 30];
pessoa.shift(); //shift == remove o primeiro item (índices seram mudados)
pessoa.unshift("Rodrigo"); // unshift == Adiciona um item na primeira posição
pessoa.pop();//  POP == retira o último item
pessoa.push("Brasileiro"); // push == Adicionar item no ARRAY


//delete pessoa[1]; // não altera o campo é fica indefinido


var teste = document.querySelector('.teste')

teste.innerHTML = pessoa.join(" - ") //MÉTODO JOIN == troca os separadores da nossa array

*/
/*
                    // Método Concat
const lista1 = ["arroz", "feijão", "macarrão", "leite"];
const lista2 = ["suco", "refrigerante", "carne"];

const superLista = lista1.concat(lista2); // concat == junta várias arrays

alert(superLista)
*/

                        // Método slice
    
const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Ronaldo", "Tostão", "Neymar", "Ganso"];
const craques = jogadores.slice(2,5); //slice == divide array

document.write(craques)

                        // Método sort

const jogOredem = jogadores.sort();

document.write(jogOredem);  // sort == Ordem Alfabetica

jogadores.sort();
jogadores.reverse(); // reverse = Ordem 'Desalfabetica' kkkkkkkk

const numeros = [40, 100, 200, 1, 6, 245];
numeros.sort(function(a,b){return a-b}); // Ordem cresente, (b-a = ordem decresente)

function MaiorNumero(array) {
    return Math.max.apply(null, array); // Função para pegar o (MAIOR) número
}

function MaiorNumero(array) {
    return Math.min.apply(null, array); // Função para pegar o (MENOR) número
}
document.write(numeros);

const maiores20 = numeros.filter(filtragem);

function filtragem(value, index, array) { // Função para Filtragem de números
    return value > 20;
}

