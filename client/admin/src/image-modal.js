import { API_URL } from '../config/config.js'

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
                    transform: translate(-50%, -50%);
                }
                
                .gallery-modal.active{
                    opacity: 1;
                    z-index: 10;
                    position: absolute;
                    display: flex;
                    flex-direction: column;  
                    justify-content: space-between;
                }

                .gallery-modal.active h5{
                    font-family: "Poppins", sans-serif;
                    font-size: 1.5rem;
                    position: absolute;
                    top: 0;
                    left: 0;
                    margin: 2rem;
                }
                    
                .modal-tabs {
                    display: flex;
                    align-self: flex-start;
                    width: 100%;
                    top: 0;
                    left: 0;
                    border-bottom: 1px solid #ddd;
                }
    
                .modal-tabs button {
                    padding: 0.5rem 1rem;
                    border: none;
                    cursor: pointer;    
                    margin-top:6rem;
                    font-size: 1.2rem;
                    font-family: "Poppins", sans-serif;
                    background-color: transparent;
                }
                .modal-tabs button:first-child{
                    margin-left: 2rem;
                }
    
                .modal-tabs button.active {
                    background-color: rgb(109,183,243);
                    color: white;
    
                }
    
                .tab-contents{
                    height: 100%;
                    width: 100%;
                    display: flex;
                    border-bottom: 1px solid #ddd;
                }
    
                .tab-content{
                    position: relative;
                    display: flex;
                    justify-content: center;
                    z-index:-3;
                    align-items: center;
                    transform: translate(-50%, -50%);
                    opacity: 0;
                    margin-top: 10%;
                    width: 60%;
                }
    
                .tab-content.active{
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index:10;
                    transform: translate(-50%, -50%);
                    opacity: 1;
                    left:40%
                }
                .tab-inputs{
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    width: 25%;
                    height: 75%;
                    left: 75%;
                    padding-top:1rem;
                    background-color:rgb(241,241,241);
                }
                .tab-inputs input{
                    display: flex;
                    flex-direction: column;
                    padding: 0.3rem 6rem;
                }
                .tab-inputs label{
                    margin:1rem 3rem;
                    padding: 1rem;
                }
                .section-inputs-form{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .section-inputs-form span{
                    font-size: 20px;
                    color: rgb(55,55,55);
                }
    
                .upload {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
    
                .upload input {
                    padding: 0.5rem 2rem;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-family: "Poppins", sans-serif;
                    color: hsl(0, 0%, 100%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
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
    
                .close-button:hover svg {
                    fill: hsl(0, 0%, 0%);
                }
                .footer{
                    display: flex;
                    justify-content: flex-end;
                }
                .footer button {
                    padding: 1rem;
                    margin: 1.5rem 2rem;
                    color: hsl(0, 0%, 100%);
                    background-color:rgb(109,183,243);
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                    
                }

            </style>
            <div class="gallery-modal active">
                <div class="modal-header">
                    <div>
                        <h5>Añadir imagen</h5>
                    </div>
                    <div class="close-button modal-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                    </div>
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
                    <div class="tab-buttons">
                        <div class="tab-content active" data-tab="galeria">
                            <p>Galería de imágenes</p>
                        </div>
                        <div class="tab-content" data-tab="upload">
                            <input type="file" class="upload-image"></input>
                        </div>
                    </div>
                    <div class="tab-inputs">
                        <label class="section-inputs-form">
                            <span>Título</span>
                            <input type="text" name="name" />
                        </label>
                        <label class="section-inputs-form">
                            <span>Texto alternativo</span>
                            <input type="text" />
                        </label>
                    </div>    
                </div>
                <div class="footer">
                    <button>Elegir Imagen</button>
                </div>
            </div>
            `;
            this.renderTabs();
            this.uploadImage();
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

        const closeButton = this.shadow.querySelector(".close-button")

        closeButton.addEventListener("click", () => {
            const modal = this.shadow.querySelector('.gallery-modal');
            modal.classList.toggle('active');
        })
    };

    uploadImage = async () => {

        const uploadButton = this.shadow.querySelector('.upload-image')
    
        uploadButton.addEventListener("change", async event => {
    
            let file = event.target.files[0]

            console.log(file)

            let formData = new FormData()
            formData.append('file', file)

            try{

                const response = await fetch( `${ API_URL }/api/admin/image`, {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')
                    },
                    body: formData
                })

                // const images = await response.json()

                // images.forEach( image => {
                //     let image = document.createElement('div');
                //     image.classList.add('gallery')
                //     card.appendChild(cardInfo);
                // });

            }catch(err) {

            }
        })
    }
}    

customElements.define('image-modal-component', ImageModal);