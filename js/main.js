$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
        anchors: ['section1', 'section2', 'section3', 'section4'],
        fixedElements: '.mobile_menu'
    });

    // video play in product page
    $(function () {

        $(".image_block--video").find('.video_play__button').click(function (e) {
            var imageHeight = $(this).parents('.image_block--video').find('img').css('height')
            var video_src = $(this).parents('.image_block--video').data('src');

            $(this).parents('.image_block--video')
                .find('iframe')
                .show()
                .attr("src", video_src)
                .css('height', imageHeight);

            $(this).parent().hide()
            $(this).parents(".image_block--video").find('img').hide()
            e.preventDefault();
        });
    })

    // change color item
    $(function () {
        $('.color_choose__item').find('input:radio')
            .on("change", function () {
                var dataImage = $(this).parent().data('image')
                $('.color_choose__image').find('.image__item').removeClass('active')
                $('.color_choose__image').find('.image__item[data-image=' + dataImage + ']').addClass('active')
            })
    })

    // hamburger
    $(function () {
        $('.menu_toggle').click(function () {
            $('.menu_toggle').toggleClass('open');
            $('html').toggleClass('no_scroll');
            $('body').toggleClass('no_scroll');
            $('.mobile_menu').toggleClass('open');
        });
    })
});