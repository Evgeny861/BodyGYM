const gallery = () => {
    const slider = document.querySelector('.gallery-slider'),
    dot = document.querySelectorAll('.dotBtn'),
    slide = slider.querySelectorAll('.slide'),
    li = slider.querySelectorAll('li');

let currentSlide = 0,
    interval = 0;

const prevSlide = (elem, index, strClass) => {
    elem[index].style.display = strClass;
};

const nextSlide = (elem, index, strClass) => {
   elem[index].style.display = strClass;
};
const prevLi = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
};

const nextLi = (elem, index, strClass) => {
    elem[index].classList.add(strClass);

};


const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'none');
    prevLi(li, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
        currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'flex');
    nextLi(li, currentSlide, 'slick-active');

};
const startSlide = (time = 5000) => {
    interval = setInterval(autoPlaySlide, time);
};

const stopSlide = () => {
    clearInterval(interval);
};

slider.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;
    if (!target.closest('.slider-arrow, .dotBtn')) {
        return;
    }

    prevSlide(slide, currentSlide, 'none');
    prevLi(li, currentSlide, 'slick-active');

    if (target.closest('#arrow-right')) {
        currentSlide++;
    } else if (target.closest('#arrow-left')) {
        currentSlide--;
    } else if (target.closest('.dotBtn')) {
        dot.forEach((elem, index) => {
            if (elem === target) {
                currentSlide = index;
            }
        });
    }
    if (currentSlide >= slide.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide, 'flex');
    nextLi(li, currentSlide, 'slick-active');
});

slider.addEventListener('mouseover', event => {
    if (event.target.closest('.slider-arrow') ||
    event.target.closest('.dotBtn')) {
        stopSlide();
    }
});
slider.addEventListener('mouseout', event => {
    if (event.target.closest('.slider-arrow') ||
    event.target.closest('.dotBtn')) {
        startSlide();
    }
});
startSlide();



};

export default gallery;