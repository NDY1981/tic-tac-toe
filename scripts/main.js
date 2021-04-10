function start() {
    const instructions = document.getElementById("instructions");
    const squareOne = document.getElementById("squareOne");
    const squareTwo = document.getElementById("squareTwo");
    const squareThree = document.getElementById("squareThree");
    const squareFour = document.getElementById("squareFour");
    const squareFive = document.getElementById("squareFive");
    const squareSix = document.getElementById("squareSix");
    const squareSeven = document.getElementById("squareSeven");
    const squareEight = document.getElementById("squareEight");
    const squareNine = document.getElementById("squareNine");

    squareOne.textContent = '';
    squareTwo.textContent = '';
    squareThree.textContent = '';
    squareFour.textContent = '';
    squareFive.textContent = '';
    squareSix.textContent = '';
    squareSeven.textContent = '';
    squareEight.textContent = '';
    squareNine.textContent = '';

    const question = document.createElement('paragraph');
    question.textContent = 'Who moves first?:';
    instructions.appendChild(question);

    const x = document.createElement('button');
    x.textContent = 'X';
    instructions.appendChild(x);

    const o = document.createElement('button');
    o.textContent = 'O';
    instructions.appendChild(o);

    let turn;

    const currentTurn = document.createElement('paragraph');

    x.onclick = function() {
        turn = 'X';

        instructions.removeChild(question);
        instructions.removeChild(x);
        instructions.removeChild(o);

        currentTurn.textContent = `${turn}'s turn`;
        instructions.appendChild(currentTurn);
    }

    o.onclick = function() {
        turn = 'O';

        instructions.removeChild(question);
        instructions.removeChild(x);
        instructions.removeChild(o);

        currentTurn.textContent = `${turn}'s turn`;
        instructions.appendChild(currentTurn);
    }

    function checkForWin() {
        const winner = document.createElement('paragraph');
        const reset = document.createElement('button');
        reset.textContent = 'Reset';
        reset.onclick = function() {
            instructions.removeChild(winner);
            instructions.removeChild(reset);
            start();
        }

        if ((squareOne.textContent === 'X' && squareTwo.textContent === 'X' && squareThree.textContent === 'X')
        || (squareFour.textContent === 'X' && squareFive.textContent === 'X' && squareSix.textContent === 'X')
        || (squareSeven.textContent === 'X' && squareEight.textContent === 'X' && squareNine.textContent === 'X')
        || (squareOne.textContent === 'X' && squareFour.textContent === 'X' && squareSeven.textContent === 'X')
        || (squareTwo.textContent === 'X' && squareFive.textContent === 'X' && squareEight.textContent === 'X')
        || (squareThree.textContent === 'X' && squareSix.textContent === 'X' && squareNine.textContent === 'X')
        || (squareOne.textContent === 'X' && squareFive.textContent === 'X' && squareNine.textContent === 'X')
        || (squareSeven.textContent === 'X' && squareFive.textContent === 'X' && squareThree.textContent === 'X')) {
            instructions.removeChild(currentTurn);
            winner.textContent = 'X wins!';
            instructions.appendChild(winner);
            instructions.appendChild(reset);
            squareOne.removeEventListener('click', move);
            squareTwo.removeEventListener('click', move);
            squareThree.removeEventListener('click', move);
            squareFour.removeEventListener('click', move);
            squareFive.removeEventListener('click', move);
            squareSix.removeEventListener('click', move);
            squareSeven.removeEventListener('click', move);
            squareEight.removeEventListener('click', move);
            squareNine.removeEventListener('click', move);
        } else if ((squareOne.textContent === 'O' && squareTwo.textContent === 'O' && squareThree.textContent === 'O')
        || (squareFour.textContent === 'O' && squareFive.textContent === 'O' && squareSix.textContent === 'O')
        || (squareSeven.textContent === 'O' && squareEight.textContent === 'O' && squareNine.textContent === 'O')
        || (squareOne.textContent === 'O' && squareFour.textContent === 'O' && squareSeven.textContent === 'O')
        || (squareTwo.textContent === 'O' && squareFive.textContent === 'O' && squareEight.textContent === 'O')
        || (squareThree.textContent === 'O' && squareSix.textContent === 'O' && squareNine.textContent === 'O')
        || (squareOne.textContent === 'O' && squareFive.textContent === 'O' && squareNine.textContent === 'O')
        || (squareSeven.textContent === 'O' && squareFive.textContent === 'O' && squareThree.textContent === 'O')) {
            instructions.removeChild(currentTurn);
            winner.textContent = 'O wins!';
            instructions.appendChild(winner);
            instructions.appendChild(reset);
            squareOne.removeEventListener('click', move);
            squareTwo.removeEventListener('click', move);
            squareThree.removeEventListener('click', move);
            squareFour.removeEventListener('click', move);
            squareFive.removeEventListener('click', move);
            squareSix.removeEventListener('click', move);
            squareSeven.removeEventListener('click', move);
            squareEight.removeEventListener('click', move);
            squareNine.removeEventListener('click', move);
        }
    }

    function checkForDraw() {
        if (squareOne.textContent !== ''
        && squareTwo.textContent !== ''
        && squareThree.textContent !== ''
        && squareFour.textContent !== ''
        && squareFive.textContent !== ''
        && squareSix.textContent !==''
        && squareSeven.textContent !== ''
        && squareEight.textContent !== ''
        && squareNine.textContent !=='') {
            instructions.removeChild(currentTurn);
            const draw = document.createElement('paragraph');
            draw.textContent = "It's a draw!";
            instructions.appendChild(draw);
            const reset = document.createElement('button');
            reset.textContent = 'Reset';
            reset.onclick = function() {
                instructions.removeChild(draw);
                instructions.removeChild(reset);
                start();
            }
            instructions.appendChild(reset);
            squareOne.removeEventListener('click', move);
            squareTwo.removeEventListener('click', move);
            squareThree.removeEventListener('click', move);
            squareFour.removeEventListener('click', move);
            squareFive.removeEventListener('click', move);
            squareSix.removeEventListener('click', move);
            squareSeven.removeEventListener('click', move);
            squareEight.removeEventListener('click', move);
            squareNine.removeEventListener('click', move);
        }
    }

    function move(e) {
        if (e.target.textContent === '') {
            if (turn === 'X' || turn === 'O') {
                e.target.textContent = turn;
                if (turn === 'X') {
                    turn = 'O';
                } else {
                    turn = 'X';
                }
                currentTurn.textContent = `${turn}'s turn`;
            }
        }
        checkForWin();
        checkForDraw();
    }

    squareOne.addEventListener('click', move);

    squareTwo.addEventListener('click', move);

    squareThree.addEventListener('click', move);

    squareFour.addEventListener('click', move);

    squareFive.addEventListener('click', move);

    squareSix.addEventListener('click', move);

    squareSeven.addEventListener('click', move);

    squareEight.addEventListener('click', move);

    squareNine.addEventListener('click', move);
}

start();