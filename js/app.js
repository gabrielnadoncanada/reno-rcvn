$(document ).ready(function() {
header = document.getElementsByTagName('header');
banner = document.getElementsByClassName('hero-banner');
logo_scrolled = document.getElementById('logo-scrolled');
arrow_left = document.getElementById('arrow-left');
arrow_right = document.getElementById('arrow-right');
hauteur = 112;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > hauteur) {
        header[0].classList.add('header-scrolled');

    } else {
        header[0].classList.remove('header-scrolled');
    }
}, false);

var $owl = $('.owl-carousel');
$owl.trigger('refresh.owl.carousel');
$owl.owlCarousel({
    loop: true,
    item: 3,
    onDragged: callback,
    responsive: {
        0: {
            items: 1,
            onDragged: callback,
        },
        1300: {
            items: 3,
        }
    }
});

callback();

if (window.innerWidth <= 1300) {
    $('.owl-item.active').eq(0).addClass('center');
} else {
    $('.owl-item.active').eq(1).addClass('center');
}

$('#arrow-right').click(function () {
    $owl.trigger('next.owl.carousel');
    callback();
});

$('#arrow-left').click(function () {
    $owl.trigger('prev.owl.carousel', [300]);
    callback();
});

function callback(event) {
    if (window.innerWidth <= 1300) {
        $('.owl-item.active').eq(0).addClass('center');
    } else {
        $('.owl-item.active').eq(1).addClass('center');
    }
}

$('.menu-mobile .has-submenu').click(function () {
    $('.menu-mobile .submenu').toggleClass('d-none');
});

$('.projets-filter > li').on('click', function(){
    $('.projets-filter > li').removeClass('active');
    $(this).addClass('active');
    filter($(this).data('tag'));
});

$('#button-mobile-menu').on('click', function () {
    toggleMenu()
});

$('#back').on('click', function(){
    toggleMenu();
});

$('.menu-mobile a[href]').on('click', function(){
    toggleMenu();
});

function toggleMenu(){
    $('.navbar-toggle').toggleClass('opened');
    $('header').toggleClass('opened');
    $('#back').toggleClass('open');

    $('html').toggleClass('disable-overflow');
}

function filter(tag){
    $('#projets .grid > div').each(function(){
        let tagged = $(this).data('tag');
        if(tagged === tag || tag === "all"){
            $(this).show();
        }
        else{
            $(this).hide();
        }
    });
}

$("#my-form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
        alert("Merci nous avons bien reçu votre message!");
    });
});

});