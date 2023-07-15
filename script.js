var currentQuestion = document.getElementById("prompt");
var choiceOne = document.getElementById("choice1")
var choiceTwo = document.getElementById("choice2")
var choiceThree = document.getElementById("choice3")
var choiceFour = document.getElementById("choice4")
//var correctChoice.currentQuestion = 
var instructions = document.getElementById("multiple-choice");
var timeEl = document.querySelector(".time");
var startButton = document.getElementById("timer-start")
var secondsLeft = 120;
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

    console.log(questionsList)

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time Remaining:" + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
}

function startQuiz(){
    setTime()
    startButton.style.display="none"
    currentQuestion.textContent = questionsList[0].prompt;
    choiceOne.textContent = questionsList[0].choice1
    choiceTwo.textContent = questionsList[0].choice2
    choiceThree.textContent = questionsList[0].choice3
    choiceFour.textContent = questionsList[0].choice4
    eventListener("click", checkAnswer())

}


function checkAnswer(){}

function nextQuestion(){}

function endQuiz(){}
//give name and score, *local storage*


//var possibleAnswers = document.getElementsByClassName("choices")

//querySelectorAll(possibleAnswers)

//console.log(possibleAnswers)   
startButton.addEventListener("click", startQuiz)