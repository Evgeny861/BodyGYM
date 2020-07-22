
const clubsName = () => {
    const clubItems = document.getElementById('club-items'),
        body = document.querySelector('body');


        body.addEventListener('click', (e) => {
        let target = event.target;
        if (target.closest('.clubs-list')) {
            if (!clubItems.style.display || clubItems.style.display === 'none') {
                clubItems.style.display = 'block';
            } else if (clubItems.style.display === 'block'){
                clubItems.style.display = 'none';
            }
        } else {
            clubItems.style.display = 'none';
        }
        if (target.dataset.popup) {
            document.querySelector(`${target.dataset.popup}`).style.display = 'block';
        } else if (target.closest('.overlay')){
            target.parentNode.style.display = 'none';
        } else if (target.closest('.close_icon')) {
            target.parentNode.parentNode.parentNode.style.display = 'none';
        }
    });
};


export default clubsName;