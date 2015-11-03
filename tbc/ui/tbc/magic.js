
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
    //

    jQuery(document).ready(function($) {
    $(".fancybox").click(function() {
        $.fancybox.open(window["" + $(this).data("album") + ""], {
          nextEffect  : 'fade',
          prevEffect  : 'fade',
          padding     : 0,
          margin      : [15, 15, 50, 15],
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
