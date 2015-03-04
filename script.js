jQuery(document).ready(function(){
    $(window).scroll(function(e){
        parallaxScroll();
    });

    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('#wall_1').css('background-position', 'left ' + scrolled * .25 + '%');
        if($(window).scrollTop() > $(window).height()) {
            $('#wall_2').css('background-position', 'center' + scrolled * .25 + '%');
        }
    }
});

