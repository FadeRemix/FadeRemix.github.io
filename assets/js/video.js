const videoMap = new Map();
const scrolltextMap = new Map();

videoMap.set(0,"/assets/boogie.mp4") // Video 1
scrolltextMap.set(0,"Still Think About You");

videoMap.set(1,"/assets/draft.mp4") // Video 2
scrolltextMap.set(1,"LUV DRUGS");

videoMap.set(2,"/assets/gherbo.mp4") // Video 3
scrolltextMap.set(2,"Sessions");

videoMap.set(3,"/assets/melly.mp4") // Video 4
scrolltextMap.set(3,"Mind Of Melvin");

videoMap.set(4,"/assets/polog.mp4") // Video 5
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
