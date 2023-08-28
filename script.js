//DEPENDENCIES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//timer counts down from pressing start
var timer = document.querySelector("#time");
//question changes each time
var questions = document.querySelector("#questions");
//answers change each time
var answers = document.querySelector("#answers");

var answerOne = document.createElement("button");
var answerTwo = document.createElement("button");
var answerThree = document.createElement("button");
var answerFour = document.createElement("button");
//pop up that says right or wrong and remaind for only 2 seconds
//start quiz button
var startquiz = document.querySelector("#startquiz");
var title = document.querySelector("#title");

var highscoreEl = document.querySelector("#highscores");
//DATA~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//highscores tracked
//time (score) tracked

//FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function countdown() {
  var timeLeft = 45;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timer.textContent = "";
      clearInterval(timeInterval);
      //add in highscore function
    }
  }, 1000);
}

function questionOne() {
  questions.textContent = "CSS Stands for:";

  answerOne.textContent = "Compounding Style System";
  answerTwo.textContent = "Cascading Style Sheets";
  answerThree.textContent = "Connecting Style Storage";
  answerFour.textContent = "Creative Style Sheets";

  answers.appendChild(answerOne);
  answers.appendChild(answerTwo);
  answers.appendChild(answerThree);
  answers.appendChild(answerFour);

  answers.addEventListener("click", function () {
    questionTwo();
  });
}
function questionTwo() {
  questions.textContent = "What does the <p> tag indicate in HTML";

  answerOne.textContent = "Paragraph";
  answerTwo.textContent = "Pause";
  answerThree.textContent = "Punctuation";
  answerFour.textContent = "Parenthesis";

  answers.addEventListener("click", function () {
    questionThree();
  });
}

function questionThree() {
  questions.textContent =
    "JavaScript functions are contained in which of the following:";

  answerOne.textContent = "Straight Brackets";
  answerTwo.textContent = "Parentheses";
  answerThree.textContent = "Commas";
  answerFour.textContent = "Curly Brackets";

  answers.addEventListener("click", function () {
    questionFour();
  });
}

function questionFour() {
  questions.textContent = "HTML Stands for:";

  answerOne.textContent = "Hyphenated Type Maker Language";
  answerTwo.textContent = "Hyper Type Maker Language";
  answerThree.textContent = "Hyper Text Markup Language";
  answerFour.textContent = "Hex Type Markup Language";

  answers.addEventListener("click", function () {
    questionFive();
  });
}

function questionFive() {
  questions.innerHTML = "Which of the following does an array <i>not</i> hold?";

  answerOne.textContent = "Strings";
  answerTwo.textContent = "Variables";
  answerThree.textContent = "Numbers";
  answerFour.textContent = "Boolean Values";

  answers.addEventListener("click", function () {
    highScores();
  });
}
function highScores() {
  highscoreEl.textContent = "";
  questions.textContent = "High Scores";
  answerOne.remove();
  answerTwo.remove();
  answerThree.remove();
  answerFour.remove();
}
function startQuiz() {
  countdown();
  title.innerHTML = "";
  startquiz.remove();
  questionOne();
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

//INITIALIZATIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~
