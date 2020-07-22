const burgerMenu = () => {
    const topMenu = document.querySelector('.top-menu');
    window.addEventListener('scroll', () => {
        
    if (screen.width < 768 && window.scrollY > 186){
        topMenu.style.position = 'fixed';
    } else {
        topMenu.style.position = '';
    }
    });
    
    

    
};


export default burgerMenu;