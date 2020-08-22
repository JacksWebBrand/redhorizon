const landingVideo = document.getElementById('landing-video');
const scrollMessage = document.querySelector('.scroll');
const welcomeText = document.getElementById('welcome-text');
const webDevText = document.getElementById('web-dev-text');
const videoImagePlaceholder = document.getElementById('placeholder-image-container');

// Set landing video playbackrate
function setVideoPlaybackRate() {
    landingVideo.playbackRate = 0.5;
}

function randomWelcomeText() {
    setInterval(() => {
        textSeed = Math.random() * 100;
        if (textSeed <= 10) {
            welcomeText.textContent = 'FUNCATIONALLY ADVANCED';
        } else if (textSeed > 10 && textSeed <= 20) {
            welcomeText.textContent = 'EASILY MAINTAINED';
        } else if (textSeed > 20 && textSeed <= 30) {
            welcomeText.textContent = 'DEPLOYABLE WORLDWIDE';
        } else if (textSeed > 30 && textSeed <= 40) {
            welcomeText.textContent = 'SEARCH OPTIMISED';
        } else if (textSeed > 40 && textSeed <= 50) {
            welcomeText.textContent = 'INSANELY RESPONSIVE';
        } else if (textSeed > 50 && textSeed <= 60) {
            welcomeText.textContent = 'FORWARD THINKING';
        } else if (textSeed > 60 && textSeed <= 70) {
            welcomeText.textContent = 'FUTURE PROOF';
        } else if (textSeed > 70 && textSeed <= 80) {
            welcomeText.textContent = 'FAST LOADING';
        } else if (textSeed > 80 && textSeed <= 90) {
            welcomeText.textContent = 'KEPT SIMPLE';
        } else {
            welcomeText.textContent = 'INFINITELY SCALABLE';
        }
    }, 3000)
}

function stars() {
    for (var i = 0; i < 50; i++) {
      var star = '<div class="star" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()/1.5+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
      $('stars').append(star);
  }  
}

function scrollToContent() {
    window.scroll({
        top: $(window).height(),
        left: 0,
        behaviour: 'smooth',
    });
}

// Delay 'down to earth' text
function showLandingText() {
    setTimeout(() => {
        scrollMessage.style.display = 'flex';
    }, 2600);
    setTimeout(() => {
        welcomeText.style.display = 'flex';
        webDevText.style.display = 'flex';
    }, 4000);
}

// Event Listeners
scrollMessage.addEventListener('click', scrollToContent);

// On load
stars();
setVideoPlaybackRate();
showLandingText();
randomWelcomeText();