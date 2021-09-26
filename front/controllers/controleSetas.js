document.addEventListener('keyup', 
function controleSetas(e) {
    if(e.keyCode === 37) moveEsquerda();
    // if(e.keyCode === 38) rotacao();
    if(e.keyCode === 39) moveDireita();
    if(e.keyCode === 40) descida();
})