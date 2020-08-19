/**
 * @file: scripts.js
 * @author: Paulo Alves
 * @description: responsável pelo funcionamento do carousel.
 * @version 1.0.0 (19/08/2020)
 */

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})