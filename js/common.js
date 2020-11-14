jQuery(document).ready(function ($) {

    $('select').selectric();


    $(".price_slider").on("slidechange", function (event, ui) {
        setTimeout(function () {
            $('.woocommerce.widget_price_filter form').submit();
        }, 500)
    });

    $('.price_slider_amount-inputs input[type="text"]').on('keydown', function () {
        setTimeout(function () {
            $('.woocommerce.widget_price_filter form').submit();
        }, 500)
    });

    var idCollapse = '';
    $('[data-toggle="collapse"]').each(function () {
        idCollapse = $(this).next().attr('id');
        $(this).attr('data-target', '#' + idCollapse);
    });

    $('.widget-title').click(function () {
        $(this).toggleClass('active');
        $(this).parent('.widget').toggleClass('active');
        $(this).siblings().slideToggle(200);
    });


    $('.widget>ul>li:nth-of-type(1n+4)').addClass('hide');

    $('.widget>ul').each(function () {
        if ($(this).find('li').length > 3) {
            $(this).after("<div class='hideList-btn'>+ Больше</div>");
        }
    });

    $('.hideList-btn').click(function () {
        $(this).toggleClass('active');
        $(this).prev('ul').find('li.hide').toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).text("- Скрыть");
        } else {
            $(this).text("+ Больше");
        }
        $(this).prev('ul').find('li.hide').slideToggle(200);
    });


    $('.products').append("<li class='product product--hidden'></li><li class='product product--hidden'></li>");
    $('.main__products').append("<li class='main__products-item main__products-item--hidden'></li><li class='main__products-item main__products-item--hidden'></li><li class='main__products-item main__products-item--hidden'></li>");


    // setTimeout(function () {
    //     //     $('.woocommerce-widget-layered-nav-list').each(function () {
    //     //         console.log();
    //     //         $xxx = $(this).parent().attr('id');
    //     //         $(this).attr('id', $xxx);
    //     //         $(this).prev('.widget-title').attr('data-target', '#' +  $xxx);
    //     //     });
    //     //
    //     // }, 1100)

    // $("input[type='tel']").inputmask({"mask": "+7(999) 999-9999"});


    // var certificatesSwiper = new Swiper('.certificates-slider__slider .swiper-container', {
    //     loop: false,
    //     slidesPerView: 5,
    //     spaceBetween: 24,
    //     speed: 600,
    //      // autoHeight: true,
    //     // autoplay: {
    //     //     delay: 3000
    //     // },
    //     navigation: {
    //         nextEl: '.certificates-slider__slider .certificates-slider__slider-next',
    //         prevEl: '.certificates-slider__slider .certificates-slider__slider-prev',
    //     },
    //       pagination: {
    //         el: '.main__slider .swiper-pagination',
    //         type: 'bullets',
    //         clickable: true,
    //     },
    //     breakpoints: {
    //         1199: {
    //             spaceBetween: 24,
    //             slidesPerView: 4,
    //         },
    //         989: {
    //             spaceBetween: 24,
    //             slidesPerView: 3,
    //         },
    //         767: {
    //             spaceBetween: 24,
    //             slidesPerView: 2,
    //         },
    //         575: {
    //             spaceBetween: 24,
    //             slidesPerView: 1,
    //         }
    //     },
    // });


    // $('.footer__up').click(function () {
    //     $("html, body").stop().animate({scrollTop: 0}, 800);
    // });


    // $('.burger').click(function () {
    //     $('body').toggleClass('modal-open');
    //     $('.header__mobile-open').toggleClass('active');
    // });


    // $('.page table').wrap("<div class='scrollbar scrollbar--horizontal'></div>");
    // document.querySelectorAll('.scrollbar').forEach(el => {
    //     new SimpleBar(el, {
    //         autoHide: false
    //     });
    // });


});