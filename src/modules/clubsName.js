const clubsList = document.querySelector('.clubs-list'),
clubItems = document.getElementById('club-items'),
headerMain = document.querySelector('.header-main');

const clubsName = () => {

    headerMain.addEventListener('click', (e) => {
        let target = event.target;
        if (target.closest('.clubs-list')) {
            if (!clubItems.style.display || clubItems.style.display === 'none') {
                clubItems.style.display = 'block';
            } else if (clubItems.style.display === 'block'){
                clubItems.style.display = 'none';
            }
        } else if (!target.closest('.clubs-list') && clubItems.style.display === 'block'){
            clubItems.style.display = 'none';
        }
        
    });
    





};


export default clubsName;