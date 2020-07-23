const calc = () => {
    
    const calcForm = document.getElementById('card_order'),
        mozaika = document.getElementById('card_leto_mozaika'),
        priceTotal = document.getElementById('price-total'),
        m1 = document.getElementById('m1'),
        m2 = document.getElementById('m2'),
        m3 = document.getElementById('m3'),
        m4 = document.getElementById('m4'),
        schelkovo = document.getElementById('card_leto_schelkovo'),
        promo = document.getElementById('promo');
        

        priceTotal.textContent = 1999;

    calcForm.addEventListener('click', () => {
        if(mozaika.checked ){
            if(m1.checked ){
                priceTotal.textContent = 1999
            } else if(m2.checked ){
                priceTotal.textContent = 9999
            } else if(m3.checked ){
                priceTotal.textContent = 13999
            } else if(m4.checked ){
                priceTotal.textContent = 19999
            }
        }
        if(schelkovo.checked ){
            if(m1.checked ){
                priceTotal.textContent = 2999
            } else if(m2.checked ){
                priceTotal.textContent = 14999
            } else if(m3.checked ){
                priceTotal.textContent = 21999
            } else if(m4.checked ){
                priceTotal.textContent = 24999
            }
        }

        if(promo.value === 'ТЕЛО2019'){
            priceTotal.textContent = Math.floor(priceTotal.textContent - (priceTotal.textContent * 30 / 100));
        }
    })
}





export default calc;