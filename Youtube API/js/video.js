let videoIds = ["VxGZ8hWzSNA", "8hN9Ur_xdm0", "UnbV3iBVjc4", "dN1xlk2oP1Y", "X0ZP6Lvn0A0", "X6veFfX_cFw", "LcSwgZ48ph8", "EvUO_d8Uzf0", "H3BGwzdLDBY", "VlVJhAIruCc"];

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '360',
    width: '640',
    videoId: videoIds[0]
  });
}

// Buttons for each times table
$("#bottom1").on("click", function(){
    player.loadVideoById({
        'videoId': videoIds[0]
    });
});

$("#bottom2").on("click", function(){
    player.loadVideoById({
        'videoId': videoIds[1]
    });
});
$("#bottom3").on("click", function(){
    player.loadVideoById({
        'videoId': videoIds[2]
    });
});
$("#bottom4").on("click", function(){
    player.loadVideoById({
        'videoId': videoIds[3]
    });
});
$("#bottom5").on("click", function(){
    player.loadVideoById({
        'videoId': videoIds[4]
    });
});
$("#bottom6").on("click", function(){
    player.loadVideoById({
        'videoId': videoIds[5]
    });
});
$("#bottom7").on("click", function(){
    player.loadVideoById({
        'videoId': videoIds[6]
    });
});
$("#bottom8").on("click", function(){
    player.loadVideoById({
        'videoId': videoIds[7]
    });
});
$("#bottom9").on("click", function(){
    player.loadVideoById({
        'videoId': videoIds[8]
    });
});
$("#bottom10").on("click", function(){
    player.loadVideoById({
        'videoId': videoIds[9]
    });
});