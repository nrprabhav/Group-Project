// questions related variables
$("#show-results-button").hide();
// range could be changed at the start page
let multiplicatorRange = 12;
let currentQuestionNumber = 0;
const totalQuestionNumber = 5;
let answerHistory = [{
    "question-number": 0,
    "multiplicators-and-right-answer": [0, 0, 0],
    "user-answer": "qwerty",
    "answer-status": "WA"
}];
// let answerHistory = [{"dummy-item": "suprise"}];
console.log(answerHistory);
console.log(JSON.stringify(answerHistory));
localStorage.setItem("answer-history", JSON.stringify(answerHistory));

// timer related variables
const nextButtonEl = document.querySelector("#next-button");
let remainedTimeEl = document.getElementsByClassName("time-display");
// console.log(remainedTime);
let remainedTime = remainedTimeEl[0].getAttribute("remained-time");
const audioEl = document.createElement("audio");
audioEl.setAttribute("src", "./BlankFillingAssets/sound/countdown.wav");
let countDownSoundPlayFlag = true;
let clearTimeOutCheckIntervalFlag = false;

const getRemainedTime = function () {
    // TODO: Check the time units here, using millisecond first. If it is not, 
    // or time format is 88:88:88, convert it to milliseconds.    
    remainedTimeEl = document.getElementsByClassName("time-display");
    // console.log(remainedTimeEl);
    remainedTime = remainedTimeEl[0].getAttribute("remained-time");
    console.log(`remainedTime = ${remainedTime}`);
    return remainedTime;
};

const isBlankUnfilled = function () {
    const blankAnswerEl = document.getElementsByClassName("blank-answer");
    console.log(blankAnswerEl);
    console.log(blankAnswerEl[0].value);
    if (!blankAnswerEl[0].value) {
        console.log("this blank is unfilled");
        // alert("time is out, this blank is unfilled");
    }
};

const goNextQuestion = function () {
    currentQuestionNumber += 1;
};

const saveAnswerGoNext = function () {
    isBlankUnfilled();
    // while (currentQuestionNumber < totalQuestionNumber) {
    //     $(".question-no").text(`Question ${currentQuestionNumber + 1}:`);
    //     $("#next-button").on("click", goNextQuestion);
    //     currentQuestionNumber += 1;
    // }
};

const countdownSoundPlay = function (onceFlag) {
    if (onceFlag) {
        audioEl.currentTime = 0;
        audioEl.play();
        console.log("play now");
        onceFlag = !onceFlag;
        return;
    } else {
        return;
    }
};

const timeOutCheck = function () {
    const rTime = getRemainedTime();
    // time unit is millisecond
    if (rTime <= 0) {
        clearTimeOutCheckIntervalFlag = true;
        // saveAnswerGoNext();
        // reset audio and flag
        audioEl.pause();
        audioEl.currentTime = 0;
        countDownSoundPlayFlag = true;
        console.log(`clearFlag = ${clearTimeOutCheckIntervalFlag}`);
        return clearTimeOutCheckIntervalFlag;
    } else if (rTime > 0 && rTime <= 4000) {
        if (Math.round(rTime / 1000) == 4) {
            // TODO: the sound cannot be set to autoplay, here comes the ref:
            // https://developer.chrome.com/blog/autoplay/
            // follow the best practices in this link and refactor the sound play logic.
            console.log(`rTime = ${rTime}`);
            console.log(countDownSoundPlayFlag);
            countdownSoundPlay(countDownSoundPlayFlag);
        }
        // TODO: timer flashing, white red white red
        if (Math.floor(rTime / 1000) % 2 == 1) {
            // remainedTimeEl[0].classList.remove("badge-info");
            remainedTimeEl[0].classList.remove("badge-light");
            remainedTimeEl[0].classList.add("badge-danger");
        } else {
            // remainedTimeEl[0].classList.remove("badge-info");
            remainedTimeEl[0].classList.remove("badge-danger");
            remainedTimeEl[0].classList.add("badge-light");
        }
        clearTimeOutCheckIntervalFlag = false;
        return clearTimeOutCheckIntervalFlag;
    }
};

//------------------------------------------------------------------------------
// all functions without timer part

// a function to generate the question, show question number, 
const questionGenerator = function (multiplicatorRange, currentQuestionNumber) {
    // update question number
    const cQN = currentQuestionNumber + 1;
    // $(".question-no").text(`Question ${cQN}:`);
    $(".question-no").html(`Question ${cQN}/<span class="total-question-number">${totalQuestionNumber}</main></span>:`);
    console.log(`cQN = ${cQN}`);
    // generating multiplicators
    const multiplicator1 = Math.floor(Math.random() * multiplicatorRange);
    // const multiplicator2 = Math.floor(Math.random() * multiplicatorRange);
    const multiplicator2 = multiplicatorRange;
    console.log(`${multiplicator1}, ${multiplicator2} = ${multiplicator1 * multiplicator2}`);
    // render it on page
    $("#multiplicator1").text(multiplicator1);
    $("#multiplicator2").text(multiplicator2);
    return cQN;
};

const checkAnswers = function () {
    const userInput = $(".blank-answer").val();
    if (!userInput) {
        console.log("unfilled blank");
        return "UB";
    } else {
        const rightAnswer = $("#multiplicator1").text() * $("#multiplicator2").text();
        console.log(`{${userInput}} == {${rightAnswer}} ? ${userInput == rightAnswer}`);
        if (userInput == rightAnswer) {
            console.log("correct answer");
            return "CA";
        } else {
            console.log("wrong answer");
            return "WA";
        }
    }
};

const renderCorrectWrong = function (isAnswerCorrectOrWrongOrUnfilled) {
    const liveToastEl = $("#liveToast");
    // liveToastEl.toast("show");
    if (isAnswerCorrectOrWrongOrUnfilled == "UB") {
        $(".badge-answer-status").addClass("badge-warning");
        $(".badge-answer-status").removeClass("badge-primary");
        $(".badge-answer-status").removeClass("badge-success");
        $(".badge-answer-status").removeClass("badge-danger");
        $(".toast-body-answer-status").text("Unfilled blank");
        // console.log($(".badge-answer-status").attr("class"));
        liveToastEl.toast("show");
    } else if (isAnswerCorrectOrWrongOrUnfilled == "CA") {
        $(".badge-answer-status").addClass("badge-success");
        $(".badge-answer-status").removeClass("badge-primary");
        $(".badge-answer-status").removeClass("badge-warning");
        $(".badge-answer-status").removeClass("badge-danger");
        $(".toast-body-answer-status").text("Correct Answer");
        // console.log($(".badge-answer-status").attr("class"));
        liveToastEl.toast("show");
    } else if (isAnswerCorrectOrWrongOrUnfilled == "WA") {
        $(".badge-answer-status").addClass("badge-danger");
        $(".badge-answer-status").removeClass("badge-primary");
        $(".badge-answer-status").removeClass("badge-warning");
        $(".badge-answer-status").removeClass("badge-success");
        $(".toast-body-answer-status").text("Wrong Answer");
        // console.log($(".badge-answer-status").attr("class"));
        liveToastEl.toast("show");
    }
};

const saveAnswerHistory = function (isAnswerCorrectOrWrongOrUnfilled) {
    let currentAnswerHisory = {};
    currentAnswerHisory["question-number"] = currentQuestionNumber;
    currentAnswerHisory["multiplicators-and-right-answer"] = [
        $("#multiplicator1").text(),
        $("#multiplicator2").text(),
        $("#multiplicator1").text() * $("#multiplicator2").text()
    ];
    currentAnswerHisory["user-answer"] = $(".blank-answer").val();
    currentAnswerHisory["answer-status"] = isAnswerCorrectOrWrongOrUnfilled;
    const storedAnswerHistory = JSON.parse(localStorage.getItem("answer-history"));
    console.log(`storedAnswerHistory`);
    console.log(storedAnswerHistory);
    storedAnswerHistory.push(currentAnswerHisory);
    console.log(storedAnswerHistory);
    localStorage.setItem("answer-history", JSON.stringify(storedAnswerHistory));
};

const saveAnswerWithoutTimer = function () {
    isAnswerCorrect = checkAnswers();
    renderCorrectWrong(isAnswerCorrect);
    saveAnswerHistory(isAnswerCorrect);
};

const renderAnswersHistory = function () {
    const storedAnswerHistory = JSON.parse(localStorage.getItem("answer-history"));
    const jumbotronRightEl = $(".jumbotron-right");
    const historyEl = $("<ul>");
    const historyTitle = $("<li>");
    historyEl.addClass("list-group");
    historyTitle.attr("class", "list-group-item list-group-item-primary");
    historyTitle.text("Good job! Here are your answers history");
    jumbotronRightEl.append(historyEl);
    historyEl.append(historyTitle);
    console.log(storedAnswerHistory);
    // 0 index is a placeholder data
    for (let i = 1; i < storedAnswerHistory.length; i++) {
        console.log(storedAnswerHistory[i]);
        const questionNumber = storedAnswerHistory[i]["question-number"];
        const multiplicator1 = storedAnswerHistory[i]["multiplicators-and-right-answer"][0];
        const multiplicator2 = storedAnswerHistory[i]["multiplicators-and-right-answer"][1];
        const rightAnswer = storedAnswerHistory[i]["multiplicators-and-right-answer"][2];
        const userAnswer = storedAnswerHistory[i]["user-answer"];
        const answerStatus = storedAnswerHistory[i]["answer-status"];
        const listEl = $("<li>");
        const questionNumberContainer = $("<div>");
        questionNumberContainer.attr("class", "d-flex w-100 justify-content-between");
        const questionNumberEl = $("<h5>");
        questionNumberEl.addClass("mb-1");
        questionNumberEl.text(`Question ${questionNumber}`);
        const answerStatusEl = $("<small>");
        const rightMultiplicationEl = $("<p>");
        rightMultiplicationEl.addClass("mb-1");
        rightMultiplicationEl.html(`${multiplicator1} <span>&#215;</span> ${multiplicator2} = ${rightAnswer}`);
        const userAnswerEl = $("<small>");
        userAnswerEl.text(`Your answer: ${userAnswer}`);
        console.log("======================")
        console.log(questionNumber);
        console.log(multiplicator1);
        console.log(multiplicator2);
        console.log(rightAnswer);
        console.log(userAnswer);
        console.log(answerStatus);
        if (answerStatus == "UB") {
            listEl.attr("class", "list-group-item list-group-item-warning");
            answerStatusEl.text("❗");
        } else if (answerStatus == "CA") {
            listEl.attr("class", "list-group-item list-group-item-success");
            answerStatusEl.text("⭕");
        } else if (answerStatus == "WA") {
            listEl.attr("class", "list-group-item list-group-item-danger");
            answerStatusEl.text("❌");
        }
        questionNumberContainer.append(questionNumberEl, answerStatusEl);
        listEl.append(questionNumberContainer, rightMultiplicationEl, userAnswerEl);
        historyEl.append(listEl);
    }
};

const goNextWithoutTimer = function (multiplicatorRange, cQNumber, tQNumber) {
    currentQuestionNumber = cQNumber;
    if (currentQuestionNumber < tQNumber) {
        currentQuestionNumber = questionGenerator(multiplicatorRange, currentQuestionNumber);
        console.log(`currentQuestionNumber = ${currentQuestionNumber}`);
        // start global timer and local timer
    } else {
        // next button change to show results button
        $("#next-button").hide();
        $("#show-results-button").show();
        // render results
        $("#show-results-button").on("click", renderAnswersHistory);
        // reward users with a gif from giphy API
    }

};

const saveAnswerGoNextWithoutTimer = function () {
    // saveAnswerWithoutTimer: check text input with right answer, show correct ot wrong, save history in local storage
    saveAnswerWithoutTimer();
    // goNextWithoutTimer: call questionGenerator again, start global timer and local timer
    goNextWithoutTimer(multiplicatorRange, currentQuestionNumber, totalQuestionNumber);
};

// End of all definitions
console.log(`now current question number = ${currentQuestionNumber}`);
currentQuestionNumber = questionGenerator(multiplicatorRange, currentQuestionNumber);
// nextButtonEl.addEventListener("click", saveAnswerGoNext);
nextButtonEl.addEventListener("click", saveAnswerGoNextWithoutTimer);
// According to Nyquist sampling theorem,
// Sample it at least every half second, and the remained time refreshes every 1 second.
const timeOutCheckInterval = window.setInterval(timeOutCheck, 500);
// if (clearTimeOutCheckIntervalFlag) {
//     console.log("asdasdasd" + clearTimeOutCheckIntervalFlag);
//     clearInterval(timeOutCheckInterval);
// }

setTimeout(() => {
    clearInterval(timeOutCheckInterval);
}, 10000);