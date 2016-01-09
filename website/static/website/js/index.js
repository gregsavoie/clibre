function validerChamps(nom, courriel, message) {
    if(nom) {
        if(courriel) {
            if(message) {
                return true;
            }
        }
    }
    return false;
};

function merci() {
    var url = "/merci/";
    var datatype = "json";
    var type = "get";
    var nom = document.getElementById("id_nom").value;
    var courriel = document.getElementById("id_courriel").value;
    var message = document.getElementById("id_message").value;
    if(validerChamps(nom, courriel, message)) {
        $.ajax({
            url:url,
            datatype:datatype,
            type:type,
            data: {"nom":nom, "courriel":courriel, "message":message},
            success: function(data) {
                $(".contact-block").children().remove();
                var merci = $("<h1></h1>").attr("class", "text-center").text("Merci " + nom + "!");
                var para = $("<p></p>").attr("class", "text-center").text("Votre message a été transmis.");
                var wrapper = $("<div></div>").append(merci).append(para).css("margin-top", "25%");
                $(".contact-block").append(wrapper);
            },
            error: function(data) {
            }
        });
        var nom = document.getElementById("id_nom").value = "";
        var courriel = document.getElementById("id_courriel").value = "";
        var message = document.getElementById("id_message").value = "";
    } else {
        $(".msg-erreur").css("visibility", "visible");
    }
};

var resize = function() {
    if($(window).width() < 754) {
        $(".nav-filler").remove();
        $(".links").bind("click", function() {
            $(".navbar-toggle").click();
        });
    } else {
        if($(".nav-filler").length == 0) {
            var fillers = $("<li></li>").addClass("nav-filler").text("filler filler");
            $(".nav-non-filler").after(fillers);
        }
        $(".links").unbind("click");
    }
};

var scrollUpResponse = function() {
    if($(window).width() < 754) {
    }
    if($(window).scrollTop() < $(".acceuil").height() - 70) {
        $(window).unbind("scroll", scrollUpResponse);
        $(".navbar").css("background-color", "transparent");
        $(window).bind("scroll", scrollDownResponse);
    }
}

var scrollDownResponse = function() {
    if($(window).scrollTop() > $(".acceuil").height() - 70) {
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
            scrollTop: $(id).offset().top - 50
    }, 500);
};

var scrollSpy = function() {
    if($(window).scrollTop() < $(".a-propos").offset().top - 70) {
        $("#link-a-propos").removeClass("link-active");
        $("#link-nouvelles").removeClass("link-active");
        $("#link-contact").removeClass("link-active");
    }

    if($(window).scrollTop() > $(".a-propos").offset().top - 70) {
        $("#link-a-propos").addClass("link-active");
        $("#link-nouvelles").removeClass("link-active");
        $("#link-contact").removeClass("link-active");
    }
    if($(window).scrollTop() > $(".nouvelles").offset().top - 70) {
        $("#link-a-propos").removeClass("link-active");
        $("#link-nouvelles").addClass("link-active");
        $("#link-contact").removeClass("link-active");
    }
    if($(window).scrollTop() > $(".contact").offset().top - 70) {
        $("#link-a-propos").removeClass("link-active");
        $("#link-nouvelles").removeClass("link-active");
        $("#link-contact").addClass("link-active");
    }
};

$(document).ready(function() {
    $(".wrapper").css("min-height", $(window).height() - 50);
    $(".acceuil").css("min-height", $(window).height());
    scrollDownResponse();
    if($(window).width() < 754) {
        $(".nav-filler").remove();
        $(".links").bind("click", function() {
            $(".navbar-toggle").click();
        });
    }
    $(window).bind("resize", resize);
    $(window).bind("scroll", scrollDownResponse);
    $(window).bind("scroll", scrollSpy);
});
