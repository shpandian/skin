'use strict';

var $ = require('jquery');

window.$ = $;
window.jQuery = $;

var dialogWidget = function() {

    function getTransitionTime(el) {
        return ($(el).hasClass('dialog--subpage') || $(el).hasClass('dialog--panel')) ? 375 : 175;
    }

    $('.dialog-open').on('click', function() {
        var $this = $(this),
            dialogId = $this.data('dialog'),
            $dialog = $('#'+dialogId);

        $dialog.dialog({transitionDurationMs:getTransitionTime($dialog)});

        $dialog.on('close.dialog', function() {
            $this.focus();
        });
    });
};

module.exports = dialogWidget;
