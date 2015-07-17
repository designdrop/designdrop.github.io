$(document).ready(function () {

    setTimeout(function () {
        $('body').addClass('loaded');
    });

    var s = skrollr.init({
        //        scale: 2,
        //        smoothScrolling: true,

// keyframe helper 
        //        render: function (data) {
        //            //Log the current scroll position.
        //            $('#info').text(data.curTop);
        //        }
    });
    
//    EasterEgg
    $(".clickMe").one("mouseenter", function () {
        $(".easterEgg").append('<img src="imgs/catalyst_easteregg.gif" class="pxl">');
    });
    
    
//Audio Controls
    var audio = document.getElementById('bgAudio');

    document.getElementById('mute').addEventListener('click', function (e) {
        e = e || window.event;
        audio.muted = !audio.muted;
        e.preventDefault();
    }, false);


//increase key stroke down arrow speed
    $('#mute').click(function () {
        $('#audiocontrol').toggleClass("muteAudio playAudio");
    });

    $('.closeSideBox').click(function () {
        $('#sideBox').toggleClass("slideOutRight slideInRight");
    });
    
    

//    $(document).keydown(function(e) {
//    var n = 120;  //Enter the amount of px you want to scroll here
//    if (e.which == 38 && document.activeElement == document.body) {
//        e.preventDefault();
//        document.body.scrollTop -= n;
//    }
//    if (e.which == 40 && document.activeElement == document.body) {
//        e.preventDefault();
//        document.body.scrollTop += n;
//    }
//});
    
//        $('#main-content').updown({
//            step: 10,
//            shiftStep: 100
//        }); 
    

});