
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