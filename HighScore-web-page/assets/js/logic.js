
let currentQuestionIndex = 0;
let time = questions.length * 10;
let timerID;



let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices")
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");
let feedBackElement = document.getElementById("feedback");


let sfxRight = new Audio("assets/sfx/correct.wav");


function questionClick() {
    if(this.value !== questions[currentQuestionIndex].answer) {
        time -= 10;

        if(time < 0) {
            time = 0;
        }

        timerElement.textContent = time;
        
        feedBackElement.textContent = "Wrong"
    } else {
        sfxRight.play();
        feedBackElement.textContent = "Correct!";
    }


    feedBackElement.setAttribute("class", "feedback");

    setTimeout(function(){
        feedBackElement.setAttribute("class", "feedback hide")
     }, 1000);

     currentQuestionIndex++;

     if(currentQuestionIndex === questions.length) {
        quizEnd()
     } else {
        getQuestion();
     }
    
}

function getQuestion(){
    let currentQuestion = questions[currentQuestionIndex];

    let titleElement = document.getElementById("question-title");

    titleElement.textContent = currentQuestion.title;

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, index) {
        let choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = '$(index + 1). $(choices)'

        choiceButton.addEventListener("click", questionClick);

        choicesElement.append(choiceButton);
    })
}


function quizEnd(){
   clearInterval(timerID);

   let endScreenElement = document.getElementById("end-screen");
   endScreenElement.removeAttribute("class");

   let finalScoreElement = document.getElementById("final-score");
   finalScoreElement.textContent = time;

   questionsElement.setAttribute("class", "hide");
}

function clockTick(){
 time--;
 timerElement.textContent = time;

 if(time <= 0){
    quizEnd();
 }
}

function startQuiz(){
let startScreenElement = document.getElementById("start-screen");
startScreenElement.setAttribute("class", "hide");


    questionsElement.removeAttribute("class");


timerID = setInterval(clockTick, 1000)

timerElement.textContent = time;

getQuestion();
}


function saveHighScore(){
     let initials = initialElement.value.trim(); 
    console.log(initials);
    
    if(initials !== "") {
     let highScores = JSON.parse(localStorage.getItem("highscores")) || [];
     let newScore = {
        score: time,
        initials: initials
     }

     highScores.push(newScore);
     localStorage.setItem("highscores", JSON.stringify(highScores));
     
     window.location.href = "highscores.html";
    }
    
}


function checkForEnter(event){
       if(event.key === "Enter") {
        saveHighScore();
       }
}


startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);