$(function() {


    var introH = $('#intro').innerHeight()
    var header = $('#header')
    var scrollOffset = $(window).scrollTop()


        // Header Fixed

    checkScroll(scrollOffset)


    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop()
        checkScroll(scrollOffset)


        
        
    })


    function checkScroll () {
        if(scrollOffset >= introH) {
            header.addClass('fixed')
        }
        else{
            header.removeClass('fixed')
        }
    }

    // Smooth Scroll
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault()

        var blockId = $(this).data('scroll')


        var blockOffset = $(blockId).offset().top

        $('html, body').animate({
            scrollTop: blockOffset
        }) 

    })


})
