var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
  // Start the game when a key is pressed
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  } else {
    startOver();
  }
});

$(".btn").click(function() {
  // Handle user button clicks
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
  // Check if the user's answer is correct
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Correct");
    // If the user has completed the current level, move to the next level
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    // If the user's answer is incorrect, end the game
    playSound("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
  }
}

function nextSequence() {
  // Generate the next sequence of colors
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  // Add animation to the pressed button
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  // Play the sound associated with a color
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  // Reset the game to the initial state
  console.log("starting Over");
  level = 0;
  gamePattern = [];
  started = false;
  $("#level-title").text("Level 0");
  nextSequence();
}