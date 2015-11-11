'use strict';
var $ = require('jquery');

var menuWidget = function() {

    var $button =  $('header .menu button');
    var $links = $('header .menu a');

    $button.on('click', function() {
        var isExpanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', isExpanded ? 'false' : 'true');
    });

    $links.on('click', function() {
        $button.attr('aria-expanded', 'false');
    });

};

module.exports = menuWidget;
