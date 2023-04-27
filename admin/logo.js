class Logo extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            html{
                background-color:rgb(42,76,187);s
            }
            h1{
                width: 2rem;
                max-width: 100%;
                color: white;
            }
        </style>
        <div>
            <h1>Detectib</h1>
        </div>
        `;

    }
}

customElements.define('logo-component', Logo);