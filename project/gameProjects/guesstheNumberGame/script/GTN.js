document.addEventListener('DOMContentLoaded', function () {
    let originalNumber;
    let guesses;
  
    function startNewGame() {
      originalNumber = Math.floor(Math.random() * 100) + 1;
      guesses = 0;
      document.getElementById('guessCounter').innerText = 'Guesses: 0';
      document.getElementById('result').innerText = '';
    }
  
    startNewGame();
  
    document.getElementById('guessButton').addEventListener('click', function () {
      const guessedNumber = parseInt(document.getElementById('guessInput').value);
      if (!isNaN(guessedNumber)) {
        guesses++;
        document.getElementById('guessCounter').innerText = `Guesses: ${guesses}`;
        const difference = Math.abs(originalNumber - guessedNumber);
        if (difference === 0) {
          document.getElementById('result').innerText = 'Congratulations! You guessed the correct number!';
        } else {
          let message = `Try again! `;
          if (difference <= 10) {
            message += `You are close!`;
          } else {
            message += `You are far!`;
          }
          document.getElementById('result').innerText = message;
        }
      } else {
        document.getElementById('result').innerText = 'Please enter a valid number.';
      }
    });
  
    document.getElementById('playAgainButton').addEventListener('click', startNewGame);
  });
  