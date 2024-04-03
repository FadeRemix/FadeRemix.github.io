const videoMap = new Map();
const scrolltextMap = new Map();

videoMap.set(0,"/assets/songs/boogie.mp4") // Video 1
scrolltextMap.set(0,"Still Think About You");

videoMap.set(1,"/assets/songs/draft.mp4") // Video 2
scrolltextMap.set(1,"LUV DRUGS");

videoMap.set(2,"/assets/songs/gherbo.mp4") // Video 3
scrolltextMap.set(2,"Sessions");

videoMap.set(3,"/assets/songs/jdot.mp4") // Video 4
scrolltextMap.set(3,"Tweak Shit Pt.2");

videoMap.set(4,"/assets/songs/polog.mp4") // Video 5
scrolltextMap.set(4,"Gang With Me");

var randomNumberZeroToOne = Math.floor(Math.random()*5);
var currentVideo = videoMap.get(randomNumberZeroToOne);
var currentVideoScrollText = scrolltextMap.get(randomNumberZeroToOne);

document.getElementById('enter-text').addEventListener('click', function() { // starts video

    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';


    var video = document.getElementById('background-video');
    var srollingText = document.getElementById('scrolling-text');

    video.src = currentVideo; // sets random video
    srollingText.textContent = "Playing: " + currentVideoScrollText;

    video.volume = 0.05; // Set the volume to 25%
    video.play();
});
