$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	});
    
    var s = skrollr.init({
        //  scale: 2,
      smoothScrolling:false,

        render: function(data) {
            //Log the current scroll position.
            $('#info').text(data.curTop);
        }
    });
//    $(".clickMe").one("click",function(){
//    $(".easterEgg").append('<img src="imgs/catalyst_easteregg.gif" class="pxl x200p">');
//});
   
        $(".clickMe").hover(function(){
    $(".easterEgg").removeClass('hidden');
});
    
    
    
});