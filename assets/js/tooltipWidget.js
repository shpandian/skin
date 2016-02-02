(function ( $ ) {
    $('.tooltip a').bind('mouseenter focus', function() {
        var element = this;
        setTimeout(function() {
            $(element).next().attr('aria-hidden', 'false');
        }, 200);
    }).on('mouseleave focusout', function() {
        var self = this;
        setTimeout(function() {
            $(self).next('div.flyout-alert').attr('aria-hidden', 'true');
        }, 500);
    });

    $('.bubblehelp button.icon-info').on('click', function(e) {
        if ($(this).attr('aria-expanded') === 'false') {
            $(this).attr('aria-expanded', 'true');
            $(this).next().attr('aria-hidden', 'false');
            $(this).next().fadeIn();
        } else {
            $(this).attr('aria-expanded', 'false');
            $(this).next().attr('aria-hidden', 'true');
            $(this).next().fadeOut();
        }
    });
    $('.bubblehelp .flyout-alert button').on('click', function() {
        $('.bubblehelp button.icon-info').attr('aria-expanded', 'false');
        $(this).parent('.flyout-alert').attr('aria-hidden', 'true');
        $(this).parent('.flyout-alert').fadeOut();
    });
}( jQuery ));
