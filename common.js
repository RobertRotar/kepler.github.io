$(window).scroll(function() {
    var st = $(this).scrollTop();
    $('.sect_2').css({
        "transform" : "translate(0%, -" + st/20 +"%"
    });
});