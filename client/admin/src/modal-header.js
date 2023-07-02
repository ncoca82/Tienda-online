class modalHeader extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    connectedCallback() {
        document.addEventListener('openGalleryModal', event => {
            const modal = this.shadow.querySelector('.gallery-modal');
            modal.classList.toggle('active');
        });
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            header{
                display:flex;
                justify-content:space-between;
                align-items:center;
                margin-bottom:1rem;
                margin-left:3rem;
            }
            
            
        </style>
        <header>
            <div>
                <h5>Añadir imagen</h5>
            </div>
        <div class="close-button modal-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
        </div>
        </header> 
        `;

    this.renderButton();    

    }
    renderButton() {
    const closeButton = this.shadow.querySelector(".close-button")

        closeButton.addEventListener("click", () => {
            const modal = this.shadow.querySelector('.gallery-modal');
            modal.classList.toggle('active');
        })
    }    
}

customElements.define('modal-header-component', modalHeader);
