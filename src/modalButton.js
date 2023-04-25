class ModalButton extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .header-checkout-button button{
                color: hsl(0, 0%, 100%);
                cursor: pointer;
                background-color:rgb(255,102,34);
                text-align: center;
                text-transform: uppercase;
                font-size: 16px;
                font-family: "Poppins",sans-serif;
                border: none;
                border-radius: 30px;
                padding: 0.7rem 2.8rem;
            }
        
            .header-checkout-button button:hover {
                background-color: hsl(0, 0%, 32%);
            }
            button,[type="button"],[type="reset"],[type="submit"] {
                -webkit-appearance: button;
            } 
            button,
            input { /* 1 */
                overflow: visible;
            }  
            button,
            input,
            optgroup,
            select,
            textarea {
                font-family: inherit; /* 1 */
                font-size: 100%; /* 1 */
                line-height: 1.15; /* 1 */
                margin: 0; /* 2 */
            } 
        </style>
        <div class="header-checkout-button modal-button">
                <button>Buy it now</button>
        </div>
        
        `;

    }
}

customElements.define('modal-button-component', ModalButton);