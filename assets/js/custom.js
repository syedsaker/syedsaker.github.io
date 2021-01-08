(function ($) {
    'use strict';

    // START MENU JS
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar-area').addClass('menu-shrink');
        } else {
            $('.navbar-area').removeClass('menu-shrink');
        }
    });

    $('.navbar-nav .nav-item .nav-link').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1500);
        e.preventDefault();
    });
    $(document).on('click', '.navbar-collapse.show', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });	

    $('.main-banner-area .down-arrow ').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1500);
        e.preventDefault();
    });

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1199"
    });

    // Tabs JS
    $('.tabs li a').on('click', function (e) {
        $('.tabs li, #tabsContent .active').removeClass('active').removeClass('fadeInUp');
        $(this).parent().addClass('active');
        var activeTab = $(this).attr('href');
        $(activeTab).addClass('active fadeInUp');
        e.preventDefault();
    });	

    // Odometer JS
    $('.odometer').appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // Active button JS
    $('.single-menu button').click(function () {
        $('button').removeClass('active');
        $(this).addClass('active');
    })

    // Magnific Popup JS
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });

    // Owl Carousel JS
    $('.single-testimonial').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        mouseDrag: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
    })

    // Start Mixitup JS
    var configEl = document.querySelector('.single-work');
    var selectFilter = document.querySelector('.select-filter');
    var mixer;
    if (configEl) {
        mixer = mixitup(configEl, {});
    }

    if (selectFilter) {
        selectFilter.addEventListener('change', function () {
            var selector = selectFilter.value;

            mixer.filter(selector);
        });
    }

    // Preloader JS
    jQuery(window).on('load', function () {
        jQuery(".loader").fadeOut(500);
    });

    // Back to top JS
    $('body').append('<div  class="toTop back-to-top-btn"><i class="fas fa-chevron-up"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.toTop').fadeIn();
        } else {
            $('.toTop').fadeOut();
        }
    });
    $('.toTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    }); 

})(jQuery);