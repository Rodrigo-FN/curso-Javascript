function vereficar() {
    let nome = document.querySelector('#nome').value;

    if (nome == "" || nome == null) {
        let p = document.querySelector('.teste');
        p.innerHTML = `[ERRO] - O campo não pode ser vazio.`;
        p.style.color = "red" 
    }  else {
        let p = document.querySelector('.teste');
        p.innerHTML = `Parabéns tudo certinho!`;
        p.style.color = "blue" 
    }
}