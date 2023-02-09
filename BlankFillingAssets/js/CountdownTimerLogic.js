const timeDisplayEl = document.querySelector('.time-display')
// TODO: When open the page, it costs almost 1 second, need to solve this issue, 
// or load the time after all other things loaded.
const targetTime = new Date().getTime() + 30000 + 1000;
function getTime() {
    console.log(`targetTime = ${targetTime}`);
    // time in milliseconds
    var nowTime = new Date().getTime();
    console.log(`nowTime = ${nowTime}`);
    var spanTime = targetTime - nowTime;
    if (spanTime <= 0) {
        timeDisplayEl.innerHTML = "time is over"
        // TODO: auto save answer and jump into next question, if user leaves no answer, 
        // then the program will use "no answer" as record. 
        // RED: incorrect, GREEN: correct, GRAY: no answer
        return
    }
    var hour = Math.floor(spanTime / (1000 * 60 * 60))
    spanTime -= hour * (1000 * 60 * 60)
    var minute = Math.floor(spanTime / (1000 * 60))
    spanTime -= minute * (1000 * 60)
    var second = Math.floor(spanTime / (1000))
    //add "0" placeholder to make sure format keeps "88:88:88"
    hour < 10 ? hour = '0' + hour : null
    minute < 10 ? minute = '0' + minute : null
    second < 10 ? second = '0' + second : null
    timeDisplayEl.innerHTML = `${hour}:${minute}:${second} left`
}
// get time every second
// TODO: display left time in milliseconds, to tense users
window.setInterval(getTime, 1000)
