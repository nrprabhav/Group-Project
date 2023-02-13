
var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 00;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == window.innerWidth-100) {
      clearInterval(id);
    } else {
      pos++; 
      //elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}

var pos = 00;
function moveBot() {
  var elem = document.getElementById("myBot");   
  if (pos >= window.innerWidth-100) {
    
  } else {
    pos+=50; 
    //elem.style.top = pos + 'px'; 
    elem.style.left = pos + 'px'; 
  }
}