const landingVideo = document.getElementById('landing-video');
const scroll = document.querySelector('.scroll');

// Set landing video playbackrate
function setVideoPlaybackRate() {
    landingVideo.playbackRate = 0.5;
}

function downToEarth() {
    setTimeout(() => {
        scroll.style.display = 'flex';
    }, 3000);
}


// On load
setVideoPlaybackRate();
downToEarth();