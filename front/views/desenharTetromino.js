function desenharTetromino() {
    inicioTetromino.forEach(index => {
    blocos[posicaoInicial + index].classList.add('class','tetromino');
    })
}

desenharTetromino()