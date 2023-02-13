
var id = null;
var posMonster = -150;
function myMove() {
  var elem = document.getElementById("myAnimation");   
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (posMonster == window.innerWidth-100) {
      elem.src=elem.dataset.still;
      clearInterval(id);
    } else {
      posMonster++; 
      elem.style.left = posMonster + 'px'; 
      if(posMonster>=posBot){
        clearInterval(id);
        console.log("You Lost!");
        elem.src="https://media1.giphy.com/media/1mgObw4w1GZR0vmnRe/200_s.gif";
      }
    }
  }
}

var posBot = 00;
function moveBot() {
  var elem = document.getElementById("myBot");   
  if (posBot >= window.innerWidth-100) {
    
  } else {
    posBot+=50; 
    //elem.style.top = pos + 'px'; 
    elem.style.left = posBot + 'px'; 
    console.log(elem.src);
    elem.src=elem.dataset.animate;
  }
}