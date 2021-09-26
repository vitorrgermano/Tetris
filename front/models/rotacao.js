function rotacao() {
    apagarTetromino()
    rotacaoInicial++
    if(rotacaoInicial === 4  ) rotacaoInicial = 0 // 4 = Quantidade de posicoes
    inicioTetromino = tetrominos[numAleatorio][rotacaoInicial];
    desenharTetromino();
}