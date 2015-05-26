'use strict';
var $ = require('jquery');

var dialogWidget = function () {
  
    var closebox = $('.dialog__close');
   $('#dialog-open').click(function(e){
      e.preventDefault();
      $('#dialog_window').attr('aria-hidden', 'false');
       closebox.focus();
    });
    $('.dialog__close').click(function() {
      $('#dialog_window').attr('aria-hidden', 'true');
      $('#dialog-open').focus();
    });

};  

module.exports = dialogWidget;