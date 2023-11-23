/* ============================================ 
                Preloader
   ============================================ */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* ============================================ 
                Work
   ============================================ */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'

    });

});



/* ============================================ 
              Navigation
   ============================================ */

/* Show and hide white navigation bar */
$(function () {
    // Show/hide nav on page load
    showHideNav();


    $(window).scroll(function () {
        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //Show white nav
            $("nav").addClass("white-nav-top");

            //Show dark logo
            $(".navbar-brand img").attr("src", "icons/innvis-iconc.jfif");

            //Show back to top
            $("#back-to-top").fadeIn();

        } else {
            //Hide white nav
            $("nav").removeClass("white-nav-top");

            // Show logo
            $(".navbar-brand img").attr("src", "icons/innvis-iconc.jfif");

            //Hide back to top
            $("#back-to-top").fadeOut();
        }
    }
});


//Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        //get section id like #about, #services, #work... etc
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});



/* ============================================ 
              Mobile Menu
   ============================================ */
$(function () {
    //Show mobile nav
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height", "100%");
    });
    //Hide mobile nav
    $("#mobile-nav-open-btn, #mobile-nav a").click(function(){
        $("#mobile-nav").css("height", "0%");
    });
});





/* ============================================ 
              Animation
   ============================================ */
//animate on scroll
$(function () {
    new WOW().init();    
});

//home animation on page load
$(window).on('load', function () {
    
    $("#home-heading-1").addClass("animate__animated animate__fadeInDown");
    $("#home-heading-2").addClass("animate__animated animate__fadeInLeft");
    $("#home-text").addClass("animate__animated animate__zoomIn");
    $("#home-btn").addClass("animate__animated animate__zoomIn");
    $("#arrow-down i").addClass("animate__animated animate__fadeInDown animate__infinite infinite");
});

