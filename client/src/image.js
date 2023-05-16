class Image extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .modal-box-images {
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #F8F8F8;
                position: absolute;
                z-index: 2000;
            }
            
            .modal-box-images img{
                height: 80%;
            }
        </style>
        <div slot name="product-image" class="modal-box-images">
            <img src="images/the-watch-2-291x524.png" alt="reloj">
        </div>
        `;

    }
}

customElements.define('image-component', Image);