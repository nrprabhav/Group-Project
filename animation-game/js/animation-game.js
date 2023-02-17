var myBot = document.getElementById("myBot");   
var input = document.getElementById("fname");
var myMonster = document.getElementById("myAnimation");   
let start = 0;
let width = screen.width;
let speed = parseFloat($("#monster-speed").children("option:selected").val());
var id = null;
var posMonster = -speed-4;

function myMove() {
  // Moves the monster

  clearInterval(id);
  id = setInterval(frame, 300);
  function frame() {
    // If the monster has reached the end of the screen
    if (posMonster == 90) {
      myMonster.src=myMonster.dataset.still;
      clearInterval(id);
    } else {
      speed = parseFloat($("#monster-speed").children("option:selected").val());
      posMonster+=0.2*speed-0.1; 
      myMonster.style.left = posMonster + "%"; 
      if(posMonster>=posBot){
        clearInterval(id);
        posMonster=posBot;
        myMonster.style.left = posMonster + "%";
        console.log("You Lost!");
        gameLost();
        myMonster.src="https://media1.giphy.com/media/kEEKvwfCkswGIZHPA2/200_s.gif";
      }
    }
  }
}

function displayNewQuestion() {
  // Display a new question

  let lim1 = $("#tableLimit1").children("option:selected").val();
  let lim2 = $("#tableLimit2").children("option:selected").val();
  num1 = Math.floor(Math.random() * (parseInt(lim1)+1));
  num2 = Math.floor(Math.random() * (parseInt(lim2)+1));
  correctAnswer = num1 * num2;
  $("#num1").text(parseInt(num1));
  $("#num2").text(parseInt(num2));
}

function gameLost(){
  // When you lose the game

  console.log("Display Lost Modal");
  $('#myLoseModal').modal('show');
}

function gameWin(){
  // When you win the game

  console.log("Display Win Modal");
  $('#myWinModal').modal('show');
}

function reload(){
  // Reload the page

  location.reload();
}

var posBot = 00;
var correctAnswer = 0;
$("#submit").on("click", function moveBot(event) {
  // Functionality when you submit

  event.preventDefault();
  if (posBot < 81 && parseInt(input.value) == correctAnswer) {
    posBot+=9; 
    //elem.style.top = pos + 'px'; 
    myBot.style.left = posBot + '%'; 
    console.log(myBot.src);
    myBot.src="https://media1.giphy.com/media/xTcnSMB8VXjTox23zW/200.gif";
    displayNewQuestion();
    input.value="";
  }
  else if (parseInt(input.value) == correctAnswer){
    myBot.style.left = 90 + '%';
    clearInterval(id);
    myBot.src="https://media1.giphy.com/media/xTcnSMB8VXjTox23zW/200_s.gif";
    myMonster.src="https://media1.giphy.com/media/kEEKvwfCkswGIZHPA2/200_s.gif";
    console.log("You have won!");
    gameWin();
  } else {
    input.value="";
  }
  
  if(start == 0) {
    // When the page is first loaded
    start = 1;
    myMove();
  }
});

displayNewQuestion();