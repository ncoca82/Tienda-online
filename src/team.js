class Team extends HTMLElement {

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
            .team{
                padding:5rem 0;
                margin-bottom:5rem;
            }
            
            .team-title{
                margin-bottom: 1rem;
            }
            
            .team-title h2{
                font-size: 3rem;
                text-align: center;
                text-transform: uppercase;
                font-family: "Poppins", "sans-serif";
                margin:0;
            }
            
            .team-description{
                margin: 0 auto;
                width: 50%;
            }
            
            .team-description p{
                font-size: 1.2rem;
                line-height: 1.5;
                text-align: center;
                font-family: "Poppins", "sans-serif";
                margin:0;
            }
            
            .team-description::after{
                content: "";
                display: block;
                height: 0.4rem;
                margin: 1rem auto 5rem;
                width: 10%;
                background-color: hsl(300, 5%, 92%);
            }
            
            .team-items{
                display: flex;
                gap: 2rem;
                justify-content: space-between;
                margin: 0 auto;
                user-select: none;
                width: 80%;
            }
            
            .team-item{
                position: relative;
                padding-bottom:1.5rem;
                background-color:white;
            }
            
            .team-item-social-networks{
                align-items: center;
                background-color: hsla(212, 7%, 59%, 0.7);
                border-radius: 50px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 2rem;
                position: absolute;
                right: 1rem;
                top: 1rem;
                width: 2rem;
                transition: all 0.5s ease-in-out;
            }
            
            .team-item-social-networks.active{
                background-color: hsl(208, 13%, 25%);
                height: max-content;
                padding-bottom: 0.5rem;
            }
            
            .team-item-social-networks.active svg{
                fill: hsl(210, 7%, 59%);
                margin: 0.1rem 0;
                width: 1.3rem;
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
            
            .team-item-social-network svg{
                cursor: pointer;
            }
            
            .team-item-image{
                margin-bottom: 1rem;
            }
            
            .team-item-title{
                margin-bottom: 1rem;
            }
            
            .team-item-title h3{
                font-size: 1.2rem;
                font-weight: 500;
                text-align: center;
                font-family: "Poppins", "sans-serif";
                margin:0;
            }
            
            .team-item-description p{
                font-size: 0.9rem;
                text-align: center;
                font-family: "Poppins", "sans-serif";
                margin:0;
            }
        </style>
        <div class="team">
                <div class="team-title">
                    <h2>Meet the team</h2>
                </div>
                <div class="team-description">
                    <p>We are a small group of inverntors, hackers and designers from the differrent parts of the world on a mission.</p>
                </div>
                <div class="team-items">
                    <div class="team-item">
                        <div class="team-item-social-networks">
                            <div class="hamburger-button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>                </div>
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>twitter</title><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg>                </div>
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>linkedin</title><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg> 
                            </div>  
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>instagram</title><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
                            </div>
                        </div>
                        <div class="team-item-image">
                            <picture>
                                <source media="(min-width: 1024px)" srcset="images/team-1.webp">
                                <source media="(min-width: 768px)" srcset="images/team-1.webp">
                                <source media="(min-width: 480px)" srcset="images/team-1.webp">
                                <img src="images/team-1.webp" alt="Imagen equipo">
                            </picture>
                        </div>
                        <div class="team-item-title">
                            <h3>Gary Elliott</h3>
                        </div>
                        <div class="team-item-description">
                            <p>Co-Founder and CEO</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <div class="team-item-social-networks">
                            <div class="hamburger-button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>                </div>
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>twitter</title><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg>                </div>
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>linkedin</title><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg> 
                            </div>  
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>instagram</title><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
                            </div>
                        </div>
                        <div class="team-item-image">
                            <picture>
                                <source media="(min-width: 1024px)" srcset="images/team-2.webp">
                                <source media="(min-width: 768px)" srcset="images/team-2.webp">
                                <source media="(min-width: 480px)" srcset="images/team-2.webp">
                                <img src="images/team-2.webp" alt="Imagen equipo">
                            </picture>
                        </div>
                        <div class="team-item-title">
                            <h3>Jeffrey Allen</h3>
                        </div>
                        <div class="team-item-description">
                            <p>Co-Founder and CTO</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <div class="team-item-social-networks">
                            <div class="hamburger-button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>                </div>
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>twitter</title><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg>                </div>
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>linkedin</title><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg> 
                            </div>  
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>instagram</title><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
                            </div>
                        </div>
                        <div class="team-item-image">
                            <picture>
                                <source media="(min-width: 1024px)" srcset="images/team-3.webp">
                                <source media="(min-width: 768px)" srcset="images/team-3.webp">
                                <source media="(min-width: 480px)" srcset="images/team-3.webp">
                                <img src="images/team-3.webp" alt="Imagen equipo">
                            </picture>
                        </div>
                        <div class="team-item-title">
                            <h3>Sara Mendez</h3>
                        </div>
                        <div class="team-item-description">
                            <p>Lead Developer, Hacker</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <div class="team-item-social-networks">
                            <div class="hamburger-button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>                
                            </div>
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>twitter</title><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg>                
                            </div>
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>linkedin</title><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg> 
                            </div>  
                            <div class="team-item-social-network">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>instagram</title><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
                            </div>
                        </div>
                        <div class="team-item-image">
                            <picture>
                                <source media="(min-width: 1024px)" srcset="images/team-4.webp">
                                <source media="(min-width: 768px)" srcset="images/team-4.webp">
                                <source media="(min-width: 480px)" srcset="images/team-4..webp">
                                <img src="images/team-4.webp" alt="Imagen equipo">
                            </picture>
                        </div>
                        <div class="team-item-title">
                            <h3>Albert Castro</h3>
                        </div>
                        <div class="team-item-description">
                            <p>3D Designer & Prototyper</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

    }
}

customElements.define('team-component', Team);