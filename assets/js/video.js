document.getElementById('enter-text').addEventListener('click', function() {
const videoMap = new Map();
const scrolltextMap = new Map();

videoMap.set(0,"https://cdn.discordapp.com/attachments/1224928873230368918/1275867705311756368/YNW_Melly_YNW_BSlime__Ynw4L-_772_Love_Pt.3_Your_Love_Music_Video_ynwmelly_ynwbslime_yourlove.mp4?ex=66c773e5&is=66c62265&hm=db57250f7addd1bc0cc7872f440189df41ceae4e1e9837882725417f05ae99ad&") // Video 1
scrolltextMap.set(0,"YNW Melly - 772 Love Pt3");

videoMap.set(1,"https://cdn.discordapp.com/attachments/1224928873230368918/1275867703172661299/Lil_Yachty__Veeze_-_Sorry_Not_Sorry_Official_Music_Video.mp4?ex=66c773e4&is=66c62264&hm=6e932197e4421d35f1fbea52f21800399e79057c4f2be7dc25174130a63ea584&") // Video 2
scrolltextMap.set(1,"Veeze - Sorry Not Sorry");

videoMap.set(2,"https://cdn.discordapp.com/attachments/1224928873230368918/1275867708914663537/Luh_Tyler_-_Young_N_____Official_Music_Video.mp4?ex=66c773e6&is=66c62266&hm=0f0d38e7557414beea400a7d9c8a8e5cd5e78291258853d1ef375398d0ffa142&") // Video 3
scrolltextMap.set(2,"Luh Tyler - Young N*");

videoMap.set(3,"https://cdn.discordapp.com/attachments/1224928873230368918/1275867712463179997/Babyfxce_E_-_PTP_Official_Music_Video.mp4?ex=66c773e7&is=66c62267&hm=2aaf1c4012dd793165f2c57f06869c5dcd5ad747cca26b3fa131e985b9c7e2de&") // Video 4
scrolltextMap.set(3,"Babyfxce E - PTP");

videoMap.set(4,"https://cdn.discordapp.com/attachments/1224928873230368918/1275867715793457193/LUCKI_-_GOODFELLAS_Official_Video.mp4?ex=66c773e7&is=66c62267&hm=cd7370af514cea7ac7d9af585a21db2d758c13ed6afcc23f601e2a4529e09da3&") // Video 5
scrolltextMap.set(4,"Lucki - GOODFELLAS");

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
