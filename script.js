//DEPENDENCIES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//timer counts down from pressing start
var timer = document.querySelector("#time");
var timeLeft = 45;
//question changes each time
var questionEl = document.querySelector("#questions");
//answers change each time
var answersEl = document.querySelector("#answers");
var instructions = document.querySelector("#instructions");
//pop up that says right or wrong and remaind for only 2 seconds
//start quiz button
var startquiz = document.querySelector("#startquiz");
var title = document.querySelector("#title");

var highscoreEl = document.querySelector("#highscores");

var answerGradeEl = document.querySelector("#answerGrade");

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
    answers: ["Strings", "Numbers", "Boolean Values", "CSS Styles"],
    correct: "Functions",
  },
];
//DATA~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//highscores tracked
//time (score) tracked

//FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timeLeft = 0;
      timer.textContent = "";
      clearInterval(timeInterval);
      allDone();
    }
  }, 1000);
}

function displayQuestion() {
  questionEl.textContent = questions[currentQuestion].question;
  questionEl.setAttribute("style", "font-size: 25px; padding: 1em");
}

function displayAnswers() {
  answersEl.innerHTML = "";
  for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
    const choice = questions[currentQuestion].answers[i];
    let answerButton = document.createElement("button");
    answerButton.textContent = choice;
    answerButton.addEventListener("click", checkAnswer);

    answersEl.appendChild(answerButton);

    answersEl.setAttribute(
      "style",
      "display: flex; flex-direction: column; padding: 1em"
    );
    answerButton.setAttribute(
      "style",
      "background-color: purple; color: bisque; width: 45%; padding: 1em"
    );
  }
}
function checkAnswer(event) {
  if (currentQuestion >= questions.length - 1) {
    allDone();
    timer.remove();
    console.log(timeLeft);
  }
  let userChoice = event.target.innerText;
  let correctAnswer = questions[currentQuestion].correct;

  if (userChoice === correctAnswer) {
    alert("you got it right!");
  } else {
    alert("you got it wrong");
    timeLeft = timeLeft - 10;
  }
  currentQuestion++;
  displayQuestion();
  displayAnswers();
}

function allDone() {
  questionEl.textContent = "All done! Submit your intials";
  answersEl.remove();
  var initialInput = document.createElement("input");
  initialInput.setAttribute("initials", "text");
  answerGradeEl.appendChild(initialInput);
  var submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  answerGradeEl.appendChild(submitButton);

  submitButton.addEventListener("click", function () {
    console.log(initialInput.value);
    localStorage.setItem("score", timeLeft);
    localStorage.setItem("initials", initialInput.value);
    highScores();
  });
}
function highScores() {
  highscoreEl.textContent = "";
  questionEl.textContent = "High Scores";
  instructions.textContent = "";
  answerGradeEl.remove();
  startquiz.remove();
  questionEl.remove();
  timer.remove();
  title.textContent = "High Scores";
  var storedInitials = localStorage.getItem("initials");
  var storedScore = localStorage.getItem("score");

  questionEl.textContent = storedInitials + storedScore;
}
function startQuiz() {
  countdown();
  title.innerHTML = "";
  instructions.textContent = "";
  startquiz.remove();
  displayQuestion();
  displayAnswers();
}
//USER INTERACTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~
//start game button
startquiz.addEventListener("click", function () {
  startQuiz();
});
//click on the answer
//switch to next question
//display if last question was right
//repeat until the last question
//enter initials for high scores
highscoreEl.addEventListener("click", function () {
  highScores();
});
//INITIALIZATIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~
