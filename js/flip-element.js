export default ( () => {

    let flipButton = document.querySelectorAll(".contact-card-flip-button");
    
    flipButton.forEach( button => {
        button.addEventListener("click", () => {
            alert("Hey");
        });
    });
})();