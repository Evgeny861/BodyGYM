const carousel = () => {
    // const servicesSlider = document.querySelector('.services-slider'),
    //     sliders = servicesSlider.querySelectorAll('.slide'),
    //     prev = document.querySelector('.prev'),
    //     next = document.querySelector('.next');

    // servicesSlider.style.position = 'relative';
    // let count = 0;

    // servicesSlider.addEventListener('click', (e) => {
    //     if(event.target.closest('.next')){
    //         count++;
    //         console.log(count);
    //     }
    // })
    
    // for(let i = 0; i < sliders.length; i++){
    //     if (i < 5) {
    //         sliders[i].style.display = 'none';
    //     }
    // }

    /* этот код помечает картинки, для удобства разработки */
    const carousel = document.querySelector('.services-slider');
    carousel.parentNode.style.position = 'relative';
    carousel.parentNode.style.maxWidth = '1080px';
    carousel.style.position = 'relative'; 

    carousel.parentNode.style.overflow = 'hidden';
    let i = 1;
    for(let li of carousel.querySelectorAll('.slide')) {
      li.style.position = 'relative';
      li.style.minWidth = '200px'
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0"></span>`);
      i++;
    }

    /* конфигурация */
    let width = 200; // ширина картинки
    let count = 1; // видимое количество изображений

    let list = carousel;
    let listElems = carousel.querySelectorAll('.slide');

    let position = 0; // положение ленты прокрутки

    carousel.querySelector('.prev').addEventListener('click', () => {
        
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    });

    carousel.querySelector('.next').addEventListener('click', () => {
        
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    });








};


export default carousel;