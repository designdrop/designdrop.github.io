jQuery(document).ready(function($){

$(document).on('click', '#font_awesome', function () {
    $('.share-menu').toggle();
    // $('#font_awesome').css('display','none');
});	
var  song_source;
$(document).on('click', '#ch0act01_1_01', function () {
	
	 song_source = 'lela.mp3';
	//var  song_source = 'Emotional_Saiyaan.mp3';
});
$(document).on('click', '#ch0act01_1_02', function () {
	
	 // song_source = 'lela.mp3';
	song_source = 'Emotional_Saiyaan.mp3';
});	
$(document).on('click', '#ch0act01_1_03', function () {
	
	 // song_source = 'lela.mp3';
	song_source = 'gerua.mp3';
});		
			
				
// if link contains hash open fancybox
  var urlHash = window.location.hash.substr(1);

  if (urlHash != 0)
  {
    $.fancybox.open(window["" + urlHash + ""],
    {

      nextEffect: 'fade',
      prevEffect: 'fade',
      padding: [35, 10, 15, 10],
      margin: [5, 5, 40, 5],
      width: 1300,
      height: 804,
      autoSize: false,
      aspectRatio: 'true',
      helpers:
      {
        title:
        {
          type: 'inside',
          position: 'top'
        }
      },
      wrapCSS: 'tbcss',
      tpl:
      {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;">close X</a>'
      },
      loop: false,
      afterLoad: addLinks,
      beforeClose: removeLinks
    });
  }

// Dotted Navigation for fancybox
  function addLinks()
  {
    var list = $("#links");

    if (!list.length)
    {
      list = $('<ul id="links">');

      for (var i = 0; i < this.group.length; i++)
      {
        $('<li data-index="' + i + '"><label></label></li>').click(function()
        {
          $.fancybox.jumpto($(this).data('index'));
        }).appendTo(list);
      }

      list.appendTo('body');
    }

    list.find('li').removeClass('active').eq(this.index).addClass('active');
  }

  function removeLinks()
  {
    $("#links").remove();
  }

  function loopVideos()
  {
    $('video').attr('loop');
  }

   
   
				
   var gallery_flag = 'yes';
  // var  song_source = 'Emotional_Saiyaan.mp3';
   
   // var  song_source = 'lela.mp3';
//fancybox init for standard click

  $(".fancybox").click(function()
  {
    $.fancybox.open(window["" + $(this).attr('id') + ""],
    {
	beforeShow: function () {
        if (this.title) {
            // New line
            // this.title += '<br />';
          
			 
			$('.fancybox-inner').append('<audio id="audio-player" controls="controls" autoplay="autoplay"><source src=' + song_source +' type="audio/mpeg"></audio>');
			  $('.fancybox-inner').append('<a id="font_awesome" class="font-awesome" href="#"><i class="fa fa-share-alt"></i></a><div class="share-menu"><a href="http://www.twitter.com/share?url='+ 'http://tbcnetwork.com/'+ this.href + '"><i class="fa fa-twitter"></i></a><a href="http://www.facebook.com/sharer.php?u=' + 'http://tbcnetwork.com/'+ this.href + '" data-count="none" target="_blank" ><i class="fa fa-facebook"></i></a> <a href="http://www.tumblr.com/share/link?url=' + 'http://tbcnetwork.com/'+ this.href + '" data-count="none" target="_blank" ><i class="fa fa-tumblr"></i></a><a data-pin-do="buttonPin" href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkentbrew%2F6851755809%2F&media=http://tbcnetwork.com/'+ this.href + '&description=Next%20stop%3A%20Pinterest"><i class="fa fa-pinterest"></i></a><a data-count="none" target="_blank" href="http://www.linkedin.com/shareArticle?url=http://tbcnetwork.com/'+ this.href + '"><i class="fa fa-linkedin"></i></a></div>');
			  

        }
    },

	afterShow: function () {
        // Render tweet button
        twttr.widgets.load();
    },
      nextEffect: 'fade',
      prevEffect: 'fade',
      padding: [35, 10, 100, 10],
      margin: [5, 5, 40, 5],
      width: 1300,
      height: 804,
      autoSize: false,
      aspectRatio: 'true',
      helpers:
      {
        title:
        {
          type: 'inside',
          position: 'bottom'
        },
		 buttons: {}
      },
      wrapCSS: 'tbcss',
      tpl:
      {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;">Close X</a>',
		
      },
      loop: false,
	  cyclic     : true,
      afterLoad: addLinks,
      beforeClose: removeLinks,
	  
    });
	

  });
  // music repeat null 
 song_source = null; 

//header video init
  $('.header-video').each(function(i, elem)
  {
    headerVideo = new HeaderVideo(
    {
      element: elem,
      media: '.header-video__media',
      playTrigger: '.header-video__play-trigger',
      closeTrigger: '.header-video__close-trigger'
    });
  });
}); // ready
