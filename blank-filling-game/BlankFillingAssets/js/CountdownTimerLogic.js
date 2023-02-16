// const timeDisplayEl = document.querySelector('.time-display');
const timeDisplayEl = $(".time-display");
// TODO: When open the page, it costs almost 1 second, need to solve this issue, 
// or load the time after all other things loaded.
// One question lasts for 10s, but here we show total time
// the total question number can be changed at the start page.
const tQN = $(".total-question-number").text();
// const tQN = 5;
console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!tQN = ${tQN}`);
const targetTime = new Date().getTime() + 10000 * tQN + 1000;
console.log(`targetTime = ${targetTime}`);
localStorage.setItem("target-time", targetTime);
function getTime() {
    // console.log(`targetTime = ${targetTime}`);
    // time in milliseconds
    let nowTime = new Date().getTime();
    // console.log(`nowTime = ${nowTime}`);
    let spanTime = targetTime - nowTime;
    if (spanTime <= 0) {
        // timeDisplayEl.innerHTML = "time is over";
        timeDisplayEl.attr("remained-time", 0);
        timeDisplayEl.text("Time is over");
        // TODO: auto save answer and jump into next question, if user leaves no answer, 
        // then the program will use "no answer" as record. 
        // RED: incorrect, GREEN: correct, GRAY: no answer
        return;
    }
    timeDisplayEl.attr("remained-time", spanTime);
    let hour = Math.floor(spanTime / (1000 * 60 * 60));
    spanTime -= hour * (1000 * 60 * 60);
    let minute = Math.floor(spanTime / (1000 * 60));
    spanTime -= minute * (1000 * 60);
    let second = Math.floor(spanTime / (1000));
    //add "0" placeholder to make sure format keeps "88:88:88"
    hour < 10 ? hour = '0' + hour : null;
    minute < 10 ? minute = '0' + minute : null;
    second < 10 ? second = '0' + second : null;
    // timeDisplayEl.innerHTML = `${hour}:${minute}:${second} left`;
    timeDisplayEl.text(`${hour}:${minute}:${second} left`);
}
// get time every second
// TODO: display left time in milliseconds, to tense users
window.setInterval(getTime, 1000);
