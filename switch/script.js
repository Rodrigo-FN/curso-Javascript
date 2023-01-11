function verificaCor() {
    let cor = document.querySelector('#cor').value;
    
    cor =  cor.toLowerCase();


    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue"
            break 

        case "vermelho":
            document.body.style.backgroundColor = "red"
            break

        case "verde": 
            document.body.style.backgroundColor = "green"
            break
        
        case "preto": 
            document.body.style.backgroundColor = "black"
            break

        default:
            document.querySelector('.teste').innerHTML = `Nenhuma cor disponível para: ${cor}.`
        
    }
}

