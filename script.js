var questionsList = [
  {
    prompt: "What is the key word for a variable in JavaScript?",
    choice1: "var",
    choice2: "function",
    choice3: "body",
    choice4: "return",
    correctChoice: "var"
  },
  {
    prompt: "Which language is used to style a website?",
    choice1: "JQuery",
    choice2: "Python",
    choice3: "CSS",
    choice4: "C++",
    correctChoice: "CSS"
  },
  {
    prompt: "What program do we use to submit rough drafts when working on a development team?",
    choice1: "Insomnia",
    choice2: "GitHub",
    choice3: "Terminal",
    choice4: "Google.Docs",
    correctChoice: "GitHub"
},
{
    prompt: "What is the best brand of computer, not just for coding but in general?",
    choice1: "Lenovo",
    choice2: "Gateway",
    choice3: "ChromeBook",
    choice4: "Mac",
    correctChoice: "Mac"
},
{
    prompt: "Which social media site is the best for learning code?",
    choice1: "Reddit",
    choice2: "Facebook",
    choice3: "Instagram",
    choice4: "MySpace",
    correctChoice: "Reddit"
}
  ]
var questionEl = document.getElementById("prompt");
var currentQuestionIndex = 0
var currentQuestion = questionsList[currentQuestionIndex]
var score = 0
var choiceOne = document.getElementById("choice1")
var choiceTwo = document.getElementById("choice2")
var choiceThree = document.getElementById("choice3")
var choiceFour = document.getElementById("choice4")
var possibleAnswers = document.getElementById("options")
var answers1 = document.getElementById("options")
//var userChoice = addEventListener("click", answers)
var instructions = document.getElementById("multiple-choice");
var timeEl = document.querySelector(".time");
var startButton = document.getElementById("timer-start")
var submitButton = document.getElementById("submit")
var secondsLeft = 120;
submitButton.style.display="none"
answers1.style.display="none"

    console.log(questionsList)

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time Remaining:" + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        display.alert();
      }
  
    }, 1000);
}
for ( var i = 0; i < 5; i++ ) {
function startQuiz(){
    setTime()
    answers1.style.display=""
    startButton.style.display="none"
    submitButton.style.display="Submit Answer"
    questionEl.textContent = questionsList[currentQuestionIndex].prompt;
    choiceOne.textContent = questionsList[currentQuestionIndex].choice1;
    choiceTwo.textContent = questionsList[currentQuestionIndex].choice2;
    choiceThree.textContent = questionsList[currentQuestionIndex].choice3;
    choiceFour.textContent = questionsList[currentQuestionIndex].choice4;
    //choices.eventListener("click", checkAnswer())
}}

function checkAnswer(e){
  var userChoice = e.target
  var correctChoice = currentQuestion.correctChoice
  console.log(userChoice.innerText)
  console.log(correctChoice)
  if (userChoice.innerText == correctChoice) {
    score++
    console.log(score)
  }
nextQuestion()
}

function nextQuestion(){
  currentQuestionIndex++
  questionEl.textContent = questionsList[currentQuestionIndex].prompt;
    choiceOne.textContent = questionsList[currentQuestionIndex].choice1;
    choiceTwo.textContent = questionsList[currentQuestionIndex].choice2;
    choiceThree.textContent = questionsList[currentQuestionIndex].choice3;
    choiceFour.textContent = questionsList[currentQuestionIndex].choice4;
}

function endQuiz(){}
//give name and score, *local storage*

//querySelectorAll(possibleAnswers)

//console.log(possibleAnswers)   
startButton.addEventListener("click", startQuiz)
possibleAnswers.addEventListener("click", checkAnswer)