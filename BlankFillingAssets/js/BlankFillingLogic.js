const nextButtonEl = document.querySelector("#next-button");
let remainedTimeEl = document.getElementsByClassName("time-display");
// console.log(remainedTime);
let remainedTime = remainedTimeEl[0].getAttribute("remained-time");
const getRemainedTime = function () {
    // TODO: Check the time units here, using millisecond first. If it is not, 
    // or time format is 88:88:88, convert it to milliseconds.    
    remainedTimeEl = document.getElementsByClassName("time-display");
    // console.log(remainedTimeEl);
    remainedTime = remainedTimeEl[0].getAttribute("remained-time");
    console.log(`remainedTime = ${remainedTime}`);
    return remainedTime;
};

const isBlankUnfilled = function () {};

const saveAnswerGoNext = function () {
    isBlankUnfilled();
    if (currentQuestionNumber < totalQuestionNumber) {

    }
};

const timeOutCheck = function () {
    const rTime = getRemainedTime();
    // time unit is millisecond
    if (rTime <= 0) {
        saveAnswerGoNext();
    } else if (rTime > 0 && rTime <= 4000) {
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
        // countDownSoundPlay();
    }
};

nextButtonEl.addEventListener("click", saveAnswerGoNext);
// According to Nyquist sampling theorem,
// Sample it at least every half second, and the remained time refreshes every 1 second.
window.setInterval(timeOutCheck, 500);

let regex = /^badge-.*$/;
let input = "time-display badge badge-info badge-light";
console.log(regex.test(input))
