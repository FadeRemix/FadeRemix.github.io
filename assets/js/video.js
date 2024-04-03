document.getElementById('enter-text').addEventListener('click', function() {
const videoMap = new Map();
const scrolltextMap = new Map();

videoMap.set(0,"https://cdn.discordapp.com/attachments/1224928873230368918/1224930094942912615/y2mate.is_-_A_Boogie_Wit_Da_Hoodie_-_Still_Think_About_You_Prod_by._Plug_Studios_NYC_Official_Music_Video-ocskDuKK7Ok-720p-1712116459.mp4?ex=661f480c&is=660cd30c&hm=f66cacc34fa3dad53f23d12d9a207c90fa824f1417dd4e2d6ad9d55172d44bcf&") // Video 1
scrolltextMap.set(0,"Boogie - Still Think About You");

videoMap.set(1,"https://cdn.discordapp.com/attachments/1224928873230368918/1224929176537010236/draft.mp4?ex=661f4731&is=660cd231&hm=47732849b6f3e7d86f9052ba512a19ce97c5832cb4ab5f07c8e54815472efc67&") // Video 2
scrolltextMap.set(1,"Draft Day - LUV DRUGS");

videoMap.set(2,"https://cdn.discordapp.com/attachments/1224928873230368918/1224929151769907302/gherbo.mp4?ex=661f472b&is=660cd22b&hm=5b6cbfa5c75e9ad85e104378bc66369be9a9cbb9c851c2507de612a72294355e&") // Video 3
scrolltextMap.set(2,"G Herbo - Sessions");

videoMap.set(3,"https://cdn.discordapp.com/attachments/1224928873230368918/1224929179796111391/jdot.mp4?ex=661f4732&is=660cd232&hm=f7df5c42f2381aa38ddd0f5a43fd0c301ae78ae17e6c56c5cfb179997f624b77&") // Video 4
scrolltextMap.set(3,"JDot - Tweak Shit Pt.2");

videoMap.set(4,"https://cdn.discordapp.com/attachments/1224928873230368918/1224929093087264868/polog.mp4?ex=661f471d&is=660cd21d&hm=bcf87d4a981342e34763040e68e67e3911469bbca149ed5cd3a6d9ea0a75f833&") // Video 5
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
