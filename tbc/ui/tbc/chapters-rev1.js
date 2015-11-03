var fancybox_featured = [{
    href: 'https://www.craigwasselphotoart.com/portrait_and_event_photography/portfolio/featured/images/711_8171_m.jpg'
}, {
    href: 'https://www.craigwasselphotoart.com/portrait_and_event_photography/portfolio/featured/images/813_0373.jpg'
}, {
    href: 'https://www.craigwasselphotoart.com/portrait_and_event_photography/portfolio/featured/images/711_8751.jpg'
}];
var fancybox_playtime = [{
    href: 'https://www.craigwasselphotoart.com/portrait_and_event_photography/portfolio/playtime_candids/images/813_9107.jpg'
}, {
    href: 'https://www.craigwasselphotoart.com/portrait_and_event_photography/portfolio/playtime_candids/images/712_7957.jpg'
}, {
    href: 'https://www.craigwasselphotoart.com/portrait_and_event_photography/portfolio/playtime_candids/images/300_5089.jpg'
}];
var fancybox_autumn = [{
    href: 'https://www.craigwasselphotoart.com/portrait_and_event_photography/portfolio/Fall_Autumn/images/814_8995.jpg'
}, {
    href: 'https://www.craigwasselphotoart.com/portrait_and_event_photography/portfolio/Fall_Autumn/images/814_5998.jpg'
}, {
    href: 'https://www.craigwasselphotoart.com/portrait_and_event_photography/portfolio/Fall_Autumn/images/814_6016.jpg'
}];
jQuery(document).ready(function($) {
    $(".fancybox").click(function() {
        $.fancybox.open(window["" + $(this).data("album") + ""]);
    });
}); // ready
