/* Scripting for Tic Tac Toe: */

const Prompting = document.querySelector("#Prompting");
const TicTacToeBoard = document.querySelector("#TicTacToeBoard");
const TicTacToeSquareOne = document.querySelector("#TicTacToeSquareOne");
const TicTacToeSquareTwo = document.querySelector("#TicTacToeSquareTwo");
const TicTacToeSquareThree = document.querySelector("#TicTacToeSquareThree");
const TicTacToeSquareFour = document.querySelector("#TicTacToeSquareFour");
const TicTacToeSquareFive = document.querySelector("#TicTacToeSquareFive");
const TicTacToeSquareSix = document.querySelector("#TicTacToeSquareSix");
const TicTacToeSquareSeven = document.querySelector("#TicTacToeSquareSeven");
const TicTacToeSquareEight = document.querySelector("#TicTacToeSquareEight");
const TicTacToeSquareNine = document.querySelector("#TicTacToeSquareNine");


function StartGame() {
	const PickSides = document.createElement("p");
	const X = document.createElement("button");
	const O = document.createElement("button");
	const CurrentTurn = document.createElement("p");
	const Winner = document.createElement("p");
	const Draw = document.createElement("p");
	const Reset = document.createElement("button");


	let Turn;


	function MovesFirst(e) {
		Turn = e.target.textContent;

		Prompting.removeChild(PickSides);
		Prompting.removeChild(X);
		Prompting.removeChild(O);

		CurrentTurn.textContent = `${Turn}'s turn`;
		Prompting.appendChild(CurrentTurn);
		TicTacToeBoard.addEventListener("click", TicTacToeMove);
	}

	function TicTacToeMove(e) {
		if (e.target.textContent === "") {
			if (Turn === "X" || Turn === "O") {
				e.target.textContent = Turn;
				CheckForWin();
				CheckForDraw();
				if (Turn === "X") {
					Turn = "O";
				} else {
					Turn = "X";
				}
				CurrentTurn.textContent = `${Turn}'s turn`;
			}
		}
	}

	function CheckForWin() {
		if ((TicTacToeSquareOne.textContent === Turn && TicTacToeSquareTwo.textContent === Turn && TicTacToeSquareThree.textContent === Turn)
			|| (TicTacToeSquareFour.textContent === Turn && TicTacToeSquareFive.textContent === Turn && TicTacToeSquareSix.textContent === Turn)
			|| (TicTacToeSquareSeven.textContent === Turn && TicTacToeSquareEight.textContent === Turn && TicTacToeSquareNine.textContent === Turn)
			|| (TicTacToeSquareOne.textContent === Turn && TicTacToeSquareFour.textContent === Turn && TicTacToeSquareSeven.textContent === Turn)
			|| (TicTacToeSquareTwo.textContent === Turn && TicTacToeSquareFive.textContent === Turn && TicTacToeSquareEight.textContent === Turn)
			|| (TicTacToeSquareThree.textContent === Turn && TicTacToeSquareSix.textContent === Turn && TicTacToeSquareNine.textContent === Turn)
			|| (TicTacToeSquareOne.textContent === Turn && TicTacToeSquareFive.textContent === Turn && TicTacToeSquareNine.textContent === Turn)
			|| (TicTacToeSquareSeven.textContent === Turn && TicTacToeSquareFive.textContent === Turn && TicTacToeSquareThree.textContent === Turn)) {
			TicTacToeBoard.removeEventListener("click", TicTacToeMove);
			Prompting.removeChild(CurrentTurn);
			Winner.textContent = `${Turn} wins!`;
			Prompting.appendChild(Winner);
			Prompting.appendChild(Reset);
			Reset.addEventListener("click", ResetAfterWin);
		}
	}

	function CheckForDraw() {
		if (TicTacToeSquareOne.textContent !== ""
			&& TicTacToeSquareTwo.textContent !== ""
			&& TicTacToeSquareThree.textContent !== ""
			&& TicTacToeSquareFour.textContent !== ""
			&& TicTacToeSquareFive.textContent !== ""
			&& TicTacToeSquareSix.textContent !== ""
			&& TicTacToeSquareSeven.textContent !== ""
			&& TicTacToeSquareEight.textContent !== ""
			&& TicTacToeSquareNine.textContent !== "") {
			TicTacToeBoard.removeEventListener("click", TicTacToeMove);
			Prompting.removeChild(CurrentTurn);
			Prompting.appendChild(Draw);
			Prompting.appendChild(Reset);
			Reset.addEventListener("click", ResetAfterDraw);
		}
	}

	function ResetAfterWin() {
		Prompting.removeChild(Winner);
		Prompting.removeChild(Reset);
		StartGame();
	}

	function ResetAfterDraw() {
		Prompting.removeChild(Draw);
		Prompting.removeChild(Reset);
		StartGame();
	}


	TicTacToeSquareOne.textContent = "";
	TicTacToeSquareTwo.textContent = "";
	TicTacToeSquareThree.textContent = "";
	TicTacToeSquareFour.textContent = "";
	TicTacToeSquareFive.textContent = "";
	TicTacToeSquareSix.textContent = "";
	TicTacToeSquareSeven.textContent = "";
	TicTacToeSquareEight.textContent = "";
	TicTacToeSquareNine.textContent = "";

	PickSides.textContent = "Who moves first?:";
	Prompting.appendChild(PickSides);

	X.textContent = "X";
	Prompting.appendChild(X);
	X.addEventListener("click", MovesFirst);

	O.textContent = "O";
	Prompting.appendChild(O);
	O.addEventListener("click", MovesFirst);

	Draw.textContent = "It's a draw!";

	Reset.textContent = "Reset";
}


window.addEventListener("load", StartGame);
