const landingVideo = document.getElementById('landing-video');
const scroll = document.querySelector('.scroll');

// Set landing video playbackrate
function setVideoPlaybackRate() {
    landingVideo.playbackRate = 0.5;
}

// Delay 'down to earth' text
function downToEarth() {
    setTimeout(() => {
        scroll.style.display = 'flex';
    }, 2600);
}

// On load
setVideoPlaybackRate();
downToEarth();