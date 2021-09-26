function apagarTetromino() {
    inicioTetromino.forEach(index => {
    blocos[posicaoInicial + index].classList.remove('class','tetromino');
    })
}