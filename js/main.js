$(function(){
    'use strict';
    //adjust slider height
    var winH   =$(window).height(),
        upperH =$('.upperbar').innerHeight(),
        navH   =$('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH -(upperH + navH));


//Featured Work Shuffle
$('.featuredwork ul li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class')==='all'){
        $('.shuffle-img .col-md').css('opacity',1);
    } else{
        $('.shuffle-img .col-md').css('opacity','0.1');
        $($(this).data('class')).parent().css('opacity',1);
    }
});
});