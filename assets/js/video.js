document.getElementById('enter-text').addEventListener('click', function() {
const videoMap = new Map();
const scrolltextMap = new Map();

videoMap.set(0,"https://cdn.discordapp.com/attachments/1224928873230368918/1224933952339443752/boogie.mp4?ex=661f4ba4&is=660cd6a4&hm=ae8416a8b0d0d811118972ef421978bf55b58a01048e0a9e2a33f092e20b4619&") // Video 1
scrolltextMap.set(0,"Boogie - Still Think About You");

videoMap.set(1,"https://cdn.discordapp.com/attachments/1224928873230368918/1224933956298866699/draft.mp4?ex=661f4ba5&is=660cd6a5&hm=b04e67b8523616bb5f364c126982504f67ad4cc6db7637b574c64dd1319c3103&") // Video 2
scrolltextMap.set(1,"Draft Day - LUV DRUGS");

videoMap.set(2,"https://cdn.discordapp.com/attachments/1224928873230368918/1224933957607493696/gherbo.mp4?ex=661f4ba5&is=660cd6a5&hm=0b3fa829e9aacfaad1d95f60e0dff8cd5b8751f879d4ed833001eedf24c30e20&") // Video 3
scrolltextMap.set(2,"G Herbo - Sessions");

videoMap.set(3,"https://cdn.discordapp.com/attachments/1224928873230368918/1224933953614512238/jdot.mp4?ex=661f4ba4&is=660cd6a4&hm=9048c594c2f7c33a346aab889ec205c79fbdd24b8c5bdd72acfd8f2ce44e9c9c&") // Video 4
scrolltextMap.set(3,"JDot - Tweak Shit Pt.2");

videoMap.set(4,"https://cdn.discordapp.com/attachments/1224928873230368918/1224933954788921475/polo.mp4?ex=661f4ba4&is=660cd6a4&hm=d2c657345e68eeb82472026c86a3efc67defc84f12dfc37ca9c3f3e92c49ea56&") // Video 5
scrolltextMap.set(4,"Polo G - Gang With Me");

var randomNumberZeroToOne = Math.floor(Math.random()*5);
var currentVideo = videoMap.get(randomNumberZeroToOne);
var currentVideoScrollText = scrolltextMap.get(randomNumberZeroToOne);


    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';


    var video = document.getElementById('background-video');
    var srollingText = document.getElementById('scrolling-text');

    video.src = currentVideo; // sets random video
    srollingText.textContent = "Playing: " + currentVideoScrollText;

    video.volume = 0.05; // Set the volume to 25%
    video.play();
});
