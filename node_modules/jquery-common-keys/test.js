describe("jquery.commonkeys.js", function() {

    var keyCodes = $.fn.commonKeys.keyCodes;

    beforeAll(function() {
        $('body').empty().append('<div>');
        $('div').commonKeys();
    });

    it("should trigger enterkeydown event", function(done){
        // assert
        $('div').on('enter.commonKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.ENTER, which: keyCodes.ENTER } ));
    });

    it("should trigger enterkeyup event", function(done){
        // assert
        $('div').on('enter.commonKeyUp', done);
        // execute
        $('div').trigger(jQuery.Event( 'keyup', { keyCode: keyCodes.ENTER, which: keyCodes.ENTER } ));
    });

    it("should trigger esckeydown event", function(done){
        // assert
        $('div').on('escape.commonKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.ESCAPE, which: keyCodes.ESCAPE } ));
    });

    it("should trigger esckeyup event", function(done){
        // assert
        $('div').on('escape.commonKeyUp', done);
        // execute
        $('div').trigger(jQuery.Event( 'keyup', { keyCode: keyCodes.ESCAPE, which: keyCodes.ESCAPE } ));
    });

    it("should trigger spacekeydown event", function(done){
        // assert
        $('div').on('space.commonKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.SPACE, which: keyCodes.SPACE } ));
    });

    it("should trigger spacekeyup event", function(done){
        // assert
        $('div').on('space.commonKeyUp', done);
        // execute
        $('div').trigger(jQuery.Event( 'keyup', { keyCode: keyCodes.SPACE, which: keyCodes.SPACE } ));
    });

    it("should trigger pageupkeydown event", function(done){
        // assert
        $('div').on('pageup.commonKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.PAGEUP, which: keyCodes.PAGEUP } ));
    });

    it("should trigger pageupkeyup event", function(done){
        // assert
        $('div').on('pageup.commonKeyUp', done);
        // execute
        $('div').trigger(jQuery.Event( 'keyup', { keyCode: keyCodes.PAGEUP, which: keyCodes.PAGEUP } ));
    });

    it("should trigger pagedownkeydown event", function(done){
        // assert
        $('div').on('pagedown.commonKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.PAGEDOWN, which: keyCodes.PAGEDOWN } ));
    });

    it("should trigger pagedownkeyup event", function(done){
        // assert
        $('div').on('pagedown.commonKeyUp', done);
        // execute
        $('div').trigger(jQuery.Event( 'keyup', { keyCode: keyCodes.PAGEDOWN, which: keyCodes.PAGEDOWN } ));
    });

    it("should trigger endkeydown event", function(done){
        // assert
        $('div').on('end.commonKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.END, which: keyCodes.END } ));
    });

    it("should trigger endkeyup event", function(done){
        // assert
        $('div').on('end.commonKeyUp', done);
        // execute
        $('div').trigger(jQuery.Event( 'keyup', { keyCode: keyCodes.END, which: keyCodes.END } ));
    });

    it("should trigger homekeydown event", function(done){
        // assert
        $('div').on('home.commonKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.HOME, which: keyCodes.HOME } ));
    });

    it("should trigger homekeyup event", function(done){
        // assert
        $('div').on('home.commonKeyUp', done);
        // execute
        $('div').trigger(jQuery.Event( 'keyup', { keyCode: keyCodes.HOME, which: keyCodes.HOME } ));
    });

    it("should trigger leftkeydown event", function(done){
        // assert
        $('div').on('leftarrow.commonKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.LEFTARROW, which: keyCodes.LEFTARROW } ));
    });

    it("should trigger leftkeyup event", function(done){
        // assert
        $('div').on('leftarrow.commonKeyUp', done);
        // execute
        $('div').trigger(jQuery.Event( 'keyup', { keyCode: keyCodes.LEFTARROW, which: keyCodes.LEFTARROW } ));
    });

    it("should trigger upkeydown event", function(done){
        // assert
        $('div').on('uparrow.commonKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.UPARROW, which: keyCodes.UPARROW } ));
    });

    it("should trigger upkeyup event", function(done){
        // assert
        $('div').on('uparrow.commonKeyUp', done);
        // execute
        $('div').trigger(jQuery.Event( 'keyup', { keyCode: keyCodes.UPARROW, which: keyCodes.UPARROW } ));
    });

    it("should trigger rightkeydown event", function(done){
        // assert
        $('div').on('rightarrow.commonKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.RIGHTARROW, which: keyCodes.RIGHTARROW } ));
    });

    it("should trigger rightkeyup event", function(done){
        // assert
        $('div').on('rightarrow.commonKeyUp', done);
        // execute
        $('div').trigger(jQuery.Event( 'keyup', { keyCode: keyCodes.RIGHTARROW, which: keyCodes.RIGHTARROW } ));
    });

    it("should trigger downkeydown event", function(done){
        // assert
        $('div').on('downarrow.commonKeyDown', done);
        // execute
        $('div').trigger(jQuery.Event( 'keydown', { keyCode: keyCodes.DOWNARROW, which: keyCodes.DOWNARROW } ));
    });

    it("should trigger downkeyup event", function(done){
        // assert
        $('div').on('downarrow.commonKeyUp', done);
        // execute
        $('div').trigger(jQuery.Event( 'keyup', { keyCode: keyCodes.DOWNARROW, which: keyCodes.DOWNARROW } ));
    });
});
