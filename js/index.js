const questions = [
  {
    question: "Where was Harry Potter born?",
    options: ["Madrid", 
    "Rome", 
    "Godric's Hollow", 
    "Paris"],
    correctAnswer: "Godric's Hollow"
  },
  {
    question: "Who wrote the novel 'War and Peace'?",
    options: ["Leo Tolstoy", 
    "Fyodor Dostoevsky", 
    "Anton Chekhov", 
    "Ivan Turgenev"],
    correctAnswer: "Leo Tolstoy"
  },
  {
    question: "Who is Harry Potter's godfather?",
    options: ["Remus Lupin", 
    "Sirius Black", 
    "Albus Dumbledore", 
    "Severus Snape"],
    correctAnswer: "Sirius Black"
  },
  {
    question: "What is the capital of France?",
    options: ["Madrid", 
    "Rome", 
    "London", 
    "Paris"],
    correctAnswer: "Paris"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", 
    "Pablo Picasso", 
    "Vincent van Gogh", 
    "Michelangelo"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "What year did the Titanic sink?",
    options: ["1912", 
    "1915", 
    "1917", 
    "1919"],
    correctAnswer: "1912"
  },
  {
    question: "Who isthe father of modern physics?",
    options: ["Isaac Newton", 
    "Albert Einstein", 
    "Galileo Galilei", 
    "Niels Bohr"],
    correctAnswer: "Albert Einstein"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", 
    "Jupiter", 
    "Venus", 
    "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What does the following code output? console.log(typeof NaN);",
    options: ["'number'", "'string'", "'NaN'", "'undefined'"],
    correctAnswer: "'number'"
  },
  {
    question: "What does the following code do? function foo() { return foo; } console.log(foo());",
    options: ["Throws an error", "Returns undefined", "Returns null", "Returns the function itself"],
    correctAnswer: "Returns the function itself"
  }
];

function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleQuestions(questions);

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const answerButtons = document.querySelectorAll('.answer');

answerButtons.forEach((button, index) => {
  button.addEventListener('click', () => checkAnswer(index));
});

function showQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionContainer.textContent = currentQuestionData.question;

  currentQuestionData.options.forEach((option, index) => {
    answerButtons[index].textContent = option;
  });
}

function checkAnswer(selectedIndex) {
  if (currentQuestion >= questions.length) {
    endQuiz();
    return;
  }

  const currentQuestionData = questions[currentQuestion];
  if (selectedIndex === currentQuestionData.options.indexOf(currentQuestionData.correctAnswer)) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

const correctAnswerPanel = document.getElementById('correctAnswer');

correctAnswerPanel.style.display = 'none';

function hideCorrectAnswer() {
  const correctAnswerDiv = document.getElementById('correctAnswer');
  if (correctAnswerDiv.style.display !== 'none') {
    correctAnswerDiv.style.display = 'none';
  }
}
  function endQuiz() {
    const resultDiv = document.querySelector('.result');
    const resultMessage = "Game over! Your score: " + score + " out of " + questions.length;
    console.log(resultMessage);
    resultDiv.textContent = resultMessage;
    currentQuestion = 0;
    score = 0;
    showQuestion();

  correctAnswerPanel.style.display = 'flex';
}

showQuestion();