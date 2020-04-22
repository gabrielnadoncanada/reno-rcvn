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


$( document ).ready(function() {
    callback();
});



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


let clicked = false;
$('.menu-mobile .has-submenu').click(function () {
    if (clicked == false) {
        $('.menu-mobile .submenu').removeClass('d-none');
        clicked = true;
    } else {
        $('.menu-mobile .submenu').addClass('d-none');
        clicked = false;
    }
});

let open = false;
$('#button-mobile-menu').on('click', function () {
    $('.navbar-toggle').toggleClass('opened');
    if(open == false){
        $('.menu-mobile').removeClass('d-none');
        $('html').addClass('disable-overflow');
        open = true;
    }
    else {
        $('.menu-mobile').addClass('d-none');
        $('html').removeClass('disable-overflow');
        open = false;
    }
});

$owl.trigger('refresh.owl.carousel');
