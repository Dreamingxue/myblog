//导航栏二级导航
$(function(){
    $('.nav-list>ul>li').mouseenter(function () {
    // $('this').children('a').css("color","#fff")
    // $(this).children('ul').finish().slideDown(100);
    $(this).children('ul').show();
    console.log(1);
})
    $('.nav-list>ul>li').mouseleave(function () {
    console.log(1);

    $('.nav-list > ul > li > ul').hide()
})
})


