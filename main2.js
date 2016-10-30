// will contain all of the logic for the app
var inquirer = require('inquirer');

var Display = require('./letter.js');

console.log(Display);

var randomWord

function gameInit () {
	inquirer.prompt([{
		name: 'play',
		message: 'Would you like to play hangman?'
	// },{
	// 	name: 'lenght',
	// 	message: 'What is the max length of the words you would like to guess?'
	}]).then(function(answer) {
		if (answer.play == 'no') {
			console.log('I wish you would play');
		} else {
			randomWord = require('./game.js');
			console.log('Hangman is fun!');
			console.log('Here is your first word');
			console.log(randomWord);
			var randomWordBlankArray = new Display(randomWord);
			randomWordBlankArray.blankArray();
			game();
		}
	});
}

function game () {
	// console.log(randomWord);
	inquirer.prompt([{
		name: 'letter',
		message: 'Choose a letter'
	}]).then(function(answer) {
		console.log(answer.letter);
	});
	// game(); endless loop
}

gameInit();
