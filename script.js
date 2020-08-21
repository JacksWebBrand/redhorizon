for (var i = 0; i < 100; i++) {
    var star = '<div class="star" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()/2.25+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
    $('stars').append(star);
}