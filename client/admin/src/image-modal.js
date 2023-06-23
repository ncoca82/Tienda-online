class ImageModal extends HTMLElement {

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
                .gallery-modal{
                    background-color: white;
                    height: 90vh;
                    position: fixed;
                    opacity: 0;
                    transition: all 0.2s ease-in-out;
                    width: 95%;
                    z-index: -1;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%)
                }
                
                .gallery-modal.active{
                    opacity: 1;
                    z-index: 1;
                    position: absolute;
                    display: flex;
                    flex-direction: column;  
                    justify-content: flex-start;
                }

                .gallery-modal.active h5{
                    font-family: "Poppins", sans-serif;
                    font-size: 1.5rem;
                }
                    
                .upload {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    
                }  
                
                .upload input {
                    padding: 0.5rem 2rem;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-family: "Poppins", sans-serif;    
                }

                .close-button {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    cursor: pointer;
                }
                
                .close-button svg {
                    fill: hsl(0, 0%, 40%);
                    width: 1.5rem;
                    height: 1.5rem;
                }
                
                .close-button svg:hover{
                    fill: hsl(0, 0%, 0%);
                } 
                .modal-tabs{
                    margin-left:5%;
                    
                }
                .tabs-content{
                    height: 100%;
                }
                .gallery-modal h5{
                    margin-left:5%
                }
                .modal-tabs button {
                    cursor: pointer;
                    padding: 0.5rem 2rem;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;
                    font-family: "Poppins", sans-serif; 
                }
                .modal-tabs button:hover {
                    background-color: white;
                }
                .tabs-content{
                    backgorund-color:white;
                    z-index:-1;
                    text-align: center;
                    display:none;
                }
                .tabs-content active{
                    position:absolute;
                    z-index: 5;
                    height: 100%;
                    display: block;
                }

            </style>
            <div class="gallery-modal">
                <h5>Añadir imagen</h5>
                <div class="close-button modal-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                </div>
                <div class="modal-tabs">
                    <button class="active" data-tab="galeria">
                        Galería
                    </button>
                    <button data-tab="upload">    
                        Subir imagen
                    </button>    
                </div>
                <div class="tab-contents">
                    <div class="tab-content active" data-tab="galeria">
                        <p>Hola!</p>
                    </div>
                    <div class="tab-content" data-tab="upload">
                        <input type="file"></input>
                    </div>
                </div>
            </div>
            `;
            this.renderTabs();
    }

    renderTabs () {
        const modalTabs = this.shadow.querySelector('.modal-tabs');
        const tabContents = this.shadow.querySelector('.tab-contents');
        const tabs = modalTabs.querySelectorAll('button');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                modalTabs.querySelector('.active').classList.remove('active');
                tabContents.querySelector('.active').classList.remove('active');
                tab.classList.add('active');
                tabContents.querySelector(`[data-tab="${tab.dataset.tab}"]`).classList.add('active');
            });
        });
    };
}

customElements.define('image-modal-component', ImageModal);