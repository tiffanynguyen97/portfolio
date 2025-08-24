    document.querySelector(".intro:hover").forEach(element => {
        let randomChars = '!@#$%^&*()-+<>";:,.?/[]{}|/~;=';
        let originalText = element.dataset.text;

        element.addEventListener('mouseover', event => {
            let iterations = 0;

            let interval = setInterval(() => {
                element.textContent = originalText.split('')
                .map((char, index) => {
                    if(index < iterations) 
                        return randomChars.charAt(Math.floor(Math.random() * randomChars.length));
                    })
                    .join('');
                    if(iterations >= originalText.length) {
                        clearInterval(interval);
                    }
                    iterations += 1 / 3;
            },100)                       
        })
    })