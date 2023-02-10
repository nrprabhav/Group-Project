function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  // When a box is dragged

  console.log(event.target.textContent);
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  // When one of the answers if dropped
  
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
  // Fill questions on the page

  // Randomize the order of multipliers
  let multiplier = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let answers = new Array(10).fill(0);
  console.log(multiplier.sort(() => Math.random() - 0.5));//Do not comment out
  
  // Display the questions and change the answers for the dropboxes
  for (let i = 0; i < 10; i++) {
    $(".table-of-").text(timesTableOf);
    $("#m" + (i + 1)).text(multiplier[i]);
    $("#dropBox" + (i + 1)).attr("data-answer", multiplier[i] * timesTableOf);
  }

  // Display the answers in a sorted manner
  for (let i = 0; i < 10; i++) {
    answers[i] = multiplier[i];
  }
  console.log(answers.sort((a, b) => a - b));//Do not comment out
  for (let i = 0; i < 10; i++) {
    $("#a" + (i + 1)).text(answers[i] * timesTableOf);
  }
}

function changeDisplayMode() {
  // Switch between Learning and Testing Mode

  if ($("#learning-mode").is(':checked')) {
    mode = "learning";
    localStorage.setItem("mode", mode);
    $("#testing-mode-text").css("display", "none");
    $("#learning-mode-text").css("display", "inline");
    $("#submit").css("display", "none");
  } else {
    mode = "testing";
    localStorage.setItem("mode", mode);
    $("#testing-mode-text").css("display", "inline");
    $("#learning-mode-text").css("display", "none");
    $("#submit").css("display", "inline");
  }
}

$(".switch").on("click", function (event) {
  // When the mode is toggled

  changeDisplayMode();
  location.reload(); // refresh so that the answers start from beginning
})

$("#submit").click(function () {
  // When the "Check Your Answers" button is clicked

  console.log("Checking");
  let scoreCorrect = 0;
  let scoreWrong = 0;
  let scoreNoAttempt = 0;
  for (let i = 0; i < 10; i++) {
    //$("#m" + (i + 1)).text(multiplier[i] + " =");
    console.log($("#dropBox" + (i + 1)).attr("data-answer"));
    if ($("#dropBox" + (i + 1)).children('p').length == 1) {
      if ($("#dropBox" + (i + 1)).children('p')[0].textContent === $("#dropBox" + (i + 1)).attr("data-answer")) {
        scoreCorrect++;
        $("#dropBox" + (i + 1)).css("background-color", "green");
      } else {
        scoreWrong++;
        $("#dropBox" + (i + 1)).css("background-color", "red");
      }
    } else {
      console.log("undefined");
      scoreNoAttempt++;
      $("#dropBox" + (i + 1)).css("background-color", "yellow");
    }
  }
  console.log(scoreCorrect);
  $("#score-correct").text(scoreCorrect);
  $("#score-wrong").text(scoreWrong);
  $("#score-no-attempt").text(scoreNoAttempt);
  $("#exampleModalCenter").modal();
})

/*********************************/
// Which times table are we practicing - options from the homepage
let timesTableOf = 12;
/*********************************/

// Get mode from local storage.
let mode = localStorage.getItem("mode");
if (mode === null) { //If mode doesn't exist
  mode = "testing";
  //localStorage.setItem("mode", mode);
  $("#learning-mode").prop("checked", false);
} else if (mode === "testing") { //If it is testing
  $("#learning-mode").prop("checked", false);
} else {  // If it is learning
  mode = "learning";
  $("#learning-mode").prop("checked", true);
}
changeDisplayMode();
fillQuestions();
