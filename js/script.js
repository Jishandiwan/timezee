$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        1024:{
            items:2
        },
        1025:{
            items: 3
        }
  
    }
})
})