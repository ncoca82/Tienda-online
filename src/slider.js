class Slider extends HTMLElement {

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
                line-height: 1.15; /* 1 */
                -webkit-text-size-adjust: 100%; /* 2 */
            }
            button,input { /* 1 */
                overflow: visible;
            }
            button,
            input,
            optgroup,
            select,
            textarea {
                line-height: 1.15; /* 1 */
                margin: 0; /* 2 */
            }
            .slider {
                position: relative;
                display: flex;
                justify-content: center;
            }
            
            .slider .slider-title{
                position: absolute;
                top: 19%;
                right: 22%;
                width: 60%;
                justify-content: center;
            }
            
            .slider .slider-title h2 {
                color: hsl(0, 0%, 100%);
                font-size: 4.5rem;
                text-align: center;
            
            }
            
            .slider .slider-image{
                width: 100%;
            
            }
            
            .slider-description {
                position: absolute;
                top: 30%;
                right: 30%;
                width: 40%;
            }
            
            .slider-description p {
                text-align: center;
                color:hsl(0, 0%, 100%);
                font-size: 1.6rem;
                font-weight: 300;
                margin:0;
            }
            
            .slider .slider-button{
                position: absolute;
                top: 40%;
                right: 40%;
                width: 20%;
            }
            
            .slider .slider-button button {
                color: hsl(0, 0%, 100%);
                cursor: pointer;
                background-color: hsl(209, 100%, 50%);
                text-align: center;
                text-transform: uppercase;
                font-size: 20px;
                font-family: "Poppins",sans-serif;
                border: none;
                border-radius: 35px;
                padding: 1.2rem 5rem;
                position: absolute;
                -webkit-appearance: button;
                overflow: visible;
                line-height: 1.15;
                margin: 0;
            }
            
            .slider .slider-button button:hover{
                background-color: hsl(0, 0%, 32%);
            }
            img {
                object-fit: cover;
                max-width: 100%;
            }
            h2 {
                font-weight: 600;
                text-decoration: none;
                margin: 0;
            }
        </style>
        <div class="slider">
                <div class="slider-image">
                    <img src="images/steve-johnson-d7JWDqIhfF4-unsplash.webp" alt="Aceites esenciales">
                </div>
                <div class="slider-title">
                    <h2>The future of thech is here</h2>
                </div>
                <div class="slider-description">
                    <p>Holisticly incentivize revolutionary collaboration and idea sharing before cost effective users. Actual focused services before highly efficient human capital.</p>
                </div>
                <div class="slider-button modal-button">
                    <button>Buy with paypal</button>
                </div>
        </div>
        `;

    }
}

customElements.define('slider-component', Slider);