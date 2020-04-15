// Animation vers la section de contact

$('.nav-link').click(function(e){
    e.preventDefault;

    var lien = $(this);
    var sectionID = lien.attr('href');
    var positionSectionTop = $(sectionID).offset().top;

    $('html, body').animate({
        scrollTop: positionSectionTop
    },1000, 'swing');
});