/*  setTimeout

function ativarContagem() {
    let tempo = document.querySelector('.tempo');
    tempo.innerHTML = "Começou a contar!";

    // Ativa a função apenas 1 vez quando der o tempo especificado
    temp = setTimeout(function(){ 
        document.body.style.background = "black";
        alert("5 Segundos")
    }, 5000);

}

function pararContagem() {
    let tempo = document.querySelector('.tempo');
    tempo.innerHTML = "Parou a contagem!"
    clearTimeout(temp);
    
}
*/

function ativarContagem() {
    temp = setInterval(function(){
        var cronometro = document.querySelector('.tempo').innerHTML;
        var soma = parseInt(cronometro) - 1;
        
        if (soma === 0) {
            pararContagem()
        }

        var tempo = document.querySelector('.tempo');
        tempo.innerHTML = soma;
    }, 1000)
}


function pararContagem() {
    clearInterval(temp);

}


