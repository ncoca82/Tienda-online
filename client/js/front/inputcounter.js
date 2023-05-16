export default (() => {
    
    let inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        let charCounters = input.parentNode.querySelector('.char-counter');
        
        input.addEventListener('input', () => {
            let inputValue = input.value.length;
            let count = inputValue.length;

            if (input.value.length > 20) {
            input.value =input.value.slice(0, 20);
            count = 20;
            }
        input.addEventListener('keyup', () => {
            charCounters.textContent = input.value.length;
        });
        
        charCounters.textContent = count;
        });
    });
})();   