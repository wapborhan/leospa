//video Popup
$(document).ready(function () {
    // Gets the video src from the data-src on each button    
    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });
    //console.log($videoSrc);  

    // when the modal is opened autoplay it  
    $('#video_pop').on('shown.bs.modal', function (e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1");
    })
    // stop playing the youtube video when I close the modal
    $('#video_pop').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })

});

//About Slider
$(document).ready(function () {

    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        slideSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 3000,

    });

    wow = new WOW();
    wow.init();

});


//Testimoinal Slider
$().ready(function () {
    $('.slick-carousel').slick({
        arrows: false,
        centerPadding: "0px",
        dots: true,
        slidesToShow: 1,
        infinite: true,
    });
});
