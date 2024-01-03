'use strict'
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    if (playerScore === 5) {
      celebrate();
      endGame('You win! confetti celebration!');
    }
    return 'You win!';
  } else {
    computerScore++;
    if (computerScore === 5) {
      endGame('You lose! Try again?');
    }
    return 'You lose!';
  }
}

function updateScoreboard() {
  document.getElementById('playerScore').textContent = `Player: ${playerScore}`;
  document.getElementById('computerScore').textContent = `Computer: ${computerScore}`;
}

function makeChoice(playerChoice) {
  const compChoice = computerChoice();
  const result = determineWinner(playerChoice, compChoice);

  document.getElementById('result').innerHTML = `You chose ${playerChoice}. Computer chose ${compChoice}. ${result}`;
  updateScoreboard();
}

function celebrate() {
  const confettiContainer = document.getElementById('confetti-container');
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confettiContainer.appendChild(confetti);
  }
}

function clearConfetti() {
  const confettiContainer = document.getElementById('confetti-container');
  confettiContainer.innerHTML = '';
}

function endGame(message) {
  document.getElementById('result').textContent = message;

  // Disable buttons
  document.querySelectorAll('.choice').forEach(button => {
    button.disabled = true;
  });

  // Show Try Again button with confetti
  const tryAgainButton = document.getElementById('tryAgainButton');
  tryAgainButton.style.display = 'block';
  tryAgainButton.addEventListener('click', resetGame);

  celebrate();
  setTimeout(clearConfetti, 2000); // Clear confetti after 2 seconds
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScoreboard();

  // Enable buttons
  document.querySelectorAll('.choice').forEach(button => {
    button.disabled = false;
  });

  // Hide Try Again button
  const tryAgainButton = document.getElementById('tryAgainButton');
  tryAgainButton.style.display = 'none';

  document.getElementById('result').textContent = '';
}
