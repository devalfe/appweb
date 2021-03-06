new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 60, // Integer. How far to offset the scrolling anchor location in pixels

});

/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });

});

/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
$(window).scroll(function () {

    var nav = $('.encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        nav.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
    }
});


jQuery(document).ready(function () {

    /*
        Background slideshow
    */
    $('.top-content').backstretch("../images/fondo-grande.jpg");

    /*
        Modals
    */
    $('.launch-modal').on('click', function (e) {
        e.preventDefault();
        $('#' + $(this).data('modal-id')).modal();
    });

});

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

var $item = $('.carousel .carousel-item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');
$('.carousel .figure').each(function () {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
        'background-image': 'url(' + $src + ')',
        'background-color': $color,

    });
    $(this).remove();
});

$(window).on('resize', function () {
    $wHeight = $(window).height();
    $item.height($wHeight);
});


// Carousel Auto-Cycle
$(document).ready(function () {
    $('.carousel').carousel({
        interval: 8000
    })
});




$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5
    });
});
