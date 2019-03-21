( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} )( jQuery );




// Init Skrollr
var s = skrollr.init();
 
// Refresh Skrollr after resizing our sections
s.refresh($('.homeSlide'));