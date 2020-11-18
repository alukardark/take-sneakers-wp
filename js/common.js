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


    $('.widget>ul>li:nth-of-type(1n+4)').not('.chosen').addClass('hide');

    $('.widget>ul').each(function () {
        if ($(this).find('li').length > 3) {
            if ($(this).find('li:nth-of-type(1n+4)').not('.chosen').length > 0) {
                $(this).after("<div class='hideList-btn'>+ Больше</div>");
            }

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


    $('.shop-archive .products').append("<li class='product product--hidden'></li><li class='product product--hidden'></li>");
    $('.main .main__products').append("<li class='main__products-item main__products-item--hidden'></li><li class='main__products-item main__products-item--hidden'></li><li class='main__products-item main__products-item--hidden'></li>");
    $('.shop-single .main__products').append("<li class='main__products-item main__products-item--hidden'></li><li class='main__products-item main__products-item--hidden'></li><li class='main__products-item main__products-item--hidden'></li>");


    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('body').toggleClass('modal-open');
        $('.header__mobile').toggleClass('active');
    });


    $('#secondary').prepend("<div class='aside-btn-mobile aside-btn'>Назад</div>");
    $('.aside-btn').click(function () {
        $('.wrapper').toggleClass('active');
        $('aside').toggleClass('active');
    });


    $(document).click(function (e) {
        if ($(e.target).closest('#secondary').length || $(e.target).closest('.aside-btn').length) {
            return;
        }
        if ($('#secondary').hasClass('active')) {
            $('.wrapper').removeClass('active');
            $('aside').removeClass('active');
        }

    });


    $(window).resize(function () {
        if ($('.burger').hasClass('active')) {
            $('.burger').removeClass('active');
            $('body').removeClass('modal-open');
            $('.header__mobile').removeClass('active');
        }
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 14,
        slidesPerView: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
        slideToClickedSlide: true,
        touchRatio: 0.2,
    });
    if ($('.gallery-thumbs .swiper-slide').length > 1) {
        var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 14,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            thumbs: {
                swiper: galleryThumbs
            },
            on: {
                slideChange: function () {
                    $('.gallery-thumbs .swiper-slide').siblings().removeClass('active');
                    $('.gallery-thumbs .swiper-slide').eq(galleryTop.realIndex).addClass('active');
                },
            },
        });
    }


    $('.gallery-thumbs .swiper-slide').eq(0).addClass('active');










    // setTimeout(function(){
    //     $('.shop-single .summary p.price').addClass('active');
    // }, 100);

    // $('.variations_form').on('woocommerce_variation_has_changed', function () {
    //     $('.shop-single .summary span.price').hide();
    //     $('.shop-single .summary p.price').empty();
    //     $('.shop-single .summary p.price').html($('.woocommerce-variation-price .woocommerce-Price-amount').html());
    //     console.log('xxx');
    // });


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








    // Ajax add to cart on the product page
    var $warp_fragment_refresh = {
        url: wc_cart_fragments_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'get_refreshed_fragments' ),
        type: 'POST',
        success: function( data ) {
            if ( data && data.fragments ) {


                $.each( data.fragments, function( key, value ) {
                    $( key ).replaceWith( value );
                });

                $( document.body ).trigger( 'wc_fragments_refreshed' );
            }
        }
    };

    $('.entry-summary form.cart').on('submit', function (e)
    {
        e.preventDefault();
        $('.single_add_to_cart_button').addClass('active');
        $('.entry-summary').block({
            message: null,
            overlayCSS: {
                cursor: 'none'
            }
        });

        var product_url = window.location,
            form = $(this);

        $.post(product_url, form.serialize() + '&_wp_http_referer=' + product_url, function (result)
        {
            $('.single_add_to_cart_button').removeClass('active');
            var cart_dropdown = $('.widget_shopping_cart', result);

            // update dropdown cart
            $('.widget_shopping_cart').replaceWith(cart_dropdown);

            // update fragments
            $.ajax($warp_fragment_refresh);

            $('.entry-summary').unblock();

        });
    });

});

$(window).on('load', function(){

});





