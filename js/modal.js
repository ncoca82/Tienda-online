export default (() => {
    
    let modalButton = document.querySelectorAll(".header-checkout-button");
    
    modalButton.forEach( button => {
        button.addEventListener("click", () => {
            alert("Hey");
        });
    });
})();

