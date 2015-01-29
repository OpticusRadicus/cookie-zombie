$(window).load(function(){
$(document).ready(function() {
    $('.header').scrollToFixed({
     
    });
    $('#summary').scrollToFixed({
        marginTop: $('.header').outerHeight() + 10,
        limit: $('.footer').offset().top - $('#summary').outerHeight() - 10,
        zIndex: 999,
        
    });
});
}); 