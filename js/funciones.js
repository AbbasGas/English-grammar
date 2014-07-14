$(document).ready(function(){

    $(document).foundation();
    $(document).foundation('joyride', 'start');

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.show-vocabulary').fadeIn();
        } else {
            $('.show-vocabulary').fadeOut();
        }
    });
    
    $('.scrollup-index').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    var vocabulary=$(".left-off-canvas-menu > .off-canvas-list").clone();
    $("#vocabularyModal").html(vocabulary.removeClass("off-canvas-list").removeClass("left-off-canvas-menu"));

});