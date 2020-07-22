const firstSlider = () => {
    const slider = document.querySelector('.main-slider'),
        slide = slider.querySelectorAll('.slide'),
        wrapper = document.getElementById('wrapper-slider');

        wrapper.style.paddingTop = '1px';

    let currentSlide = 0;

    const autoPlaySlide = () => {
        slide[currentSlide].style.display = 'none';
        currentSlide ++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        slide[currentSlide].style.display = 'block';
    };

    const startSlide = () => {
        setInterval(autoPlaySlide, 2500);
    };



    startSlide();

};

export default firstSlider;