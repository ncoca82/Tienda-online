class Featured extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .featured {
                align-items: center;
                display: flex;
                gap: 2rem;
                justify-content: space-between;
                flex-direction: column;    
                margin: 5% 15%;
                width: 70%;
            }
            
            .featured-items {
                display: flex;
                gap: 5rem;
                justify-content: space-between;
            }
            
            .featured-item-image{
                align-items: center;
                display: flex;
                justify-content: center;
                width: 100%;
            }
            
            .featured-item-image svg{
                width: 30%;
            }
            
            .featured-title h2 {
                font-size: 3rem; 
                text-align: center;
                text-transform: uppercase;   
            }   
            
            .featured-description {
                width: 60% ;
            }
            
            .featured-description p{
                color: hsl(210, 5%, 54%);
                font-size: 1.2rem;
                text-align: center;
            }
            
            .featured-item-title {
                margin-bottom: 1rem;
            }
            
            .featured-item-title h3{
                text-align: center;
            }
            
            .featured-item-description p {
                text-align: center;
            }
        </style>
        <div class="header-logo">
            <img src="images/logo.png" alt="logo">
        </div>
        `;

    }
}

customElements.define('featured-component', Featured);