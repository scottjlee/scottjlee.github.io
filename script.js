// Scripts for website index.html.

$(function() {
    "use strict";
    var a = $("body");
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
});