/*-----------------------------------------------------------
* Template Name      : Responsive Design Template 1
* Author             : 
* Version            : 1.0.0
* Created            : 21 September 2019
* File Description   : Main css file of the template
*------------------------------------------------------------
*/

! function($) {
    "use strict";

    var SampleApp = function() {};

    //scroll（50までスクロールしたらnavbarの色を黒から白に変える）
    SampleApp.prototype.initStickyMenu = function() {
        $(window).on('scroll',function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
            } else {
                $(".sticky").removeClass("stickyadd");
            }
        });
    },


    //Smooth（クリックした時の挙動)
    SampleApp.prototype.initSmoothLink = function() {
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    //Scrollspy（トップからの距離がこの値以下になった時に、アクティブ要素を変更する）
    SampleApp.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset:20
        });
    },

    //Typed（文字をタイプする）
    SampleApp.prototype.initTextType = function() {
        $(".element").each(function() {
            var $this = $(this);
            $this.typed({
                strings: $this.attr('data-elements').split(','),
                typeSpeed: 100,
                backDelay: 3000
            });
        });
    },

    //Work（クリックしたものに対して要素を動かす）
    SampleApp.prototype.initWork = function() {
        $(window).on('load', function () {
            var $container = $('.work-filter');
            var $filter = $('#menu-filter');
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            $filter.find('a').on("click",function() {
                var selector = $(this).attr('data-filter');
                $filter.find('a').removeClass('active');
                $(this).addClass('active');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });
    },

    //Magnificpop（写真の表示方法・×や次の写真ボタン）
    SampleApp.prototype.initMagnificPopup = function() {
        $('.img-zoom').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });
    },

    // //Client（表示を自動でスワイプ）
    SampleApp.prototype.initTestimonial = function() {
        $("#owl-demo").owlCarousel({
            autoPlay: 7000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
    },

    //PRELOADER（ページロード時の表現）
    SampleApp.prototype.initPreloader = function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    },

    SampleApp.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
        this.initTextType();
        this.initWork();
        this.initMagnificPopup();
        this.initTestimonial();
        this.initPreloader();
    },

    //init
    $.SampleApp = new SampleApp, $.SampleApp.Constructor = SampleApp
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.SampleApp.init();
}(window.jQuery);