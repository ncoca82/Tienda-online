export default (() => {

    let buttons = document.querySelectorAll('.plus-minus-button');
    
    buttons.forEach(button => {

        button.addEventListener('click', () => {

            let input = button.parentElement.querySelector('input');

            if (button.textContent === '-') {
                input.value = (parseInt(input.value) - 1 >= 1 ? parseInt(input.value) - 1 : 1);
            } else {
                input.value = (parseInt(input.value) + 1);
            }
        });
    });
})();
