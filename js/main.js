$(function(){
    $('.our-clients__slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots:true,
        nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.png" alt=""></button>',
    });
    $('.workers-slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots:true,
        fade:true,
        arrows:false
    });
});


/*================VIDEO=================*/
let btnMore = $(".video-content__btn"),
    videoContent = $(".video-content__inner");


$(btnMore).click(function(){
    $(videoContent).slideToggle('active');
});

/*================/VIDEO=================*/