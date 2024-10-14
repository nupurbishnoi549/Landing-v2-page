
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