'use strict';
var $ = require('jquery');

var dialogWidget = function() {

    $('#dialog-open').on('click', function() {
        var selector = this;
        $(this).next().css('display', 'block');
        setTimeout(function() {
            $(selector).next().attr('aria-hidden', 'false');
        }, 10);
        $('#dialog-close').focus();
    });

    $('#dialog-close').on('click', function() {
        $('#dialog_window').attr('aria-hidden', 'true');
        setTimeout(function() { 
            $('#dialog_window').css('display', 'none');
        }, 175);
        $('#dialog-open').focus();
    });

    var delay;    
    $('#subpage-dialog').on('click', function() {
        var self = this;
        clearTimeout(delay);
        $(this).next().css('display', 'block');
        setTimeout(function() {
            $(self).next().attr('aria-hidden', 'false');
        }, 10);
        $('#dialog-backarrow').focus();
    });
    $('#dialog-backarrow').on('click', function() {
        $('#dialog_window2').attr('aria-hidden', 'true');
        delay = setTimeout(function() { 
            $('#dialog_window2').css('display', 'none');
        }, 375);
        $('#subpage-dialog').focus();
    });

    var timer;
    var dialogOpen = false;
    $('#panel').on('click', function() {
        var ele = this;
        dialogOpen = true;
        clearTimeout(timer);
        $(this).next().css('display', 'block');
        setTimeout(function() {
            $(ele).next().attr('aria-hidden', 'false');
        }, 20);
    });
    $('#dialog__mask2').on('click', function() {
        closePanel();
        $('#panel').focus();
    });

    document.addEventListener('keydown', function(event) {
        if (dialogOpen && event.keyCode === 27) {
            closePanel();
        }
    }, true);
       
    function closePanel() {
        $('#dialog_panel').attr('aria-hidden', 'true');
        timer = setTimeout(function() { 
            $('#dialog_panel').css('display', 'none');
        }, 375);
    }
};

module.exports = dialogWidget;