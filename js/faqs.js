export default (() => {

    let faqQuestionItemImages = document.querySelectorAll('.faqs-question-item-image');
    
    faqQuestionItemImages.forEach(faqQuestionItemImage => {
        faqQuestionItemImage.addEventListener('click', () => {
            faqQuestionItemImage.closest('.faqs-question-item').querySelector('.faq-paragrafs').classList.toggle("active");
        });
    });
})();