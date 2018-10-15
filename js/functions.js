var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|Android)/i) != null;
var map = document.getElementById('map');
var areas = new Array();
var fields = new Array();
var polygon;
if(isMobile){
    eventpress = 'touchstart';
    eventunpress = 'touchend'
    eventmove = 'touchmove'
} else {
    eventpress = 'mousedown';
    eventunpress = 'mouseup'
    eventmove = 'mousemove'
}


$(function(){

    setTimeout(function () {
        $('#navigation').fadeIn(1000);
    },5000);
    $('#mouse').on('click', function () {
        $('html,body').stop().animate({'scrollTop': $('#second-page').offset().top}, 300);
    });

    $(window).resize(function(){
        $(".first-page").css({"min-height":$("#content-size").height()});
    });
    $(window).resize();

    $(".philosophy-bookmarks-icon").on("click", function () {
        $(".philosophy-bookmarks-icon").removeClass('active');
        $(this).addClass('active');
        $('.philosophy-bookmarks-ghost').css({'left':$(this).index() * 16.6666+"%"});
        $('.philosophy-bookmarks-active').css({'left':$(this).index() * 16.6666+"%"});
        $('.philosophy-block-text').removeClass('active');
        $('.philosophy-block-text').eq($(this).index()).addClass('active');
    });
    $(".car-table-info-bookmark").on("click", function () {
        $(".car-table-info-bookmark").removeClass('active');
        $(this).addClass('active');
        $('.car-table-info-text').removeClass('active');
        $('.car-table-info-text').eq($(this).index()).addClass('active');
    });
    $(".car-table-title").on("click", function () {
        $(this).parent().toggleClass('active');
        if ($(this).parent().hasClass('active')){
            $(this).parent().find('.car-table-info').slideDown(300);
        }else{
            $(this).parent().find('.car-table-info').slideUp(300);
        }
    });
    $(".form-page-block-title").on("click", function () {
        if (!$(this).parent().hasClass('active')){
            $(".form-page-block").removeClass('active');
            $(this).parent().addClass('active');
            $('.form-page-block form').slideUp(300);
            $(this).parent().find('form').slideDown(300);
        }
    });
    $(".rules").on("click", function () {
        $(this).toggleClass('active');
        $('.rules').removeClass('error');
    });
    $(".philosophy-player-img").on("click", function () {
        $(this).hide();
        $('.philosophy-player iframe').attr("src", 'https://www.youtube.com/embed/Ggwx0ULoLow?autoplay=true');
    });

    $('body').on('mousemove', function (e) {
        if (e.pageX > $(window).width()-$(window).width()/3){
            $('.navigation').addClass('active');
        }else{
            $('.navigation').removeClass('active');
        }
    });
    $(".catalog-type a").on('click', function () {
        $(".catalog-type a").removeClass('active');
        $(this).addClass('active');
        if ($(this).index() == 0){
            $(".car-list.modern").show();
            $(".car-list.retro").hide();
            $(".car-list.retro").removeClass('active');
            $(".car-list.modern").addClass('active');
        }else{
            $(".car-list.modern").hide();
            $(".car-list.retro").show();
            $(".car-list.modern").removeClass('active');
            $(".car-list.retro").addClass('active');
        }
        return false;
    });

    var slider_modal_ch = 0;
    $("#modal-slider-next").on('click', function () {
        if (!$(this).hasClass('disable')){
            slider_modal_ch++;
            $("#modal-slider-prev").removeClass('disable');
            if (slider_modal_ch == $(".modal-slider-item").length - 1){
                $("#modal-slider-next").addClass('disable');
            }else{
                $("#modal-slider-next").removeClass('disable');
            }
            $("#modal-slider-line").css({"left": -100*slider_modal_ch+"%"});
        }
    });
    $("#modal-slider-prev").on('click', function () {
        if (!$(this).hasClass('disable')){
            slider_modal_ch--;
            $("#modal-slider-next").removeClass('disable');
            if (slider_modal_ch <=0){
                $("#modal-slider-prev").addClass('disable');
            }else{
                $("#modal-slider-prev").removeClass('disable');
            }
            $("#modal-slider-line").css({"left": -100*slider_modal_ch+"%"});
        }
    });
    $("#modal-slider-line").on("click", function () {
        $("#modal-slider").fadeOut(300);
    });
    $(".car-slider-item").on("click", function () {
        slider_modal_ch = $(this).index();
        $("#modal-slider-line").css({"left": -100*slider_modal_ch+"%"});
        $("#modal-slider").fadeIn(300);
    });

    var car_slider_ch = 0;
    $("#car-list-next").on('click', function () {
        car_slider_ch++;
        if (car_slider_ch >= $(".car-list.active .car-row").length - 4){
            car_slider_ch = $(".car-list.active .car-row").length - 4;
        }
        $(".car-list.active .car-list-line").css({"left": -255*car_slider_ch});
    });
    $("#car-list-prev").on('click', function () {
        car_slider_ch--;
        if (car_slider_ch <= 0){
            car_slider_ch = 0;
        }
        $(".car-list.active .car-list-line").css({"left": -255*car_slider_ch});
    });



    $(window).on('scroll', function(){
        if ($('.navigation').length > 0){
            for (var i=0; i<$(".page").length; i++){
                // console.log($(".page-block").eq(i).offset().top - $(window).scrollTop());
                if ($(".page").eq(i).offset().top - $(window).scrollTop() < $("#content-size").height()-300){
                    $(".page").eq(i).find('.page-title-purple').addClass('active');
                    $(".page").eq(i).find('.page-title-purple-ghost').addClass('active');
                }
            }


            if ($(window).scrollTop() > 0){
                $('.navigation').removeClass('always-visible');
            }else{
                $('.navigation').addClass('always-visible');
            }
            if ($(window).scrollTop() < 100){
                // $('.to-bottom').removeClass('black');
            }else if ($(window).scrollTop() > $('.index-fourth-page').position().top - $('.index-fourth-page').height() + 40 && $(window).scrollTop() < $('.index-fourth-page').position().top + 40){
                // $('.to-bottom').removeClass('black');
            }else{
                // $('.to-bottom').addClass('black');
            }

            $('.to-bottom').removeClass('disable');
            // if ($(window).scrollTop() <= $('.index-second-page').position().top - $("#content-size").height() + 200){
            // }else if ($(window).scrollTop() > $('.index-second-page').position().top - $("#content-size").height() + 200 && $(window).scrollTop() < $('.index-second-page').position().top - $("#content-size").height() + 200 + $('.index-second-page').height()){
            // }else if ($(window).scrollTop() > $('.index-third-page').position().top - $("#content-size").height() + 200 && $(window).scrollTop() < $('.index-third-page').position().top - $("#content-size").height() + 200 + $('.index-third-page').height()){
            // }else if ($(window).scrollTop() > $('.index-fourth-page').position().top - $("#content-size").height() + 200 && $(window).scrollTop() < $('.index-fourth-page').position().top - $("#content-size").height() + 200 + $('.index-fourth-page').height()){
            // }else if ($(window).scrollTop() > $('.form-page').position().top - $("#content-size").height() + 200 && $(window).scrollTop() < $('.form-page').position().top - $("#content-size").height() + 200 + $('.form-page').height()){
            // }else{
            // }

            $('.nav-item').removeClass('black');
            if ($(window).scrollTop() <= $('.index-second-page').position().top - $("#content-size").height()/2){
                $('.nav-item.active').removeClass('active');
                $('.nav-item').eq(0).addClass('active');
                $('.to-bottom span.active').removeClass('active');
                $('.to-bottom span').eq(0).addClass('active');
            }else if ($(window).scrollTop() > $('.index-second-page').position().top - $("#content-size").height()/2 + 100 && $(window).scrollTop() < $('.index-second-page').position().top - $("#content-size").height()/2 + 100 + $('.index-second-page').height()){
                $('.nav-item.active').removeClass('active');
                $('.nav-item').eq(1).addClass('active');
                $('.nav-item').addClass('black');
                $('.to-bottom span.active').removeClass('active');
                $('.to-bottom span').eq(1).addClass('active');
            }else if ($(window).scrollTop() > $('.index-third-page').position().top - $("#content-size").height()/2 + 100 && $(window).scrollTop() < $('.index-third-page').position().top - $("#content-size").height()/2 + 100 + $('.index-third-page').height()){
                $('.nav-item.active').removeClass('active');
                $('.nav-item').eq(2).addClass('active');
                $('.nav-item').addClass('black');
                $('.to-bottom span.active').removeClass('active');
                $('.to-bottom span').eq(2).addClass('active');
            }else if ($(window).scrollTop() > $('.index-fourth-page').position().top - $("#content-size").height()/2 + 100 && $(window).scrollTop() < $('.index-fourth-page').position().top - $("#content-size").height()/2 + 100 + $('.index-fourth-page').height()){
                $('.nav-item.active').removeClass('active');
                $('.nav-item').eq(3).addClass('active');
                $('.to-bottom span.active').removeClass('active');
                $('.to-bottom span').eq(3).addClass('active');
            }else if ($(window).scrollTop() > $('.form-page').position().top - $("#content-size").height()/2 - 50 && $(window).scrollTop() < $('.form-page').position().top - $("#content-size").height()/2 - 50 + $('.form-page').height()){
                $('.nav-item.active').removeClass('active');
                $('.nav-item').eq(4).addClass('active');
                $('.nav-item').addClass('black');
                $('.to-bottom span.active').removeClass('active');
                $('.to-bottom span').eq(4).addClass('active');
                $('.to-bottom').addClass('disable');
            }else if ($(window).scrollTop() >= $('.form-page').position().top - $("#content-size").height()/2 - 50 + $('.form-page').height()){
                $('.nav-item.active').removeClass('active');
                $('.nav-item').eq(5).addClass('active');
                $('.to-bottom').addClass('disable');
            }
        }

    });

    $(".order-btn").on('click', function () {
        $('html,body').stop().animate({'scrollTop': $("#form-page").offset().top}, 500);
        $(".form-page-block").eq(0).find('.form-page-block-title').click();
        $('#get-car-brand').addClass('green');
        $('#get-car-model').addClass('green');
        $('#get-car-year').addClass('green');
        $('#get-car-brand').val('Ferrari');
        $('#get-car-model').val('Portofino');
        $('#get-car-year').val('2017');
        return false;
    });

    $(".car-order-btn").on('click', function () {
        $('#modal-form').fadeIn(300);
        return false;
    });
    $("#close-modal-form").on('click', function () {
        $('#modal-form').fadeOut(300);
        return false;
    });

    $(".nav-item").on('click', function () {
        $('html,body').stop().animate({'scrollTop': $($(this).data('href')).offset().top}, 500);
        return false;
    });
    $(".to-bottom").on('click', function () {
        var p_ch = $('.nav-item.active').index();
        p_ch += 1;
        $(".nav-item").eq(p_ch).click();
        return false;
    });
    $(".main-menu a").on('click', function () {
        $('html,body').stop().animate({'scrollTop': $($(this).attr('href')).offset().top}, 500);
        return false;
    });

    var  slide_ch = 0;
    $(".slider-next").on('click', function(){
        slide_ch++;
        if (slide_ch >= $('.car-slider-item').length-2){
            slide_ch = $('.car-slider-item').length-3;
        }
        $('.car-slider-items-list').css({"left": -slide_ch*$('.car-slider-items').width()/2.92});
    });
    $(".slider-prev").on('click', function(){
        slide_ch--;
        if (slide_ch <0){
            slide_ch = 0;
        }
        $('.car-slider-items-list').css({"left": -slide_ch*$('.car-slider-items').width()/2.92});
    });

    var videopreview;
    if (!isMobile){
        $('.car-item').hover(function () {
            if ($(this).find('video').length > 0){
                videopreview = document.getElementById('car-item-video'+($(this).index() + 1));
                videopreview.currentTime = 0;
                videopreview.play();
                $('#car-item-video'+($(this).index() + 1)).show();
            }
        }, function () {
            if ($(this).find('video').length > 0) {
                videopreview.pause();
                $('#car-item-video' + ($(this).index() + 1)).hide();
            }
        });
    }

    $("#subscribe-form button").on("click", function () {
        var pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/i;
        if ( !pattern.test($("#subscribe-form input").val())){
            $("#subscribe-form input").addClass('error');
        }else{
            $("#subscribe-form input").removeClass('error');
        }
        if (!$('.rules').hasClass('active')){
            $('.rules').addClass('error')
        }else{
            $('.rules').removeClass('error')
        }
        return false;
    });


    $(document).on('click', '#gallery div div', function () {
        $(this).parent().remove();
        if ($('#gallery div div').length == 0){
            $('.form-upload-placehoder').fadeIn();
            $('#gallery').removeClass('active');
        }
    });

    if ($(".inner-title-line").length > 0){
        $('.inner-title-line .page-title-purple').addClass('active');
        $('.inner-title-line .page-title-purple-ghost').addClass('active');
    }

});





