// Nav Section 
const menu = document.querySelector('.menu')
const openMenu = document.querySelector('.open-menu-btn')
const closeMenu = document.querySelector('.close-menu-btn')

openMenu.addEventListener('click', () => {
    menu.style.display = "inline-block"
    openMenu.style.display = "none"
    closeMenu.style.display = "inline-block"
})


closeMenu.addEventListener('click', () => {
    menu.style.display = "none"
    openMenu.style.display = "inline-block"
    closeMenu.style.display = "none"
})


// Accordions Section 


const cards = document.querySelectorAll('.faq-card')
cards.forEach((card) => {
    const question = card.querySelector('.question')
    const answer = card.querySelector('.answer')
    const plus = card.querySelector('.plus')
    const minus = card.querySelector('.minus')
    card.addEventListener('click', ()=>{
        question.classList.toggle('active')

        if(question.classList.contains('active')){
            answer.style.maxHeight = answer.scrollHeight + "px"
            answer.style.marginTop = "21px"
            question.style.color = "#b31e22"
            plus.style.display = "none"
            minus.style.display = "inline-block"
        }
        else{
            answer.style.maxHeight = null
            answer.style.marginTop = "0"
            question.style.color = "#0c0c0c"
            plus.style.display = "inline-block"
            minus.style.display = "none"
        }
    })
})

// Carousel Section 

const slides = document.querySelector('.carousel-slides');
const slideCount = document.querySelectorAll('.slide').length;

let currentSlide = 0;
let slideInterval;

const showSlide = (i) => {
    if (i >= slideCount) {
        currentSlide = 0;
    } else if (i < 0) {
        currentSlide = slideCount - 1;
    } else {
        currentSlide = i;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
};

const prevSlide = () => {
    showSlide(currentSlide - 1);
};

const nextSlide = () => {
    showSlide(currentSlide + 1);
};

const prevSlideShow = document.querySelector('.carousel-prev');
const nextSlideShow = document.querySelector('.carousel-next');

prevSlideShow.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

nextSlideShow.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

const startAutoSlide = () => {
    slideInterval = setInterval(nextSlide, 3000);
};

const stopAutoSlide = () => {
    clearInterval(slideInterval);
};

const createDots = () => {
    const dotsContainer = document.querySelector('.carousel-dots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => {
            showSlide(i);
            stopAutoSlide();
            startAutoSlide();
        });
    }
    updateDots();
};

const updateDots = () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
};

showSlide(currentSlide);
startAutoSlide();
createDots();


// LLC Slide 

const llcSlides = document.querySelector('.llc-carousel-slides');
const llcSlideCount = document.querySelectorAll('.llc-slide').length;

let llcCurrentSlide = 0;
let llcSlideInterval;

const llcShowSlide = (i) => {
    if (i >= llcSlideCount) {
        llcCurrentSlide = 0;
    } else if (i < 0) {
        llcCurrentSlide = llcSlideCount - 1;
    } else {
        llcCurrentSlide = i;
    }
    llcSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
    llcUpdateDots();
};

const llcPrevSlide = () => {
    llcShowSlide(llcCurrentSlide - 1);
};

const llcNextSlide = () => {
    llcShowSlide(llcCurrentSlide + 1);
};


const llcStartAutoSlide = () => {
    llcSlideInterval = setInterval(llcNextSlide, 3000);
};

const llcStopAutoSlide = () => {
    clearInterval(llcSlideInterval);
};

const llcCreateDots = () => {
    const dotsContainer = document.querySelector('.llc-carousel-dots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('llc-dot');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => {
            llcShowSlide(i);
            llcStopAutoSlide();
            llcStartAutoSlide();
        });
    }
    llcUpdateDots();
};

const llcUpdateDots = () => {
    const dots = document.querySelectorAll('.llc-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === llcCurrentSlide);
    });
};

llcShowSlide(llcCurrentSlide);
llcStartAutoSlide();
llcCreateDots();
