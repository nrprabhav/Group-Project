// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
let videoIds = ["VxGZ8hWzSNA", "8hN9Ur_xdm0", "UnbV3iBVjc4", "dN1xlk2oP1Y", "X0ZP6Lvn0A0", "X6veFfX_cFw", "LcSwgZ48ph8", "EvUO_d8Uzf0", "H3BGwzdLDBY", "VlVJhAIruCc"];
let timesTableOf = 10;

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        //height: '390',
        //width: '640',
        videoId: videoIds[timesTableOf - 1],
        //src: "https://www.youtube.com/embed/" + videoIds[timesTableOf - 1] + "?enablejsapi=1", 
        playerVars: {
            'playsinline': 1
        },
        autoplay: 1,
        controls: 0,
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        //setTimeout(stopVideo, 6000);
        //changeBorderColor(event.data);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}