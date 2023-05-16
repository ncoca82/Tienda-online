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
            .header-logo img{
                width: 2rem;
                object-fit: cover;
                max-width: 100%;
            }
        </style>
        <div class="header-logo">
            <img src="images/logo.png" alt="logo">
        </div>
        `;

    }
}

customElements.define('logo-component', Logo);