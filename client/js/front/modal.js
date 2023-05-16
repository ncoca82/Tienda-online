export default (() => {
    
    let modalButtons = document.querySelectorAll(".modal-button");
    let modal = document.querySelector(".modal");

    modalButtons.forEach( modalButton => {
        modalButton.addEventListener("click", () => {
            modal.classList.toggle("active");
        });
    });
})();

