// ------------------Nav menu------------------//
const navmenu = () => {
    document.getElementById("mobile-view").classList.toggle("max-sm:top-0");
    document.getElementById("nav-line").classList.toggle("rotate-45");
    document.getElementById("nav-line").classList.toggle("after:rotate-90");
    document.getElementById("nav-line-out-side").classList.toggle("translate-x-6");
    document.getElementById("nav-line-out-side-1").classList.toggle("translate-x-6");
}
// nav color
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-white');
        nav.classList.remove('top-[65px]');
        nav.classList.add('top-0');
        nav.classList.add('shadow-common-shadow');
    } else {
        nav.classList.remove('bg-white');
        nav.classList.add('top-[65px]');
        nav.classList.remove('shadow-common-shadow');
    }
});
// ------------------Nav tab------------------//
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

const removeActiveClasses = () => {
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
};

const setActiveTab = (tab) => {
    const targetId = tab.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);

    tab.classList.add('active');
    targetContent.classList.add('active');
};
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        removeActiveClasses();
        setActiveTab(tab);
    });
});
// --------------slider------------//
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// -----------slider2--------//
$('.slick').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: ".next",
    prevArrow: ".prev",
    responsive: [
        {
            breakpoint: 1450,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// ----------top bottom scroll---------//
const mybutton = document.querySelector(".top-btn");
const show = document.querySelector(".active")

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        mybutton.classList.add("active")
    }
    else {
        mybutton.classList.remove("active")
    }
})
mybutton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;

});