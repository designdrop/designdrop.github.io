$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
    
    //        var s = skrollr.init();
    //        smoothScrolling: false,
    //$(window).load(function(){
    //    console.log("Loaded");
    //    
    //    setTimeout(function () {
    //  skrollr.get().refresh();
    //}, 0);
    //            
    //    $(window).trigger('resize');
    //    s.refresh();
    //});
    //       

    var s = skrollr.init({
        //    scale: 5,
        smoothScrolling: false,

        render: function(data) {
            //Log the current scroll position.
            $('#info').text(data.curTop);
        }
    });
});