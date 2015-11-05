
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
    $(".fancybox").click(function() {
        $.fancybox.open(window["" + $(this).attr('id') + ""], {
          nextEffect : 'fade',
          prevEffect : 'fade',

          padding     : [35, 10, 14, 10],
          margin      : [0, 0, 20, 0],
          helpers : {
            title: {
              type: 'inside',
                position: 'top'
              }
            },
          wrapCSS : 'tbcss',
          tpl : {
            	wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>jenkies</div>',
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
