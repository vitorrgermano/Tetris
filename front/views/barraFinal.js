function barraFinal() {
    let bloco = document.createElement('div');
    bloco.setAttribute('class', 'final');
    tela.appendChild(bloco)
}

for (let i = 0; i < 10; i++) {
    barraFinal()
}