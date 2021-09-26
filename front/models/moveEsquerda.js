function moveEsquerda(){
    apagarTetromino();
    const fimDaTela = inicioTetromino.some(index => (posicaoInicial + index) % largura === 0 );
    if(!fimDaTela) posicaoInicial -= 1;
    if(inicioTetromino.some(index => blocos[posicaoInicial + index].classList.contains('final'))){
        posicaoInicial += 1 
    }
    desenharTetromino()
}