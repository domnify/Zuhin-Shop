


var lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-100px';
    }
    else {
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});




new PureCounter({

    selector: ".customer",
    start: 500,
    end: 800,
    duration: 2,
    delay: 10,
});


new PureCounter({

    selector: ".cctv",
    start: 250,
    end: 400,
    duration: 2,
    delay: 10,
});

new PureCounter({

    selector: ".biometric",
    start: 400,
    end: 600,
    duration: 2,
    delay: 10,
});

new PureCounter({

    selector: ".premises",
    start: 30,
    end: 50,
    duration: 2,
    delay: 10,
});
