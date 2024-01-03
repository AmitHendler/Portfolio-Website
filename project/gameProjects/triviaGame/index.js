'use strict'
const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars'
    },
    {
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale'
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'Japan', 'South Korea', 'Vietnam'],
        correctAnswer: 'Japan'
      },
      {
        question: 'Who wrote "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
        correctAnswer: 'William Shakespeare'
      }
    ];
  
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById('question-container');
  const optionsContainer = document.getElementById('options-container');
  const nextButton = document.getElementById('next-button');
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
  
    questionContainer.innerText = currentQuizData.question;
    optionsContainer.innerHTML = '';
  
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.className = 'option';
      optionElement.innerText = option;
      optionElement.addEventListener('click', () => checkAnswer(option));
      optionsContainer.appendChild(optionElement);
    });
  }
  
  function checkAnswer(userAnswer) {
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    if (userAnswer === correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    questionContainer.innerText = `Your Score: ${score} out of ${quizData.length}`;
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
  }
  
  loadQuestion();
  
  nextButton.addEventListener('click', () => {
    currentQuestion++;
    loadQuestion();
  });

  // ... (previous code)

const startAgainButton = document.getElementById('start-again-button');

function resetGame() {
  currentQuestion = 0;
  score = 0;
  nextButton.style.display = 'block';
  startAgainButton.style.display = 'none';
  loadQuestion();
}

function showResults() {
  questionContainer.innerText = `Your Score: ${score} out of ${quizData.length}`;
  optionsContainer.innerHTML = '';
  nextButton.style.display = 'none';
  startAgainButton.style.display = 'block';
}

loadQuestion();

nextButton.addEventListener('click', () => {
  currentQuestion++;
  loadQuestion();
});

startAgainButton.addEventListener('click', resetGame);


