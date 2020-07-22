const carousel = () => {
    const servicesSlider = document.querySelector('.services-slider'),
        sliders = servicesSlider.querySelectorAll('.slide'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next');

    servicesSlider.style.position = 'relative';
    let count = 0;

    servicesSlider.addEventListener('click', (e) => {
        if(event.target.closest('.next')){
            count++;
            console.log(count);
        }
    })
    
    for(let i = 0; i < sliders.length; i++){
        if (i > 5) {
            sliders[i].style.display = 'none';
        }
    }

};


export default carousel;