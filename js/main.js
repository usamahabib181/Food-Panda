$('.hero').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    margin: 15,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        695: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});




$(document).ready(function() {
    $('.count').prop('disabled', true);
    $(document).on('click', '.plus', function() {
        let price = 0
        price = price * $('.count').val(parseInt($('.count').val()) + 1);

        console.log(price)
    });
    $(document).on('click', '.minus', function() {
        $('.count').val(parseInt($('.count').val()) - 1);
        if ($('.count').val() == 0) {
            $('.count').val(1);
        }
    });
});

$('.slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    margin: 15,
    dots: false,
    mouseDrag: true,
    autoplay: true,

});

// scroll event
const header = document.querySelector('.section-corporate-header');
const nav = document.querySelector('.nav');
const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function(enteries) {
    const [entry] = enteries;

    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0.1,
    rootMargin: `${headerHeight}px`
});
headerObserver.observe(header);