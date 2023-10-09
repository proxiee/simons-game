# simons-game (The URL is for the website is provided)
Simon is a classic memory game where players must repeat a sequence of colors and sounds.
The game starts with a single color and sound, and each round adds a new one.
Players must remember and repeat the entire sequence correctly to advance.
The game gets progressively harder as the sequence gets longer.


In the Javascript file - 
- When a key is pressed, the game starts by calling the `nextSequence()` function. If the game has already started, the `startOver()` function is called to reset the game.
- When a button is clicked, the color of the button is added to the `userClickedPattern` array. The `playSound()` function is called to play a sound associated with the color, and the `animatePress()` function is called to add an animation to the button. The `checkAnswer()` function is then called to check if the user's answer is correct.
- The `checkAnswer()` function compares the user's answer with the correct answer stored in the `gamePattern` array. If the answer is correct, the game moves to the next level. If the answer is incorrect, the game ends and the `startOver()` function is called.
- The `nextSequence()` function generates the next sequence of colors. It updates the level, displays the level on the screen, generates a random number to select a color from the `buttonColours` array, adds the color to the `gamePattern` array, and displays the color on the screen with a fade-in and fade-out effect.
- The `animatePress()` function adds a CSS class to the button to create a pressed effect, and then removes the class after a short delay.
- The `playSound()` function plays a sound file associated with a color.
- The `startOver()` function resets the game to the initial state by resetting the level, clearing the `gamePattern` array, and calling `nextSequence()`.
