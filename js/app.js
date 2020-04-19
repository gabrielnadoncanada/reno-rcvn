header = document.getElementsByTagName('header');
banner = document.getElementsByClassName('hero-banner');
logo_scrolled = document.getElementById('logo-scrolled');
arrow_left = document.getElementById('arrow-left');
arrow_right = document.getElementById('arrow-right');
hauteur = 112;
if (window.pageYOffset > hauteur) {
    logo_scrolled.classList.remove('d-none');
    header[0].classList.add('header-scrolled');

} else {
    header[0].classList.remove('header-scrolled');
    logo_scrolled.classList.add('d-none')
}
window.addEventListener('scroll', () => {
    if (window.pageYOffset > hauteur) {
        logo_scrolled.classList.remove('d-none');
        header[0].classList.add('header-scrolled');

    } else {
        header[0].classList.remove('header-scrolled');
        logo_scrolled.classList.add('d-none')
    }
}, false);

var $owl = $('.owl-carousel');

$owl.owlCarousel({

    loop: true,
    item: 3,
    onDragged: callback,
    responsive:{
        0:{
            items:1,
            onDragged: callback,
        },


        1300:{
            items:3,

        }
    }
});
if(window.innerWidth <= 1300){
    $('.owl-item.active').eq(0).addClass('center');
}
else {
    $('.owl-item.active').eq(1).addClass('center');
}

$('#arrow-right').click(function() {

    $owl.trigger('next.owl.carousel');
    callback();
});

$('#arrow-left').click(function() {
    $owl.trigger('prev.owl.carousel', [300]);
    callback();
});

function callback(event) {

    if(window.innerWidth <= 1300){
        $('.owl-item.active').eq(0).addClass('center');
    }
    else {
        $('.owl-item.active').eq(1).addClass('center');
    }
}
