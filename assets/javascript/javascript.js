$(document).ready(function() {
var questions = ['Who is Spider-man?', 'What is the Name of Thor&rsquo;s Hammer?', 'S.H.I.E.L.D.&rsquo;s highest ranking agent is', 'Captain America was frozen in which war?', 'The vampire hunter Blade is a:', 'Ghost Rider is known as:', 'What is commonly believe to be The Black Widow&rsquo;s previous occupation before becoming a Russian Spy?', 'Deadpool joined the Weapon X program because:', 'What did Dr. Pym discover that allowed him to change size?', 'Nightcrawler is a member of which team?'];
var answerArray = [['Tony Stark', 'Bruce Banner', 'Peter Parker', 'Gwen Stacy'], ['Mjolnir', 'Jarnbjorn', 'Odinsword', 'Megingjord'], ['Steven Rogers', 'Nick Fury', 'Peter Parker', 'Natalia Romanova'], ['World War I', 'World War II', 'Civil War', 'Cold War'], ['Mutant', 'Human', 'Vampire', 'Half Vampire'], ['The Guardian Devil', 'The Spirit of Hate', 'The Spirit of Vengeance', 'The Red Skull'], ['Ballerina', 'Military Pilot', 'Theif', 'Athlete'], ['He had incurable cancer', 'He was forced to', 'He thought it would be fun', 'He wanted to fight for justice'], ['Gamma Rays', 'Pym Particles', 'Alpha Rays', 'Omega Particles'], ['The X-Men', 'The Fantastic Four', 'The Avengers', 'The Defenders']];
var correctArray = ['Peter Parker', 'Mjolnir', 'Nick Fury', 'World War II', 'Half Vampire', 'The Spirit of Vengeance', 'Ballerina', 'He had incurable cancer', 'Pym Particles', 'The X-Men'];
var gifArray = ['"https://giphy.com/embed/xT1R9MyOQLEB2WY6Oc" width="480" height="300" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/QoNnBvRp5sLSw" width="480" height="259" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/nMr9fNHbF0NMI" width="480" height="270" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/8xHpZTacWUREs" width="480" height="294" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/8cbJFkOpZNaG4" width="480" height="300" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/4fggQ4OuX7dDy" width="480" height="198" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/t02OExEK7a9Jm" width="480" height="274" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/xT0BKpqAaJczduXXJ6" width="480" height="300" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/ZSKfNtVfuGFRm" width="480" height="270" frameBorder="0" class="giphy-embed"', '"https://giphy.com/embed/3oEhmKau7tQJdg9Ss8" width="480" height="300" frameBorder="0" class="giphy-embed"'];

var totalScore = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var answer;
var i = 0;

var counter = 30;
var intervalId;

// Displays Start Screen
startScreen();

// Begins When User Presses 'START GAME'
$('#start-game').click(function(event) {
	questionDisplay();
	countdown();
});

// Brings User Back to the Beginning of the Game
$("body").on("click", "#reset-game", function(event){       
	resetGame();
}); 

// Checks if User Guess is Correct
$("body").on("click", ".answer", function(event){
    answer = $(this).text();
    if(answer === correctArray[i]) {
        
        clearInterval(intervalId);
        correctDisplay();
    } else {  
        clearInterval(intervalId);
        wrongDisplay();
    }
}); 


// Start Screen of Game
function startScreen() {
	$('#content').html('');
	$('#time-bomb').html('<img src="assets/images/giphy.gif">');
	$('#content').append('<h3>Play The Marvel Comic Trivia Game!</h3>');
	$('#content').append('<h5>There Are 10 Questions in the Game.</h5>');
	$('#content').append('<h5>You Will Have 30 Seconds to Answer Each Question.</h5>');
	$('#content').append('<h5>Good Luck!</h5>');
	$('#content').append('<h4 id="start-game">START GAME</h4>');
}

// End Screen of Game
function endScreen() {
	$('#content').html('');
	$('#content').append('<h3>GAME OVER!</h3>');
	$('#content').append('<h5>Correct: ' + correctAnswers + '</h5>');
	$('#content').append('<h5>Incorrect: ' + wrongAnswers + '</h5>');
	$('#content').append('<h5>Total Score: ' + totalScore + '%</h5>');
	$('#content').append('<h4 id="reset-game">PLAY AGAIN</h4>');
}

// Displays the Questions to the User
function questionDisplay() {
	$('#content').html('');
	$('#time-bomb').html();
	$('#time-bomb').html('<img src="assets/images/giphy.gif">');
	$('#time-bomb').append('<span id="timer"></span>');	
	$('#content').append('<h3 class="question">' + questions[i] + '</h3>');
	$('#content').append('<h4 class="answer">' + answerArray[i][0] + '</h4>');
	$('#content').append('<h4 class="answer">' + answerArray[i][1] + '</h4>');
	$('#content').append('<h4 class="answer">' + answerArray[i][2] + '</h4>');
	$('#content').append('<h4 class="answer">' + answerArray[i][3] + '</h4>');
}

// Displays if User Guesses Correctly
function correctDisplay() {
	correctAnswers++;
	totalScore = correctAnswers * 10;
	$('#content').html('');
	$('#content').append('<h3 class="temp">CORRECT! ' + correctArray[i] + '</h3>');
	$('#content').append('<iframe src=' + gifArray[i] + '></iframe>');
	setTimeout(nextDisplay, 4000);
}

// Displays if User Guesses Incorrectly
function wrongDisplay() {
	wrongAnswers++;
	$('#content').html('');
	$('#content').append('<h3 class="temp">WRONG! ' + correctArray[i] + '</h3>');
	$('#content').append('<iframe src=' + gifArray[i] + '></iframe>');
	setTimeout(nextDisplay, 4000);
}

// Displays if User Runs Out of Time
function timedOutDisplay() {
	wrongAnswers++;
	$('#content').html('');
	$('#content').append('<h3 class="temp">TIMES UP! ' + correctArray[i] + '</h3>');
	$('#content').append('<iframe src=' + gifArray[i] + '></iframe>');
	setTimeout(nextDisplay, 4000);
}

// Brings on the Next Question Display and Resets Counter Time 
function nextDisplay() {
	if (i < 9) {
		i++;
		questionDisplay();
		countdown();
		counter = 30;
	} else {
		setTimeout(endScreen, 10900);
	}

}

// Timer Function For Each Question (30sec)
function countdown() {
	intervalId = setInterval(decrement, 1000);
	function decrement() {
	counter--;
	$("#timer").html("<h2>" + counter + "</h2>");
		if (counter === 0) {
			clearInterval(intervalId);
			timedOutDisplay();
		}
	}
}

// Resets the Game Variables and Returns User to Start Screen
function resetGame() {
    i = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    totalScore = 0;
    timedOut = 0;
    counter = 30;
    questionDisplay();
    countdown();
}




});