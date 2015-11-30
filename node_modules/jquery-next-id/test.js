describe("jquery.nextid.js", function() {

    beforeEach(function() {
        $('body').empty();
        $('body').append('<div>').append('<div>');
    });

    it("should work with given prefix", function(){
        // execute
        $('div').nextId('my-prefix');
        // assert
        expect($('div').first().prop('id')).toBe('my-prefix-0');
        expect($('div').last().prop('id')).toBe('my-prefix-1');
    });

    it("should work without given prefix", function(){
        // execute
        $('div').nextId();
        // assert
        expect($('div').first().prop('id')).toBe('nid-0');
        expect($('div').last().prop('id')).toBe('nid-1');
    });

    it("should work with new defaults", function(){
        // execute
        $.fn.nextId.defaults.prefix = 'foo';
        $.fn.nextId.defaults.separator = '_';
        $('div').nextId();
        // assert
        expect($('div').first().prop('id')).toBe('foo_0');
        expect($('div').last().prop('id')).toBe('foo_1');
    });
});
