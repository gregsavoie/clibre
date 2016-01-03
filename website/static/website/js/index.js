var resize = function() {
    if($(".content").width() > $(window).width()) {
        $(".content").width($(window).width());
    }
    if($(window).width() < 754) {
        $(".nav-filler").remove();
    } else {
        if($(".nav-filler").length == 0) {
            var fillers = $("<li></li>").addClass("nav-filler").text("filler filler");
        }
        $(".nav-non-filler").before(fillers);
    }
    if($(".content").height() < $(window).height()) {
        $(".content").height($(window).height());
    }
};

var scrollUpResponse = function() {
    if($(window).scrollTop() < $(".content").height() - 70) {
        $(window).unbind("scroll", scrollUpResponse);
        $(".navbar").css("background-color", "transparent");
        $(window).bind("scroll", scrollDownResponse);
    }
}

var scrollDownResponse = function() {
    if($(window).scrollTop() > $(".content").height() - 70) {
        $(window).unbind("scroll", scrollDownResponse);
        $(".navbar").css("background-color", "#333333");
        $(window).bind("scroll", scrollUpResponse);
    }
};

function scrollTo(id) {
    if(id == "haut") {
        id = "body"
    } 
    $("html, body").animate({
            scrollTop: $(id).offset().top - 60
    }, 500);
};

var scrollSpy = function() {
    if($(window).scrollTop() < $("#a-propos").offset().top - 80) {
        $("#link-a-propos").removeClass("link-active");
        $("#link-nouvelles").removeClass("link-active");
        $("#link-contact").removeClass("link-active");
    }

    if($(window).scrollTop() > $("#a-propos").offset().top - 80) {
        $("#link-a-propos").addClass("link-active");
        $("#link-nouvelles").removeClass("link-active");
        $("#link-contact").removeClass("link-active");
    }
    if($(window).scrollTop() > $("#nouvelles").offset().top - 80) {
        $("#link-a-propos").removeClass("link-active");
        $("#link-nouvelles").addClass("link-active");
        $("#link-contact").removeClass("link-active");
    }
    if($(window).scrollTop() > $("#contact").offset().top - 80) {
        $("#link-a-propos").removeClass("link-active");
        $("#link-nouvelles").removeClass("link-active");
        $("#link-contact").addClass("link-active");
    }
};

$(document).ready(function() {
    if($(".content").width() > $(window).width()) {
        $(".content").width($(window).width());
    }
    if($(".content").height() < $(window).height()) {
        $(".content").height($(window).height());
        scrollDownResponse();
    }
    if($("#a-propos").height() < $(window).height()) {
        $("#a-propos").height($(window).height());
    }
    if($("#nouvelles").height() < $(window).height()) {
        $("#nouvelles").height($(window).height());
    }
    if($("#contact").height() < $(window).height()) {
        $("#contact").height($(window).height());
    }
    if($(window).width() < 754) {
        $(".nav-filler").remove();
    }
    $(window).bind("resize", resize);
    $(window).bind("scroll", scrollDownResponse);
    $(window).bind("scroll", scrollSpy);
});
