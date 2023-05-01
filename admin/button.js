class Button extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
        .button{
            display:flex;
            justify-content:center;
        }
            button {
                width:95%;
                height:3.5rem;
                margin-bottom:3rem;
                cursor:pointer;
            }
            button svg{
                height:2rem;
                fill:rgb(109,183,243);
            }
        </style>
        <div class="button">
            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg></button>
        </div>
        `;

    }
}

customElements.define('button-component', Button);