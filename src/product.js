class Product extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
    
        </style>
        <div class="product">
            <slot name="product-image"></slot>
            <slot name="product-content"></slot>
        </div>
        `;

    }
}

customElements.define('product-component', Product);