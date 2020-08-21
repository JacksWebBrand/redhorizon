const landingVideo = document.getElementById('landing-video');

function setVideoPlaybackRate() {
    landingVideo.playbackRate = 0.5;
}

function stars () {
  for (var i = 0; i < 50; i++) {
    var star = '<div class="star" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()/1.5+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
    $('stars').append(star);
    console.log('star');
}  
}

// On load
stars();
setVideoPlaybackRate();