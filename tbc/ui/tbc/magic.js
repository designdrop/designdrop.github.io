
    // $(".open_fancybox").click(function() {
    // $.fancybox.open(chapters[chapterNumber], {
    //   nextEffect  : 'fade',
    //   prevEffect  : 'fade',
    //   padding     : 0,
    //   margin      : [15, 15, 50, 15],
    //   afterLoad   : addLinks,
    //   beforeClose : removeLinks
    //   });

    // var chapterNumber = $(this).attr( "number" );
    // // console.log(chapterNumber);
    //
    // var spit = chapters[chapterNumber];
    // console.log(spit);
    //  $.fancybox.open(window["" + $(this).data("album") + ""], {
    // data-album='fancybox_playtime'
    //



    jQuery(document).ready(function($) {

      $('.header-video').each(function(i, elem) {
          headerVideo = new HeaderVideo({
            element: elem,
            media: '.header-video__media',
            playTrigger: '.header-video__play-trigger',
            closeTrigger: '.header-video__close-trigger'
          });
      });

    $(".fancybox").click(function() {
        $.fancybox.open(window["" + $(this).attr('id') + ""], {
          nextEffect : 'fade',
          prevEffect : 'fade',
          padding     : [35, 10, 15, 10],
          margin      : [0, 0, 20, 0],
        //   beforeShow: function () {
        //     if (this.title) {
        //         // New line
        //         this.title += '<br />';
        //
        //         // Add tweet button
        //         this.title += '<a href="https://twitter.com/share" class="twitter-share-button" data-count="none" data-url="' + this.href + '">Tweet</a> ';
        //
        //         // Add FaceBook like button
        //         this.title += '<iframe src="//www.facebook.com/plugins/like.php?href=' + this.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:110px; height:23px;" allowTransparency="true"></iframe>';
        //     }
        // },
        // afterShow: function() {
        //     // Render tweet button
        //     twttr.widgets.load();
        // },
            helpers : {
            title: {
              type: 'inside',
                position: 'top'
              }
            },
          wrapCSS : 'tbcss',
          tpl : {
            	wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
              closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;">close X</a>'
            },
          loop : false,
          afterLoad   : addLinks,
          beforeClose : removeLinks
          });

          function addLinks() {
          var list = $("#links");

          if (!list.length) {
              list = $('<ul id="links">');

              for (var i = 0; i < this.group.length; i++) {
                  $('<li data-index="' + i + '"><label></label></li>').click(function() { $.fancybox.jumpto( $(this).data('index'));}).appendTo( list );
              }

              list.appendTo( 'body' );
          }

          list.find('li').removeClass('active').eq( this.index ).addClass('active');
          }

          function removeLinks() {
          $("#links").remove();
          }

          function loopVideos() {
          $('video').attr('loop');
          }

  });
}); // ready
