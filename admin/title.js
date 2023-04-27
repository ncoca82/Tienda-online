class Title extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            html {
                background-color:rgb(42,76,187);
            }
            h1{
                color: white;
                width: 2rem;
                object-fit: cover;
                max-width: 100%;
            }
        </style>
        <div>
            <h1>Clientes</h1>
        </div>
        `;

    }
}

customElements.define('title-component', Title);