const burgerMenu = () => {
    const topMenu = document.querySelector('.top-menu'),
        arrow = document.getElementById('totop'),
        body = document.querySelector('body');

    arrow.style.display = 'none';

    window.addEventListener('scroll', () => {
        if (screen.width < 768 && window.scrollY > 186){
            topMenu.style.position = 'fixed';
        } else {
            topMenu.style.position = '';
        }
        if(window.scrollY > 700){
            arrow.style.display = 'block';
        } else {
            arrow.style.display = 'none';
        }
        
    });
    body.addEventListener('click', (e) => {
        if(topMenu){
            if(event.target.closest('.burger')){
                document.querySelector('.popup-menu').style.display = 'flex';
            }
            if(event.target.closest('a') || event.target === document.querySelector('.popup-menu').querySelector('img')){
                document.querySelector('.popup-menu').style.display = 'none';
            }
        }
        
    })
    




};


export default burgerMenu;