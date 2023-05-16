class ContactInfo extends HTMLElement {

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
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }
            .contact{
                position: relative;
            }
            
            .contact-map iframe{
                border: none;
                height: 70vh;
                width: 100%;
            }
            
            .contact-card{
                max-height: 45vh;
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 35%;
            }
            
            .contact-card .contact-card-front{
                background-color: hsl(0, 0%, 100%);
                display: flex;
                height: 100%;
                flex-direction: column;
                justify-content: space-between;
                position: relative;
                width: 100%;  
                backface-visibility: hidden;
                padding: 3rem 2rem;
                transform: perspective(1000px) rotateY(0deg);
                transition: 1s;
            }
            
            .contact-card.active .contact-card-front{
                transform: perspective(1000px) rotateY(180deg);
            }
            
            .contact-card .contact-card-back{
                background-color: hsl(0, 0%, 100%);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: absolute;
                top: 0;   
                left: 0;
                width: 100%;  
                height: 100%;
                padding: 3rem 2rem;
                backface-visibility: hidden;
                transform: perspective(1000px) rotateY(-180deg);
                transition: 1s;
            }
            
            .contact-card.active .contact-card-back{
                transform: perspective(1000px) rotateY(0deg);
            }
            
            .contact-card-title{
                margin-bottom: 1rem;
            }
            
            .contact-card-title h2{
                font-size: 2rem;
                text-transform: uppercase;
                font-family: "Poppins", "sans-serif";
                font-weight: 600;
                text-decoration: none;
            }
            
            .contact-card-items{
                margin-bottom: 2rem;
            }
            
            .contact-card-item{
                display: flex;
                gap: 1rem;
                margin-bottom: 1rem;
                user-select: none;
            }
            
            .contact-card-item-icon svg{
                fill: hsl(207, 5%, 56%);
                padding-top: 0.5rem;
                width: 1.2rem;
            }
            
            .contact-card-item-text p{
                font-size: 1rem;
                line-height: 2;
                font-family: "Poppins", "sans-serif";
            }
            
            .contact-card-flip-button button{
                all: unset;
                background-color: hsl(209, 100%, 50%);
                color: hsl(0, 0%, 100%);
                cursor: pointer;
                font-family: 'Poppins', sans-serif;
                font-size: 1.2rem;
                font-weight: 600;
                margin: 0 auto;
                padding: 1.5rem 0;
                text-transform: uppercase;
                text-align: center;
                width: 100%;
            }
            
            .contact-card-close-button{
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
            }
            
            .contact-card-close-button svg{
                cursor: pointer;
                fill: hsl(205, 10%, 75%);
                width: 1.2rem;
            }
        </style>
        <div class="contact-card-title">
            <h2>Get in touch</h2>
        </div>
        <div class="contact-card-items">
            <div class="contact-card-item">
                <div class="contact-card-item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
                </div>
                <div class="contact-card-item-text">
                    <p>523 Sylvan Ave, 5th Floor<br>
                    Mountain View, CA 94041USA</p>
                </div>
            </div>
            <div class="contact-card-item">
                <div class="contact-card-item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>                                
                </div>
                <div class="contact-card-item-text">
                    <p>+1 (234) 56789<br>
                    +1 987 654 3210</p>
                </div>
            </div>
            <div class="contact-card-item">
                <div class="contact-card-item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>                                
                </div>
                <div class="contact-card-item-text">
                    <p>support@watchland.com</p>
                </div>
            </div>
        </div>        
        `;

    }
}

customElements.define('contact-info-component', ContactInfo);