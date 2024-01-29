document.getElementById('enter-text').addEventListener('click', function() {

    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    // Start playing the video
    var video = document.getElementById('background-video');
    video.volume = 0.05; // Set the volume to 25%
    video.play();
});
