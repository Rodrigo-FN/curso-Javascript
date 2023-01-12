
class Carro {  //   Classes -> Sempre a primeira letra maiúscula
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;  // Classe sempre declaradas antes das chamadas
        this.ano = valor3;
    }
    buzina() {
        return this.modelo +" buzinou: Biiiiiiiiiiiiiiiiiiiii";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "gol", 2009);
console.log(uno.buzina());
console.log(gol);
gol.ano = 2014;

console.log(gol) // trocar valor