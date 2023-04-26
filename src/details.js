class Details extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>

            .details {
                display: flex;
                justify-content: center;
                margin: 10%, 10%;
                padding: 10%;
            }
            
            .details-column {
                display: flex;
                justify-content: center;
                flex-direction: column;
                width: 25%;
                gap: 1rem;
            
            }
            
            .details-item {
                align-items: start;
                display: flex;
                justify-content: center;
                gap: 1rem;
                flex-direction: row;
                padding-top: 2rem;
            }
            .details-image {
                width: 100%;
                padding: 2rem;
                
            }
            
            .details-icon {
                width: 20%;
            }
            .details-icon img{
                border: none;
                object-fit: cover;
                max.width: 100%;
                overflow:clip;
            }
            
            .details-text {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            
            .details-text p {
                font-size: 14px;
                font-weight: 300;
                text-align: left;
                color: hsl(209, 16%, 56%);
                font-family: poppins: sans-serif;
                width: 80%;
            }
            .details-title h3{
                font-size: 20px;
                margin:0;
                font-family:"Poppins",sans-serif;
                text-transform:capitalize;
            }
            img{
                object-fit: cover;
                max-width: 100%;
            }
        </style>
        <div class="details">
                <div class="details-column">
                    <div class="details-item">
                        <div class="details-icon">
                            <img src="images/key.png" alt="">
                        </div>
                        <div class="details-text">
                            <div class="details-title">
                                <h3>Fast and secure</h3>
                            </div>
                            <div class="details-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="details-icon">
                            <img src="images/loudspeaker.png" alt="">
                        </div>
                        <div class="details-text">
                            <div class="details-title">
                                <h3>Voice Assistant</h3>
                            </div>
                            <div class="details-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p> 
                            </div>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="details-icon">
                            <img src="images/diamond (2).png" alt="">
                        </div>
                        <div class="details-text">
                            <div class="details-title">
                                <h3>Apps you love</h3>
                            </div>
                            <div class="details-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="details-column">
                    <div class="details-image">
                        <img src="images/h.webp" alt="Details">
                    </div>
                </div>
                <div class="details-column">
                    <div class="details-item">
                        <div class="details-icon">
                            <img src="images/like.png" alt="">                        </div>
                        <div class="details-text">
                            <div class="details-title">
                                <h3>Stay in touch</h3>
                            </div>
                            <div class="details-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>   
                            </div>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="details-icon">
                            <img src="images/head.png" alt="">                        </div>
                        <div class="details-text">
                            <div class="details-title">
                                <h3>Designed for you</h3>
                            </div>
                            <div class="details-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="details-icon">
                            <img src="images/watch.png" alt="">                        </div>
                        <div class="details-text">
                            <div class="details-title">
                                <h3>Precise timepiece</h3>
                            </div>
                            <div class="details-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        `;

    }
}

customElements.define('details-component', Details);