function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  while (true) {
    const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;
    if (userGuess < randomNumber) {
      console.log("Too low, guess again");
    } else if (userGuess > randomNumber) {
      console.log("Too high, guess again");
    } else {
      console.log(`Correct! It took you ${attempts} attempts to guess the correct number.`);
      break;
    }
  }
}
guessNumber();
