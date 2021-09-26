const tela = document.getElementById('tela');

function montarTela() {
    let bloco = document.createElement('div');
    bloco.setAttribute('class', 'bloco');
    tela.appendChild(bloco)
}

for (let i = 0; i < 200; i++) {
    montarTela()
}