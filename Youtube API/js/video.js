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

$("#bottom1").on("click", function(){
    console.log("Hi");
    player.loadVideoById({
        'videoId': videoIds[0],
        //'startSeconds': 5,
        //'endSeconds': 60
    });
});

$("#bottom2").on("click", function(){
    console.log("Hi");
    player.loadVideoById({
        'videoId': videoIds[1],
        //'startSeconds': 5,
        //'endSeconds': 60
    });
});
$("#bottom3").on("click", function(){
    console.log("Hi");
    player.loadVideoById({
        'videoId': videoIds[2],
        //'startSeconds': 5,
        //'endSeconds': 60
    });
});
$("#bottom4").on("click", function(){
    console.log("Hi");
    player.loadVideoById({
        'videoId': videoIds[3],
        //'startSeconds': 5,
        //'endSeconds': 60
    });
});
$("#bottom5").on("click", function(){
    console.log("Hi");
    player.loadVideoById({
        'videoId': videoIds[4],
        //'startSeconds': 5,
        //'endSeconds': 60
    });
});
$("#bottom6").on("click", function(){
    console.log("Hi");
    player.loadVideoById({
        'videoId': videoIds[5],
        //'startSeconds': 5,
        //'endSeconds': 60
    });
});
$("#bottom7").on("click", function(){
    console.log("Hi");
    player.loadVideoById({
        'videoId': videoIds[6],
        //'startSeconds': 5,
        //'endSeconds': 60
    });
});
$("#bottom8").on("click", function(){
    console.log("Hi");
    player.loadVideoById({
        'videoId': videoIds[7],
        //'startSeconds': 5,
        //'endSeconds': 60
    });
});
$("#bottom9").on("click", function(){
    console.log("Hi");
    player.loadVideoById({
        'videoId': videoIds[8],
        //'startSeconds': 5,
        //'endSeconds': 60
    });
});
$("#bottom10").on("click", function(){
    console.log("Hi");
    player.loadVideoById({
        'videoId': videoIds[9],
        //'startSeconds': 5,
        //'endSeconds': 60
    });
});