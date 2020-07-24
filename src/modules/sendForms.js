const sendForms = () => {


const form1 = document.getElementById('banner-form'),
form2 = document.getElementById('form2'), 
form3 = document.getElementById('form3');

const errorMessage = 'Что то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    

const statusMessage = document.createElement('div');
statusMessage.classList.add('status-message');
statusMessage.style.cssText = 'font-size: 2rem;';

const send = form => {
    form.addEventListener('submit', event => {
    event.preventDefault();
    if (document.getElementById('check1').checked === true){

        form.appendChild(statusMessage);

    const formData = new FormData(form);
    const body = {};
    formData.forEach((val, key) => {
        body[key] = val;
    });
    if (!statusMessage.textContent) {
        statusMessage.textContent = loadMessage;
    } else {
        statusMessage.textContent = '';
        statusMessage.textContent = loadMessage;
    }
    const input = form.querySelectorAll('input');
    for (let i = 0; i < input.length; i++) {
        if (input[i].value !== '' && input[i].type !== 'radio') {
            input[i].value = '';
        }
    }

    const deliteMessage = () => {
        if (statusMessage) {
            statusMessage.textContent = '';
            // form1.removeChild(statusMessage);
        }
    };
            // setTimeout(deliteMessage, 2000);
        
            const postData = body =>
                fetch('./server.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });
        
            postData(body)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = '';
                    document.getElementById('thanks').style.display = 'block';
                    document.getElementById('check1').checked = false;
                })
                .catch(error => {
                    statusMessage.textContent = errorMessage;
                    document.getElementById('thanks').querySelector('h4').textContent = 'Извините';
                    document.getElementById('thanks').querySelector('p').textContent = statusMessage.textContent;
                    document.getElementById('thanks').style.display = 'block';
                    document.getElementById('check1').checked = false;
                });
    } else {
        statusMessage.textContent = 'Необходимо поставить галочку';
        form.appendChild(statusMessage);
        const deliteMessage = () => {
            if (statusMessage) {
                statusMessage.textContent = '';
                // form1.removeChild(statusMessage);
            }
                };
                setTimeout(deliteMessage, 2000);
    }
    
        
});

}

send(form1);
send(form2)


    
    










};







export default sendForms;