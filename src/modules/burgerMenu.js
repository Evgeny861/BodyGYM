const burgerMenu = () => {
    const topMenu = document.querySelector('.top-menu'),
        arrow = document.getElementById('totop');
    arrow.style.display = 'none';

    window.addEventListener('scroll', () => {
        if (screen.width < 768 && window.scrollY > 186){
            topMenu.style.position = 'fixed';
        } else {
            topMenu.style.position = '';
        }
        if(window.scrollY > 740){
            arrow.style.display = 'block';
        } else {
            arrow.style.display = 'none';
        }
    });




};


export default burgerMenu;