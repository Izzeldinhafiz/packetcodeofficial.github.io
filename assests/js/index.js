$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".positioAAnFixedHeader").css("box-shadow", "rgba(0, 0, 0, 0.2) 0px 2px 3px");
        } else {
            $(".positionFixedHeader").css("box-shadow", "none");
        }
    });

    var toggleHumburgerIcon = true;
    $(".hamburgerIcon").click(() => {
        if (toggleHumburgerIcon) {
            $(".humburgerOptions").height(290);
            toggleHumburgerIcon = false;
        } else {
            $(".humburgerOptions").height(0);
            toggleHumburgerIcon = true;
        }
    });

    $("body").click(function (evt) {
        if (!$(evt.target).closest(".hamburgerIcon").length) {
            if (!$(evt.target).closest(".humburgerOptions").length) {
                $(".humburgerOptions").height(0);
            }
        }
    });

    $('.positionList .individualList').click(function () {
        let id = $(this).data('href');
        sessionStorage.setItem('datahref', id);
        if ($(this).parents('.navigations').data('href') == 'aboutNavigations') {
            window.location.href = './about.html'
        }
        else if ($(this).parents('.navigations').data('href') == 'serviceNavigations') {
            window.location.href = './services.html'
        }
    })

    $(".LogoWrapper .logoClick").click(function (evt) {
        window.location.href = "../index.html";
    });

    $(".collabrateBtn button").click(function (evt) {
        window.location.href = "../contactus.html";
    });
});
