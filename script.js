$(function() {
    "use strict";
    var a = $("body");
    $(window).on("load", function() {
        a.addClass("loaded")
    }), "1" === a.attr("data-preloader") ? a.append($("<div class='preloader preloader-1'><div><span></span></div></div>")) : "2" === a.attr("data-preloader") ? a.append($("<div class='preloader preloader-2'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20' fill='none' stroke-width='2' stroke-miterlimit='10'/></svg></div></div>")) : "3" === a.attr("data-preloader") ? a.append($("<div class='preloader preloader-3'><div><span></span><span></span><span></span></div></div>")) : "4" === a.attr("data-preloader") ? a.append($("<div class='preloader preloader-4'><div><span></span></div></div>")) : "5" === a.attr("data-preloader") ? a.append($("<div class='preloader preloader-5'><div><span></span><span></span><span></span></div></div>")) : "6" === a.attr("data-preloader") ? a.append($("<div class='preloader preloader-6'><div><span></span><span></span><span></span></div></div>")) : "7" === a.attr("data-preloader") ? a.append($("<div class='preloader preloader-7'><div><span></span><span></span><span></span><span></span><span></span></div></div>")) : "8" === a.attr("data-preloader") ? a.append($("<div class='preloader preloader-8'><div><span></span><span></span><span></span><span></span></div></div>")) : "9" === a.attr("data-preloader") ? a.append($("<div class='preloader preloader-9'><div><span class='spinner-box'><span></span><span></div></div>")) : "10" === a.attr("data-preloader") ? a.append($("<div class='preloader preloader-10'><div><h6 class='heading-uppercase'>Loading</h6><span class='spinner'></span></div></div>")) : "11" === a.attr("data-preloader") && a.append($("<div class='preloader preloader-11'><div><span class='spinner'><span></div></div>"));
    var e = $(".nav"),
        o = $(".nav-toggle-btn");
    o.on("click", function(a) {
        var o = $(".nav-dropdown"),
            s = $(".sub-dropdown"),
            n = $(".dropdown-menu"),
            r = $(".sub-dropdown-menu");
        e.hasClass("nav-show") ? (e.removeClass("nav-show"), n.hasClass("dropdown-menu-show") && (n.removeClass("dropdown-menu-show"), o.removeClass("dropdown-minus")), r.hasClass("sub-dropdown-menu-show") && (r.removeClass("sub-dropdown-menu-show"), s.removeClass("sub-dropdown-minus"))) : e.addClass("nav-show"), a.stopPropagation()
    }), o.on("click", function() {
        o.hasClass("nav-toggle-close") ? o.removeClass("nav-toggle-close") : o.addClass("nav-toggle-close")
    });
    var s = $(".nav-dropdown .nav-link"),
        n = $(".sub-dropdown a");
    if (s.on("click", function() {
            var a = $(this).parent(".nav-dropdown").children(".dropdown-menu");
            a.hasClass("dropdown-menu-show") ? a.removeClass("dropdown-menu-show") : a.addClass("dropdown-menu-show")
        }), n.on("click", function(a) {
            var e = $(this).parent(".sub-dropdown").children(".sub-dropdown-menu");
            e.hasClass("sub-dropdown-menu-show") ? e.removeClass("sub-dropdown-menu-show") : e.addClass("sub-dropdown-menu-show"), a.stopPropagation()
        }), s.on("click", function() {
            var a = $(this).parent(".nav-dropdown").children(".dropdown-menu"),
                e = $(this).parent(".nav-dropdown");
            a.hasClass("dropdown-menu-show") ? e.addClass("dropdown-minus") : e.removeClass("dropdown-minus")
        }), n.on("click", function() {
            var a = $(this).parent(".sub-dropdown").children(".sub-dropdown-menu"),
                e = $(this).parent(".sub-dropdown");
            a.hasClass("sub-dropdown-menu-show") ? e.addClass("sub-dropdown-minus") : e.removeClass("sub-dropdown-minus")
        }), $(document).on("click", function(a) {
            if (0 === $(a.target).closest(".nav").length) {
                if (e.hasClass("nav-show")) {
                    var s = $(".dropdown-menu"),
                        n = $(".sub-dropdown-menu");
                    e.removeClass("nav-show"), s.hasClass("dropdown-menu-show") && (s.removeClass("dropdown-menu-show"), $(".nav-dropdown").removeClass("dropdown-minus")), n.hasClass("sub-dropdown-menu-show") && (n.removeClass("sub-dropdown-menu-show"), $(".sub-dropdown").removeClass("sub-dropdown-minus"))
                }
                o.hasClass("nav-toggle-close") && o.removeClass("nav-toggle-close")
            }
        }), $(".navbar a[href='#']").on("click", function(a) {
            a.preventDefault()
        }), e.hasClass("mr-auto") && o.addClass("left"), $(".navbar-sticky").length) {
        var r = $(".navbar-sticky"),
            t = r.offset().top;
        $(window).on("scroll", function() {
            var a = $(".navbar-placeholder");
            $(window).scrollTop() >= t ? (r.addClass("navbar-sticky-apply"), a.addClass("navbar-placeholder-padding")) : (r.removeClass("navbar-sticky-apply"), a.removeClass("navbar-placeholder-padding")), $(window).scrollTop() >= t + 20 ? r.addClass("navbar-shrink") : r.removeClass("navbar-shrink")
        }), $("<div class='navbar-placeholder'></div>").insertAfter(".navbar-sticky")
    }
    var l = $(".fullscreen-menu"),
        d = $(".fullscreen-toggle-btn");
    d.on("click", function(a) {
        l.hasClass("fullscreen-menu-show") ? l.removeClass("fullscreen-menu-show") : l.addClass("fullscreen-menu-show"), a.stopPropagation()
    }), d.on("click", function() {
        d.hasClass("fullscreen-toggle-hide") ? d.removeClass("fullscreen-toggle-hide") : d.addClass("fullscreen-toggle-hide")
    }), $(document).on("click", function() {
        l.hasClass("fullscreen-menu-show") && (l.removeClass("fullscreen-menu-show"), d.removeClass("fullscreen-toggle-hide"))
    }), $(".nav-megadropdown").on("click", function() {
        var a = $(this).children(".mega-menu"),
            e = $(this).children(".nav-link");
        a.hasClass("mega-menu-show") ? (a.removeClass("mega-menu-show"), e.removeClass("nav-link-minus")) : (a.addClass("mega-menu-show"), e.addClass("nav-link-minus"))
    });
    var i = $(".mega-menu");
    o.on("click", function() {
        i.hasClass("mega-menu-show") && (i.removeClass("mega-menu-show"), $(".nav-link").removeClass("nav-link-minus"))
    }), $(document).on("click", function(a) {
        0 === $(a.target).closest(".nav").length && i.hasClass("mega-menu-show") && (i.removeClass("mega-menu-show"), $(".nav-link").removeClass("nav-link-minus"))
    }), $(".sidebar-dropdown-link").on("click", function() {
        var a = $(this).parent().children(".sidebar-dropdown"),
            e = $(this);
        a.hasClass("sidebar-dropdown-show") ? (a.removeClass("sidebar-dropdown-show"), e.removeClass("minus")) : (a.addClass("sidebar-dropdown-show"), e.addClass("minus"))
    });
    var c = $(".sidebar-nav-toggle"),
        p = $(".sidebar-nav-content");
    c.on("click", function() {
        c.hasClass("sidebar-nav-toggle-close") ? (c.removeClass("sidebar-nav-toggle-close"), p.removeClass("sidebar-nav-show")) : (c.addClass("sidebar-nav-toggle-close"), p.addClass("sidebar-nav-show"))
    }), $(".sidebar-menu a[href='#']").on("click", function(a) {
        a.preventDefault()
    });
    var v = $(".search-wrapper");
    $(".search-toggle").on("click", function(a) {
        v.hasClass("search-wrapper-show") ? v.removeClass("search-wrapper-show") : v.addClass("search-wrapper-show"), a.stopPropagation()
    }), $(document).on("click", function(a) {
        0 === $(a.target).closest(".search-wrapper div[class^='col-']").length && v.hasClass("search-wrapper-show") && v.removeClass("search-wrapper-show")
    });
    var u = $(".navbar-fixed");
    $(window).on("scroll", function() {
        $(window).scrollTop() >= 10 ? u.addClass("navbar-shrink") : u.removeClass("navbar-shrink")
    });
    var h = $("html,body");
    $(".scrolldown-btn, .scrolldown, .navbar a").on("click", function(a) {
        h.animate({
            scrollTop: $(this.hash).offset().top
        }, 700, "easeInOutQuart"), a.preventDefault()
    });
    var m = $(".scrolltotop");
    $(window).on("scroll", function() {
        $(this).scrollTop() > 700 ? m.addClass("scrolltotop-show") : m.removeClass("scrolltotop-show")
    }), m.on("click", function() {
        return h.animate({
            scrollTop: 0
        }, 600, "easeInOutQuart"), !1
    }), $(".portfolio-wrapper").imagesLoaded(function() {
        var a = $(".portfolio-wrapper").isotope({
                itemSelector: ".portfolio-item",
                transitionDuration: 300
            }),
            e = $(".filter ul li");
        e.on("click", function() {
            var o = $(this).attr("data-filter");
            a.isotope({
                filter: o
            }), e.removeClass("active"), $(this).addClass("active")
        })
    }), $(".owl-carousel").each(function() {
        var a = $(this),
            e = {
                items: a.data("owl-items"),
                margin: a.data("owl-margin"),
                loop: a.data("owl-loop"),
                center: a.data("owl-center"),
                mouseDrag: a.data("owl-mouseDrag"),
                touchDrag: a.data("owl-touchDrag"),
                pullDrag: a.data("owl-pullDrag"),
                freeDrag: a.data("owl-freeDrag"),
                stagePadding: a.data("owl-stagePadding"),
                autoWidth: a.data("owl-autoWidth"),
                startPosition: a.data("owl-startPosition"),
                URLhashListener: a.data("owl-URLhashListener"),
                nav: a.data("owl-nav"),
                rewind: a.data("owl-rewind"),
                navElement: a.data("owl-navElement"),
                slideBy: a.data("owl-slideBy"),
                dots: a.data("owl-dots"),
                dotsEach: a.data("owl-dotsEach"),
                autoplay: a.data("owl-autoplay"),
                autoplayTimeout: a.data("owl-autoplayTimeout"),
                smartSpeed: a.data("owl-smartSpeed"),
                fluidSpeed: a.data("owl-fluidSpeed"),
                autoplaySpeed: a.data("owl-autoplaySpeed"),
                navSpeed: a.data("owl-navSpeed"),
                dotsSpeed: a.data("owl-dotsSpeed"),
                dragEndSpeed: a.data("owl-dragEndSpeed"),
                callback: a.data("owl-callback"),
                video: a.data("owl-video"),
                videoHeight: a.data("owl-videoHeight"),
                videoWidth: a.data("owl-videoWidth"),
                itemElement: a.data("owl-itemElement"),
                stageElement: a.data("owl-stageElement"),
                navContainer: a.data("owl-navContainer"),
                dotsContainer: a.data("owl-dotsContainer")
            },
            o = {
                responsive: {
                    0: {
                        items: a.data("owl-xs")
                    },
                    576: {
                        items: a.data("owl-sm")
                    },
                    768: {
                        items: a.data("owl-md")
                    },
                    992: {
                        items: a.data("owl-lg")
                    },
                    1200: {
                        items: a.data("owl-xl")
                    }
                }
            };
        a.owlCarousel($.extend({
            rewind: !0,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            autoHeight: !0,
            autoplayTimeout: 4e3,
            autoplayHoverPause: !0
        }, e, o))
    });
    var w = $("#homePortfolioPrev");
    if ($("#homePortfolioNext").on("click", function() {
            $("#homePortfolioSlider").trigger("next.owl.carousel", [300])
        }), w.on("click", function() {
            $("#homePortfolioSlider").trigger("prev.owl.carousel", [300])
        }), $(".blog-masonry").masonry({
            itemSelector: ".blog-post-box"
        }), $(".lightbox-image").each(function() {
            $(this).magnificPopup({
                type: "image",
                fixedContentPos: !1,
                removalDelay: 200,
                closeOnContentClick: !0,
                image: {
                    titleSrc: "data-image-title"
                }
            })
        }), $(".gallery-wrapper").each(function() {
            $(this).magnificPopup({
                delegate: "a",
                removalDelay: "200",
                type: "image",
                fixedContentPos: !1,
                gallery: {
                    enabled: !0
                },
                image: {
                    titleSrc: "data-gallery-title"
                }
            })
        }), $(".popup-youtube").each(function() {
            var a = $(this),
                e = a.attr("data-youtube-src");
            a.magnificPopup({
                items: {
                    src: e
                },
                type: "iframe",
                fixedContentPos: !1,
                removalDelay: 200,
                preloader: !1,
                iframe: {
                    patterns: {
                        youtube: {
                            index: "youtube.com/",
                            id: "v=",
                            src: e
                        }
                    },
                    srcAction: "iframe_src"
                }
            })
        }), $(".popup-vimeo").each(function() {
            var a = $(this),
                e = a.attr("data-vimeo-src");
            a.magnificPopup({
                items: {
                    src: e
                },
                type: "iframe",
                fixedContentPos: !1,
                removalDelay: 200,
                preloader: !1,
                iframe: {
                    patterns: {
                        vimeo: {
                            index: "vimeo.com/",
                            id: "/",
                            src: e
                        }
                    },
                    srcAction: "iframe_src"
                }
            })
        }), $(".parallax").jarallax({
            speed: .2
        }), $(".countdown").each(function() {
            var a = $(this).attr("data-countdown");
            $(this).countdown(a, function(a) {
                $(this).html(a.strftime('<div><h2 class="font-light">%D</h2><h6 class="heading-uppercase">Days</h6></div><div><h2 class="font-light">%H</h2><h6 class="heading-uppercase">Hours</h6></div><div><h2 class="font-light">%M</h2><h6 class="heading-uppercase">Minutes</h6></div><div><h2 class="font-light">%S</h2><h6 class="heading-uppercase">Seconds</h6></div>'))
            })
        }), $(".countdown-basic").each(function() {
            var a = $(this).attr("data-countdown");
            $(this).countdown(a, function(a) {
                $(this).html(a.strftime("%D days %H:%M:%S"))
            })
        }), $(".accordion-title").on("click", function() {
            var a = $(this).parent("li"),
                e = this.nextElementSibling;
            a.hasClass("active") ? (a.removeClass("active"), e.style.maxHeight = null) : (a.addClass("active"), $(this).closest(".accordion").hasClass("accordion-oneopen") && ($(this).closest(".accordion").children("li").removeClass("active"), a.addClass("active"), $(".accordion-oneopen > li > .accordion-content").css("max-height", "0")), e.style.maxHeight = e.scrollHeight + "px")
        }), $(".accordion li").hasClass("active")) {
        var g = $(".accordion > li.active > .accordion-content"),
            f = g.prop("scrollHeight");
        g.css({
            "max-height": f + "px"
        })
    }
    $(".facts-wrapper").appear(function() {
        $(".facts-counter").each(function() {
            $(this).prop("Counter", 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3e3,
                easing: "swing",
                step: function(a) {
                    $(this).text(Math.ceil(a))
                }
            })
        })
    }, {
        accX: 0,
        accY: -10
    }), $(".product-quantity .button-circle").on("click", function() {
        var a = $(this),
            e = a.parent().find("input").val();
        if ($(this).hasClass("inc")) var o = parseFloat(e) + 1;
        else if (e > 1) o = parseFloat(e) - 1;
        else o = 1;
        a.parent().find("input").val(o)
    }), $(".return-login-btn").on("click", function() {
        var a = $(".return-login");
        a.hasClass("return-login-show") ? a.removeClass("return-login-show") : a.addClass("return-login-show")
    });
    var C = $(".create-account-toggle input");
    C.on("click", function() {
        var a = $(".create-account-box");
        C.is(":checked") ? a.addClass("create-account-box-show") : a.removeClass("create-account-box-show")
    }), $('[data-toggle="popover"]').popover(), $('[data-toggle="tooltip"]').tooltip();
    var b = $("#map-canvas");
    if (b.length) {
        var k = b.attr("data-latitude"),
            y = b.attr("data-longitude");
        new GMaps({
            el: "#map-canvas",
            lat: k,
            lng: y,
            zoom: 16,
            scrollwheel: !1
        }).addMarker({
            lat: k,
            lng: y
        })
    }
    $("#contactform").on("submit", function(a) {
        var e = $("#name").val(),
            o = $("#email").val(),
            s = $("#subject").val(),
            n = $("#message").val();
        ("" === e && $("#name").addClass("error-color"), "" === o && $("#email").addClass("error-color"), "" === s && $("#subject").addClass("error-color"), "" === n) ? $("#message").addClass("error-color"): ($.ajax({
            url: "../../assets/php/contact-form.php",
            data: $(this).serialize(),
            type: "POST",
            success: function(a) {
                $("#success").addClass("show-result"), $("#contactform").each(function() {
                    this.reset()
                })
            },
            error: function(a) {
                $("#error").addClass("show-result")
            }
        }), $("#contactform input, #contactform textarea").removeClass("error-color"));
        a.preventDefault()
    })
});