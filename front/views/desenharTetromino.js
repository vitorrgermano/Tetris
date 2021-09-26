function desenharTetromino() {
    padrao.forEach(index => {
    blocos[posicaoInical + index].classList.add('tetromino')
    })
}
desenharTetromino()