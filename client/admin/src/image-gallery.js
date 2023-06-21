class ImageGallery extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.id = '';
    }

    async connectedCallback () {
        document.addEventListener("openModal", event => {
            const modal = this.shadow.querySelector(".modal-open");
            modal.classList.toggle('active');

            this.id = event.detail.id;
        });

        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .modal{
                background-color: hsla(0, 0%, 100%, 0.541);
                height: 100vh;
                position: fixed;
                left: 0;
                opacity: 0;
                top: 0;
                transition: all 0.2s ease-in-out;
                width: 100%;
                z-index: -1;
            }
            
            .modal-open active{
                opacity: 1;
                z-index: 5;
            }
            
            .modal-open{
                position: absolute;
                height: 60%;
                width: 60%;
                top: 50%;
                left: 50%;    
                transform: translate(-50%, -50%);
                box-shadow: 0 0 62px hsla(0, 0%, 0%, 0.3);
                display:flex;
                flex-direction: column;
                align-items: center;
                background-color: hsl(0, 0%, 100%);
            }
            
            h5{
                font-size: 2rem;
                font-family: "Poppins", sans-serif;
                font-weight: 500;
                
            }
            
            button {
                padding: 1rem 2.5rem;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1rem;
                font-family: "Poppins", sans-serif;
                background-color: hsl(0, 0%, 40%);
                color:white;
                margin-top:60%;
            }
            
            
            .close-button {
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
                z-index: 1000;
            }
            
            .close-button svg {
                fill: hsl(0, 0%, 40%);
                width: 1.5rem;
                height: 1.5rem;
            }
            
            .close-button:hover svg {
                fill: hsl(0, 0%, 0%);
            } 
        </style>
        <div class="modal">
            <div class="modal-open">
                <h5>Añadir imágenes</h5>
                <div class="image">
                    <button class="subir-archivo">Subir archivo</button>
                </div>
                <div class="close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                </div>
            </div>
        </div>
        `;

        const modal = this.shadow.querySelectorAll('.modal-open');
        const closeButtons = this.shadow.querySelectorAll('.close-button');



        
    
    }
}

customElements.define('image-gallery-component', ImageGallery);