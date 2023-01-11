/*
for (let i=0; i<10001; i++) {
   let teste = document.querySelector('.teste');
   teste.innerHTML += i + ", "
}
*/

/*
var ano = new Date().getFullYear()


for (let i = ano; i >= 1900; i-- ) {
    let ano = document.querySelector('#ano');
    ano.innerHTML += "<option value= '"+i+"'>" + i + "</option>";
}
*/

const carros =  ["Gol", "Fusca", "Brasília", "Del Rey", "Celta"];
var tamanho = carros.length;

for(let i=0; i < tamanho; i++) {
    let teste = document.querySelector('.teste');
    teste.innerHTML += carros[i] + " - " ; 
}

for (let i = 50; i >= 1; i--) {
    let ano = document.querySelector('#ano');
    ano.innerHTML += "<option value = '"+i+"'>" + i + "</option>"
}