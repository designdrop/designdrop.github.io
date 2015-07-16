$(document).ready(function () {

    setTimeout(function () {
        $('body').addClass('loaded');
    });

    var s = skrollr.init({
        //  scale: 2,
        smoothScrolling: false,

        render: function (data) {
            //Log the current scroll position.
            $('#info').text(data.curTop);
        }
    });
    $(".clickMe").one("mouseenter", function () {
        $(".easterEgg").append('<img src="imgs/catalyst_easteregg.gif" class="pxl">');
    });

    var audio = document.getElementById('bgAudio');

    document.getElementById('mute').addEventListener('click', function (e) {
        e = e || window.event;
        audio.muted = !audio.muted;
        e.preventDefault();
    }, false);



    $('#mute').click(function () {
        $('#audiocontrol').toggleClass("muteAudio playAudio");
    });

    $('.closeSideBox').click(function () {
        $('#sideBox').toggleClass("slideOutRight slideInRight");
    });


});