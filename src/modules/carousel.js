const carousel = () => {
    const servicesSlider = document.querySelector('.services-slider'),
        sliders = servicesSlider.querySelectorAll('.slide'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next');

    
    sliders[0].style.cssText = `transition: all 0.2s linear 0s; min-width: 210px; margin-left: 0px;`;
    let count = 0;
    servicesSlider.addEventListener('click', (e) => {
      if (!event.target.closest('.slider-arrow')){
        return
      }
        if(event.target.closest('.next')){
          count += 225;
          sliders[0].style.cssText = `transition: all 0.2s linear 0s; min-width: 210px; margin-left: -${count}px;`;
          if (count > 1125) {
            count = 0;
            sliders[0].style.cssText = `transition: all 0.2s linear 0s; min-width: 210px; margin-left: -${count}px;`;
          }
        } else if (event.target.closest('.prev')) {
          count += -225;
          sliders[0].style.cssText = `transition: all 0.2s linear 0s; min-width: 210px; margin-left: -${count}px;`;
          if (count < 0) {
            count = 1125;
            sliders[0].style.cssText = `transition: all 0.2s linear 0s; min-width: 210px; margin-left: -${count}px;`;
          }
        }
    })





};


export default carousel;