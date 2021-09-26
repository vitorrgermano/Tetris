    const largura = 10;

    const tetrominoL = [
        [1, 2, largura + 1, largura * 2 + 1],
        [largura, largura + 1, largura + 2, largura * 2 + 2],
        [1, largura + 1, largura * 2, largura * 2 + 1],
        [largura, largura * 2, largura * 2 + 1, largura * 2 + 2]
    ];

    const tetrominoZ = [
        [1, 2, largura, largura + 1],
        [0, largura, largura + 1, largura * 2 + 1],
        [1, 2, largura, largura + 1],
        [0, largura, largura + 1, largura * 2 + 1]
    ];

    const tetrominoT = [
        [1, largura, largura + 1, largura + 2],
        [1, largura + 1, largura + 2, largura * 2 + 1],
        [largura, largura + 1, largura + 2, largura * 2 + 1],
        [1, largura, largura + 1, largura * 2 + 1]
    ];

    const tetrominoO = [
        [0, 1, largura, largura + 1],
        [0, 1, largura, largura + 1],
        [0, 1, largura, largura + 1],
        [0, 1, largura, largura + 1]
    ];

    const tetrominoI = [
        [1, largura + 1, largura * 2 + 1, largura * 3 + 1],
        [largura, largura + 1, largura + 2, largura + 3],
        [1, largura + 1, largura * 2 + 1, largura * 3 + 1],
        [largura, largura + 1, largura + 2, largura + 3]
    ];    
    const tetrominos = [tetrominoI, tetrominoL, tetrominoO, tetrominoT, tetrominoZ];