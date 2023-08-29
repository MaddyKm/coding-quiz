var questionEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var currentQuestion = 0;

var questions = [
  {
    question: "What does CSS stand for?",
    answers: [
      "Compunding Style System",
      "Cascading Style Sheets",
      "Connecting Style Storage",
      "Creative Styling Sheets",
    ],
    correct: "Cascading Style Sheets",
  },
  {
    question: "In HTML the <p> tag stands for which of the following?",
    answers: ["a paragraph", "a pause", "punctuation", "parentheses"],
    correct: "a paragraph",
  },
  {
    question: "JavaScript functions are contained in what?",
    answers: ["Straight Brackets", "Parentheses", "Commas", "Curly Brackets"],
    correct: "Curly Brackets",
  },
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyphenated Type Maker Language",
      "Hyper Type Maker Language",
      "Hyper Text Markup Language",
      "Hex Type Markup Language",
    ],
    correct: "Hyper Text Markup Language",
  },
  {
    question: "Which of the following does an array not hold?",
    answers: ["Strings", "Numbers", "Boolean Values", "Functions"],
  },
];

function checkAnswer(event) {
  let userChoice = event.target.innerText;
  currentQuestion++;
  displayQuestion();
  displayAnswers();
}
function displayQuestion() {
  questionEl.textContent = questions[currentQuestion].question;
}

function displayAnswers() {
  answersEl.innerHTML = "";
  for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
    const choice = questions[currentQuestion].answers[i];
    let answerButton = document.createElement("button");
    answerButton.textContent = choice;
    answerButton.addEventListener("click", checkAnswer);

    answersEl.appendChild(answerButton);
  }
}
