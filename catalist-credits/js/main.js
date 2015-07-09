$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	});
    
    var s = skrollr.init({
        //    scale: 5,
//        smoothScrolling: false,

        render: function(data) {
            //Log the current scroll position.
            $('#info').text(data.curTop);
        }
    });
});