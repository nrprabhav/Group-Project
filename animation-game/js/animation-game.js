var myBot = document.getElementById("myBot");   
var input = document.getElementById("fname");
var myMonster = document.getElementById("myAnimation");   

var id = null;
var posMonster = -150;
function myMove() {
  clearInterval(id);
  id = setInterval(frame, 100);
  function frame() {
    if (posMonster == window.innerWidth-100) {
      myMonster.src=myMonster.dataset.still;
      clearInterval(id);
    } else {
      posMonster++; 
      myMonster.style.left = posMonster + 'px'; 
      if(posMonster>=posBot){
        clearInterval(id);
        console.log("You Lost!");
        myMonster.src="https://media1.giphy.com/media/1mgObw4w1GZR0vmnRe/200_s.gif";
      }
    }
  }
}

var posBot = 00;
$("#submit").on("click", function moveBot(event) {
  event.preventDefault();
  if (posBot < window.innerWidth-100 && input.value === "14") {
    posBot+=50; 
    //elem.style.top = pos + 'px'; 
    myBot.style.left = posBot + 'px'; 
    console.log(myBot.src);
    myBot.src="https://media1.giphy.com/media/l3q2wuKKE8qQ9YvMQ/200.gif";
  }
});