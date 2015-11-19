var userPoint = 0;
var aiPoint = 0;

var words = ['rock', 'paper', 'scissors'];
function getAISelection() {
    var number = Math.floor(Math.random()* words.length);
    var word = words[number];
    return word;
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    if (userValue == aiValue) {
        return "draw";
    }
    else if (userValue == "rock" && aiValue == "paper") {
        return "ai";
    }
    else if (userValue == "paper" && aiValue == "scissors") {
        return "ai";
    }
    else if (userValue == "scissors" && aiValue == "rock") {
        return "ai";
    }
     else {
    return "user";
    }
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
}

// This function sets the scoreboard with the correct points
function setScore() {
    $('#userPoint').text(userPoint);
    $('#aiPoint').text(aiPoint);
}


// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
        userPoint++;
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
        aiPoint++;
    }
    setScore();
}

// This function runs on page load
$(document).ready(function(){
    $("#rock").click (function(evt) {
      evaluate(evt);
    });
    $("#paper").click (function(evt) {
      evaluate(evt);
    });
    $("#scissors").click (function(evt) {
      evaluate(evt);
    });
  
});