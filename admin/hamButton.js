class HamButton extends HTMLElement {

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
                background-color:rgb(42,76,187);
            }
            .hamburger-button {
                cursor: pointer;
                display: flex;
                flex-direction: column;
                height: 2rem;
                justify-content: center;
                position: absolute;
                transition: all 0.3s ease-in-out;
                width: 2rem;
            }
            
            .hamburger-button span {
                background-color: #fff;
                display: block;
                height: 2px;
                margin: 0.1rem auto;
                transition: all 0.3s ease-in-out;
                width: 50%;
                font-family: "Poppins", "sans-serif";
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
        <div class="hamburger-button">
            <span></span>
            <span></span>
            <span></span>
        </div>
        `;

    }
}

customElements.define('ham-button-component', HamButton);