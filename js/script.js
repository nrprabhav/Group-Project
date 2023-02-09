function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  console.log(event.target.textContent);
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  console.log(mode);
  if (mode === "learning") {
    if (document.getElementById(data).textContent === event.target.dataset.answer) {
      $("#" + data).css("background-color", "green");
    }
    else {
      $("#" + data).css("background-color", "red");
    }
  }
}

function fillQuestions() {
  let multiplier = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let answers = new Array(10).fill(0);
  console.log(multiplier.sort(() => Math.random() - 0.5));//Do not comment out
  for (let i = 0; i < 10; i++) {
    $("#m" + (i + 1)).text(multiplier[i] + " =");
    $("#dropBox" + (i + 1)).attr("data-answer", multiplier[i] * 7);
  }
  for (let i = 0; i < 10; i++) {
    answers[i] = multiplier[i];
  }
  //console.log(multiplier);
  console.log(answers.sort((a, b) => a - b));//Do not comment out
  for (let i = 0; i < 10; i++) {
    //answersSubset.slice(0,-1).sort();
    $("#a" + (i + 1)).text(answers[i] * 7);
  }
}

$(".switch").on("click", function(event){
  if($("#learning-mode").is(':checked')){
    mode = "learning";
    $("#testing-mode-text").css("display","none");
    $("#learning-mode-text").css("display","inline");
    $("#submit").css("display","none");
  } else{
    mode = "testing";
    $("#testing-mode-text").css("display","inline");
    $("#learning-mode-text").css("display","none");
    $("#submit").css("display","inline");
  }
})

$("#submit").click(function(){
  console.log("Checking");
  let score = 0;
  for (let i = 0; i < 10; i++) {
    //$("#m" + (i + 1)).text(multiplier[i] + " =");
    console.log($("#dropBox" + (i + 1)).attr("data-answer"));
    if ($("#dropBox" + (i + 1)).children('p').length == 1){
      if($("#dropBox" + (i + 1)).children('p')[0].textContent === $("#dropBox" + (i + 1)).attr("data-answer")){
        score++;
        $("#dropBox" + (i + 1)).css("background-color","green");
      } else{
        $("#dropBox" + (i + 1)).css("background-color","red");
      }
    } else{
      console.log("undefined");
      $("#dropBox" + (i + 1)).css("background-color","yellow");
    }
  }
  console.log(score);
})

let mode="testing";
fillQuestions();
