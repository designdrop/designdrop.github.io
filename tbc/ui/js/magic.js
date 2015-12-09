jQuery(document).ready(function($)
{

  // $('body').imagesLoaded( function() {
  //
  //   $(function () {
  //       $('body').addClass('loaded');
  //   });
  //
  //
  // });


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
      if (this.group.length > 1){
      list.appendTo('body');
    }
    }

    list.find('li').removeClass('active').eq(this.index).addClass('active');
  }


// loop videos
  function removeLinks()
  {
    $("#links").remove();
  }

  function loopVideos()
  {
    $('video').attr('loop');
  }

  // GoogleAnalytics
  // function  gaSPA()
  // {
  //   $.ga('send', 'pageview', this.href);
  // }


// if URL link contains hash - open fancybox
  var urlHash = window.location.hash.substr(1);

  if (urlHash != 0)
  {
    $.fancybox.open(window["" + urlHash + ""],
    {
      beforeShow: function () {
            if (this.title) {
                // New line
                this.title += '<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />';

    		    this.title += '<a href="https://www.tumblr.com/share" class="twitter-share-button btn-mus" data-count="none" data-url="' + this.href + '"><i class="fa fa-music"></i></a> ';

               this.title += '<a href="https://twitter.com/share" class="twitter-share-button btn" data-count="none" data-url="' + this.href + '"><i class="fa fa-twitter"></i>&nbsp;Tweet</a> ';



              // Add FaceBook like button
                this.title += '<a href="https://facebook.com/share" class="twitter-share-button btn-fc" data-count="none" data-url="' + this.href + '"><i class="fa fa-facebook"></i>&nbsp;Facebook</a> ';

    			// Add Tumblr like button
                this.title += '<a href="https://www.tumblr.com/share" class="twitter-share-button btn-tm" data-count="none" data-url="' + this.href + '"><i class="fa fa-tumblr"></i>&nbsp;Tumblr</a> ';
            }
        },

      nextEffect: 'fade',
      prevEffect: 'fade',
      padding: [35, 10, 15, 10],
      margin: [5, 5, 40, 5],
      width: 1300,
      height: 804,
      autoSize: false,
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





//fancybox init for standard click
  $(".fancybox").click(function()
  {
    $.fancybox.open(window["" + $(this).attr('id') + ""],
    {
      beforeShow: function () {
            if (this.title) {
                // New line
                this.title += '<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />';

    		    this.title += '<a href="https://www.tumblr.com/share" class="twitter-share-button btn-mus" data-count="none" data-url="' + this.href + '"><i class="fa fa-music"></i></a> ';

               this.title += '<a href="https://twitter.com/share" class="twitter-share-button btn" data-count="none" data-url="' + this.href + '"><i class="fa fa-twitter"></i>&nbsp;Tweet</a> ';



              // Add FaceBook like button
                this.title += '<a href="https://facebook.com/share" class="twitter-share-button btn-fc" data-count="none" data-url="' + this.href + '"><i class="fa fa-facebook"></i>&nbsp;Facebook</a> ';

    			// Add Tumblr like button
                this.title += '<a href="https://www.tumblr.com/share" class="twitter-share-button btn-tm" data-count="none" data-url="' + this.href + '"><i class="fa fa-tumblr"></i>&nbsp;Tumblr</a> ';
            }
        },

      nextEffect: 'fade',
      prevEffect: 'fade',
      padding: [35, 10, 50, 10],
      margin: [5, 5, 5, 5],
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
        },
		 buttons: {}
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

  });


//header video init
  $('.header-video').each(function(i, elem)
  {
    headerVideo = new HeaderVideo(
    {
      element: elem,
      media: '.header-video__media'
    });
  });

//   var scplayer = new SoundCloudPlayer(
//     [ "/royalbassrecords/sets/dubstep"
//     , "/diplo/sleigh-bells-demons-diplo"
//     , "/abdecaf/feedyourbrain"
//     ]
//     , {consumer_key: "XXXXXXXXXXXXXX", preload: true}
// );

}); // ready
