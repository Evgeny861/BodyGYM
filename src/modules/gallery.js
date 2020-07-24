const gallery = () => {
//     const slider = document.querySelector('.gallery-slider'),
//     slide = slider.querySelectorAll('.slide'),
//     dot = document.querySelectorAll('.dot');

//     slider.style.cssText = `
//     position: relative;
//     height: 395px;
//     margin: 0 auto;
//     display: block;`;


//     dot[0].parentNode.style.cssText = 
//     `position: absolute;
//     bottom: 20px;
//     width: 100%;
//     margin: 20px auto 0;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-pack: center;
//     -ms-flex-pack: center;
//     justify-content: center;
//     z-index: 5;
//     left: 0`;

//     for (let img of slide){ 
//     img.style.cssText = `
//     position: absolute; 
//     top: 50%; 
//     left: 50%;
//     -webkit-transform: translate(-50%,-50%); 
//     transform: translate(-50%,-50%); 
//     width: 100%;
//     opacity: 0;
//     -webkit-transition: opacity .5s;
//     transition: opacity .5s;`
//     }

//     for (let point of dot){
//         point.style.cssText =  
//         `cursor: pointer;
//         height: 6px;
//         width: 32px;
//         margin: 0 10px;
//         border: solid #fff;
//         display: inline-block;
//         -webkit-transition: background-color,-webkit-transform .4s;
//         transition: background-color,transform .4s,-webkit-transform .4s;
//         border-radius: 3px
//         ` 
//     }
//     dot[0].style.border = 'solid rgb(238 238 68)'
//     let currentSlide = 0,
//     interval = 0;

//     console.log(document.querySelector('.dot-active'));
//     document.querySelector('.dot-active').style.cssText = 
//     `cursor: pointer;
//     height: 6px;
//     width: 32px;
//     margin: 0 10px;
//     border: solid rgb(238 238 68);
//     display: inline-block;
//     -webkit-transition: background-color,-webkit-transform .4s;
//     transition: background-color,transform .4s,-webkit-transform .4s;
//     border-radius: 3px;
//     // background-color: #19b5fe;
//     // -webkit-transform: scale(1.2);
//     // transform: scale(1.2);
//     `
//     slide[0].style.opacity = '1';
//     console.log(slide[0]);

//     const autoPlaySlide = () => {
//         slide[currentSlide].style.opacity = '0';
//         dot[currentSlide].style.border = ' solid white'
//         currentSlide ++;
//         if(currentSlide >= slide.length){
//             currentSlide = 0;
//         }
//         slide[currentSlide].style.opacity = '1';
//         dot[currentSlide].style.border = 'solid rgb(238 238 68)'
//     };

// const startSlide = () => {
//     interval = setInterval(autoPlaySlide, 2500);
// };

// const prevSlide = (elem, index, strClass) => {
//     elem[index].style.opacity = strClass;
// };

// const nextSlide = (elem, index, strClass) => {
//     elem[index].style.opacity = strClass;
// };


// slider.addEventListener('click', event => {
//     event.preventDefault();

//     const target = event.target;

//     if (!target.closest('.slider-arrow, .dot')) {
//         return;
//     }

//     prevSlide(slide, currentSlide, '1');
//     prevSlide(dot, currentSlide, 'dot-active');
//     if (target.closest('#arrow-right')) {
//         currentSlide++;
//         for (let i = 0; i < dot.length; i++){
//             dot[i].style.border = 'solid #fff';
//             if (i === currentSlide){
//                 console.log(dot[i]);
//                 dot[i].style.border = 'solid rgb(238 238 68)'
//             }
//         }
//     } else if (target.closest('#arrow-left')) {
//         currentSlide--;
//         slide[currentSlide].style.opacity = '2';
//         for (let i = 0; i < dot.length; i++){
//             dot[i].style.border = 'solid #fff';
//             if (i === currentSlide){
//                 dot[i].style.border = 'solid rgb(238 238 68)'
//             }
//         }
//     } else if (target.closest('.dot')) {
//         dot.forEach((elem, index) => {
//             if (elem === target) {
//                 currentSlide = index;
//                 for (let i = 0; i < dot.length; i++){
//                     dot[i].style.border = 'solid #fff';
//                     if (i === currentSlide){
//                         dot[i].style.border = 'solid rgb(238 238 68)'
//                     }
//                 }
        
//             }
//         });
//     }
//     if (currentSlide >= slide.length) {
//         currentSlide = 0;
//     }
//     if (currentSlide < 0) {
//         currentSlide = slide.length - 1;
//     }
//     nextSlide(slide, currentSlide, '1');
//     nextSlide(dot, currentSlide, 'dot-active');

// });

//     // slider.addEventListener('click', (e) => {
//     //     let target = event.target;

//     // if (target.closest('#arrow-right')) {
//     //         currentSlide++;            
//     // } else if (target.closest('#arrow-left')) {
//     //         currentSlide--;
//     //         console.log(target);
//     // } else if (target.closest('.dot')) {
//     //     dot.forEach((elem, index) => {
//     //         if (elem === target) {
//     //             currentSlide = index;
//     //         }
//     //     });
//     // }

//     // if (currentSlide >= slide.length) {
//     //         currentSlide = 0;
//     // }
//     // if (currentSlide < 0) {
//     //     currentSlide = slide.length - 1;
//     // }
    


//     // const prevSlide = (elem, index, strClass) => {
//     //     elem[index].style.display = strClass;
//     // };

//     // const nextSlide = (elem, index, strClass) => {
//     //     elem[index].style.display = strClass;
//     // };
//     //     if (!target.matches('.portfolio-btn, .dot')) {
//     //         return;
//     //     }

//     //     prevSlide(slide, currentSlide, 'block');
//     //     prevSlide(dot, currentSlide, 'block');

//     //     if (target.closest('#arrow-right')) {
//     //         currentSlide++;
//     //     } else if (target.closest('#arrow-left')) {
//     //         currentSlide--;
//     //     } else if (target.closest('.dot')) {
//     //         dot.forEach((elem, index) => {
//     //             if (elem === target) {
//     //                 currentSlide = index;
//     //             }
//     //         });
//     //     }
//     //     if (currentSlide >= slide.length) {
//     //         currentSlide = 0;
//     //     }
//     //     if (currentSlide < 0) {
//     //         currentSlide = slide.length - 1;
//     //     }
//     //     console.log(target);
//     //     nextSlide(slide, currentSlide, 'block');
//     //     nextSlide(dot, currentSlide, 'block');




        
//     // });

//     const stopSlide = () => {
//         clearInterval(interval);
//     };

//     slider.addEventListener('mouseover', event => {
        
//         if (event.target.closest('.slider-arrow') ||
//         event.target.closest('.dot')) {
//             stopSlide();
//         }
//     });
//     slider.addEventListener('mouseout', event => {
//         if (event.target.closest('.slider-arrow') ||
//         event.target.closest('.dot')) {
//             startSlide();
//         }
//     });





// startSlide();


//     // const slider = document.querySelector('.gallery-slider'),
//     //     slide = slider.querySelectorAll('.slide'),
//     //     
        
        


//     // let currentSlide = 0,
//     //     interval = 0;

//     // const prevSlide = (elem, index, strClass) => {
//     //     elem[index].classList.remove(strClass);
//     // };

//     // const nextSlide = (elem, index, strClass) => {
//     //     elem[index].classList.add(strClass);
//     // };

//     // const autoPlaySlide = () => {
//     //     prevSlide(slide, currentSlide, 'portfolio-item-active');
//     //     prevSlide(dot, currentSlide, 'dot-active');
//     //     currentSlide++;
//     //     if (currentSlide >= slide.length) {
//     //         currentSlide = 0;

//     //     }
//     //     nextSlide(slide, currentSlide, 'portfolio-item-active');
//     //     nextSlide(dot, currentSlide, 'dot-active');

//     // };
//     // const startSlide = (time = 3000) => {
//     //     interval = setInterval(autoPlaySlide, time);
//     // };

//     // const stopSlide = () => {
//     //     clearInterval(interval);
//     // };

//     // slider.addEventListener('click', event => {
//     //     event.preventDefault();

//     //     const target = event.target;

//     //     if (!target.matches('.portfolio-btn, .dot')) {
//     //         return;
//     //     }

//     //     prevSlide(slide, currentSlide, 'portfolio-item-active');
//     //     prevSlide(dot, currentSlide, 'dot-active');

//     //     if (target.matches('#arrow-right')) {
//     //         currentSlide++;
//     //     } else if (target.matches('#arrow-left')) {
//     //         currentSlide--;
//     //     } else if (target.matches('.dot')) {
//     //         dot.forEach((elem, index) => {
//     //             if (elem === target) {
//     //                 currentSlide = index;
//     //             }
//     //         });
//     //     }
//     //     if (currentSlide >= slide.length) {
//     //         currentSlide = 0;
//     //     }
//     //     if (currentSlide < 0) {
//     //         currentSlide = slide.length - 1;
//     //     }
//     //     nextSlide(slide, currentSlide, 'portfolio-item-active');
//     //     nextSlide(dot, currentSlide, 'dot-active');

//     // });

//     // slider.addEventListener('mouseover', event => {
//     //     if (event.target.matches('.portfolio-btn') ||
//     //     event.target.matches('.dot')) {
//     //         stopSlide();
//     //     }
//     // });
//     // slider.addEventListener('mouseout', event => {
//     //     if (event.target.matches('.portfolio-btn') ||
//     //     event.target.matches('.dot')) {
//     //         startSlide();
//     //     }
//     // });

//     // startSlide(1500);






















};

export default gallery;