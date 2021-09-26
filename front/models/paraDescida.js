function paraDescida() {
    if (inicioTetromino.some(index => blocos[posicaoInicial + index + largura].classList.contains('final'))) {
        inicioTetromino.forEach(element => blocos[posicaoInicial + element].classList.add('final'));
        numAleatorio = aleatorio()
        inicioTetromino = tetrominos[numAleatorio][rotacaoInicial];
        posicaoInicial = 4;
        desenharTetromino()
    }
}

document.getElementById