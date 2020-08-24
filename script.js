const landingVideo = document.getElementById('landing-video');
const scrollMessage = document.querySelector('.scroll');
const welcomeText = document.getElementById('welcome-text');
const webDevText = document.getElementById('web-dev-text');
const starryNight = document.getElementById('stars-container');

let intervalTimer

// Set landing video playbackrate
function setVideoPlaybackRate() {
    landingVideo.playbackRate = 0.5;
}

function changeHeaderText(message) {
    webDevText.textContent = message;
}

function changeRepeatSpeed(interval, message) {
    clearInterval(intervalTimer);
    randomWelcomeText(interval);
    changeHeaderText(message);
    console.log('apple')
}

function randomWelcomeText(interval) {
    intervalTimer = setInterval(() => {
        textSeed = Math.random() * 100;
        if (textSeed <= 10) {
            welcomeText.textContent = 'DATA DRIVEN';
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
    }, interval)
}

function makeStar(starNumber) {
    starryNight.innerHTML = '';
    const numberOfStars = starNumber;
    videoTop = landingVideo.getBoundingClientRect().top;
    videoSize = (landingVideo.getBoundingClientRect().bottom - landingVideo.getBoundingClientRect().top) / 2.25
    for (let i = 0; i < numberOfStars; i++) {
        let stars = document.createElement('div');
        stars.classList.add('star');
        const animationDuration = (Math.random()*5) + 5;
        const animationDelay = (Math.random()*5) + 5;
        const animationTop = Math.random()*(videoTop + videoSize);
        const animationLeft = Math.random()*window.innerWidth;
        starsFullAnimation = `twinkle ${animationDuration}s linear ${animationDelay}s infinite`;
        stars.style.animation = starsFullAnimation.toString();
        stars.style.top = `${animationTop}px`
        stars.style.left = `${animationLeft}px`
        starryNight.appendChild(stars);
    }
}

function determineStarNumber() {
    const windowSize = window.innerWidth * window.innerHeight / 1000;
    if (windowSize <= 400) {
        makeStar(75);
    } else if (windowSize <= 1000) {
        makeStar(100);
    } else {
        makeStar(150);
    }
}

// scroll down to first content
function scrollToFirstContent() {
    window.scroll({
        top: window.innerHeight,
        left: 0,
        behaviour: 'smooth',
    });
}

// Delay 'down to earth' text
function showLandingText() {
    setTimeout(() => {
        scrollMessage.style.display = 'flex';
    }, 2500);
    setTimeout(() => {
        welcomeText.style.display = 'flex';
        webDevText.style.display = 'flex';
    }, 2500);
}

// Event Listeners
scrollMessage.addEventListener('click', scrollToFirstContent);
welcomeText.addEventListener('mouseover', () => {changeRepeatSpeed(10, "woah that's fast!");});
welcomeText.addEventListener('mouseout', () => {changeRepeatSpeed(1500, "web development that's...");});

window.onresize = () => { setTimeout(() => {
    determineStarNumber()
}, 100)};

window.onload = () => { setTimeout(() => {
        determineStarNumber();
}, 100)}; 

// On load
setVideoPlaybackRate();
showLandingText();
randomWelcomeText(1500);