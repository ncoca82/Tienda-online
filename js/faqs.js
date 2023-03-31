export default (() => {

    let faqButtons = document.querySelectorAll('.plus-minus-toggle');
    
    faqButtons.forEach(faqButton => {
        faqButton.addEventListener('click', () => {
            faqButton.classList.toggle("active");
            faqButton.closest('.faqs-question-item').querySelector('.faq-paragrafs').classList.toggle("active");
        });
    });
})();