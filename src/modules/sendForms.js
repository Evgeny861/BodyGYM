const sendForms = () => {

    const bannerForm = document.getElementById('banner-form'),
    form2 = document.getElementById('form2'), 
    form1 = document.getElementById('form1'),
    footerForm = document.getElementById('footer_form'),
    cardOrder = document.getElementById('card_order');
    
    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
        
    
    const statusMessage = document.createElement('div');
    statusMessage.classList.add('status-message');
    statusMessage.style.cssText = 
    `font-size: 18px;
    color: red;`;
    
    const send = form => {
    
        form.addEventListener('submit', event => {
        event.preventDefault();
        if (form !== footerForm)  {
            for (let inp of form.querySelectorAll('input')){
                if (inp.type === "checkbox"){
                    if (inp.checked) {
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
                                document.getElementById('thanks').style.display = 'block';
                                statusMessage.textContent = '';
                                if (form.parentNode.parentNode.parentNode.classList.contains('popup')) {
                                    form.parentNode.parentNode.parentNode.style.display = 'none';
                                }
                            })
                            .catch(error => {
                                statusMessage.textContent = errorMessage;
                                document.getElementById('thanks').querySelector('h4').textContent = 'Извините';
                                document.getElementById('thanks').querySelector('p').textContent = statusMessage.textContent;
                                document.getElementById('thanks').style.display = 'block';
                                if (form.parentNode.parentNode.parentNode.classList.contains('popup')) {
                                    form.parentNode.parentNode.parentNode.style.display = 'none';
                                }
                                statusMessage.textContent = '';
                            });
                            for (let i = 0; i < input.length; i++) {
                                if (input[i].value !== '' && input[i].type !== 'radio' && input[i].type !== 'hidden') {
                                    if (document.getElementById('promo')) {
                                        document.getElementById('m1').checked = true;
                                        document.getElementById('price-total').textContent = 1999;
                                        document.getElementById('card_leto_mozaika').checked = true;
                                    }   
                                    if (document.getElementById('t1')) {
                                        document.getElementById('t1').checked = true;
                                    }
                                    input[i].value = '';
                                }
                            }
                            inp.checked = false;
                    
                    } 
                    else {
                        statusMessage.textContent = 'Необходимо поставить галочку';
                        form.appendChild(statusMessage);
                    }
                } 
                
            }
        }        
        else if (form === footerForm){
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
                if (input[i].value !== '' && input[i].type !== 'radio' && input[i].type !== 'hidden') {
                    input[i].value = '';
                }
            }        
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
                    document.getElementById('thanks').style.display = 'block';
                    statusMessage.textContent = '';
                })
                .catch(error => {
                    document.getElementById('thanks').querySelector('h4').textContent = 'Извините';
                    document.getElementById('thanks').querySelector('p').textContent = statusMessage.textContent;
                    document.getElementById('thanks').style.display = 'block';
                    statusMessage.textContent = '';
                });
            }
    });
    }
    
    send(form1);
    send(form2);
    send(bannerForm);
    send(footerForm);
    send(cardOrder)
    
    };
    
    
    
    
    
    
    







export default sendForms;