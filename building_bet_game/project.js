//deposit money into the machine
//Determine the number of line to bet on
//collect the bet amount
//spin the machine
//check if the user won
//give the user their winning
//play again
//

const prompt = require("prompt-sync")();

const deposit = () => {
	while (true) {
		const depositAmount = prompt("Enter a deposit amount: ");
		const numberDepositAmount = parseFloat(depositAmount);

		if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
			console.log("Invalid deposit amount, try again.");
		} else {
			return numberDepositAmount;
		}
	}
};

const getNumberOfLines = () => {
	while (true) {
		const lines = prompt("Enter the number of lines to bet on ()1-3): ");
		const numberOfLines = parseFloat(lines);

		if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
			console.log("Invalid number of lines, try again.");
		} else {
			return numberOfLines;
		}
	}
};

const getBet = (balance) => {
	while (true) {
		const bet = prompt("enter the total bet: ");
		const numberBet = parseFloat(bet);

		if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance) {
			console.log("invalid bet, try again.");
		} else {
			return numberBet;
		}
	}
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);
