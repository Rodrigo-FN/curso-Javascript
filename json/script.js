/*
// Objeto carro
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.6", "1.4", "1.0"]
}

// CONVERTEU PARA TEXTO JSON
let texto = JSON.stringify(carro);

// COLOCOU O TEXTO NO NOSSO HTML
 var area = document.querySelector('#area');
 area.innerHTML = texto;

 // CONVERTEMOS TEXTO EM OBJETO
 let obj = JSON.parse(texto);

 // PEGAMOS UM VALOR DESTE OBJETO
 console.log(obj.motor[1]);
 */

 function buscarCEP(){
    let campoTexto = document.querySelector('#cep');
    let input = campoTexto.value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', `https://viacep.com.br/ws/${input}/json/`);
    ajax.send();

    ajax.onload = function () {
        //let input = document.querySelector('#texto');
        //input.innerHTML = this.responseText;

        // TRANSFORMEI O TEXTO EM OBJETO
        let obj = JSON.parse(this.responseText);

        // AQUI PEGUEI OS VALORES QUE EU QUERIA
        let cepp = obj.cep;
        let localidade1 = obj.localidade;
        let uff = obj.uf;

        let input = document.querySelector('#texto');
        input.innerHTML = `CEP: ${cepp}</br> Localidade: ${localidade1}<br/> UF: ${uff}`;
    }
 }

 