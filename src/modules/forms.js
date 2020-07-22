const forms = () => {
    const inputs = document.querySelectorAll('input');
    for(let input of inputs) {
        if(input.name === 'name' || input.name === 'phone') {
            input.addEventListener('input', () => {
                if (input.name === 'name'){
                input.value = input.value.replace(/[^А-Яа-яёЁ\s]/, '');
                } else if (input.name === 'phone') {
                    input.value = input.value.replace(/[^\d+]/, '');
                }
            });
            
        }
    }



}

export default forms;