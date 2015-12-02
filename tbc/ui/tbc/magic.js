jQuery(document).ready(function($)
{

  var urlHash = window.location.hash.substr(1);

  if (urlHash != 0)
  {
    $.fancybox.open(window["" + urlHash + ""],
    {

      nextEffect: 'fade',
      prevEffect: 'fade',
      padding: [35, 10, 15, 10],
      margin: [5, 5, 40, 5],
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


  $(".fancybox").click(function()
  {
    $.fancybox.open(window["" + $(this).attr('id') + ""],
    {

      nextEffect: 'fade',
      prevEffect: 'fade',
      padding: [35, 10, 15, 10],
      margin: [5, 5, 40, 5],
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

  });


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
