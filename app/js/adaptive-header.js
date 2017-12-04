$(document).ready(function(){

    $(".menu-trigger").click(function () {
        $(".ul-trigger").slideToggle();
    });
    $(window).resize(function(){
        if ($(window).width() > 767) {
            $('.ul-trigger').removeAttr('style');
        };
    });
});
