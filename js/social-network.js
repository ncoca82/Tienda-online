export default (() => {
    
    let hamburguerButton = document.querySelectorAll(".team-item-social-networks");
    
    hamburguerButton.forEach( button => {
        button.addEventListener("click", () => {
            alert("Hey");
        });
    });
  
})();