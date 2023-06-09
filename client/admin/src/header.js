class Header extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            header{
                display:flex;
                justify-content:space-between;
                align-items:center;
                margin-bottom:1rem;
                margin-left:3rem;
            }
            h1{
                color:white;
                font-size:3rem;
                font-family: 'Poppins', sans-serif;
                font-weight:600;

            }
            .hamburger-button {
                cursor: pointer;
                width: 10%;
                height: 2.5rem;
                padding: 0;
                position: relative;
                transition: all 0.3s ease-in-out;
                display:flex;
                justify-content:center;
            }
            .hamburger-button span {
                background-color: #fff;
                height: 2px;
                transition: all 0.3s ease-in-out;
                width: 2rem;
                color: white;
                position: absolute;
            }
            .hamburger-button span:first-child {
                top: calc(50% - 6px);
            }
            .hamburger-button span:nth-child(2) {
                top: 50%;
                transform: translateY(-50%);
            }
            .hamburger-button span:last-child {
                bottom: calc(50% - 6px);
            }
            
            .hamburger-button.active{
                position: relative;
            }
            
            .hamburger-button.active span:first-of-type {
                transform: translateY(5px) rotate(45deg);
            }
            
            .hamburger-button.active span:nth-of-type(2) {
                opacity: 0;
            }   
            
            .hamburger-button.active span:last-of-type {
                transform: translateY(-5px) rotate(-45deg);
            }
        </style>
        <header>
            <div class="logo">
                <h1>Detectib</h1>
            </div>
            <div class="title">
                <h1>Clientes</h1>
            </div>
            <div class="hamburger-button">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header> 
        `;

    }
}

customElements.define('header-component', Header);