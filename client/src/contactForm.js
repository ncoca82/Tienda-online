class ContactForm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
        .contact{
            position: relative;
        }
        .contact-card{
            height: 45vh;
            max-height: 45vh;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 35%;
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
        .form-element-button button{
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
        .row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .form-element-label{
            height: 3rem;
        }
        .form-element-input input{
            width: 100%;
            height: 2.8rem;
            color:hsl(207, 5%, 56%) ;
            box-sizing: border-box;
        }
        </style>
                    
        <div class="contact-card-form">
            <form>
                <div class="row">
                    <div class="form-element">
                        <div class="form-element-label">
                            <label for="name"></label>
                        </div>
                        <div class="form-element-input">
                            <input id="name" type="text" placeholder="name" name="name">
                        </div>
                    </div>
                    <div class="form-element">
                        <div class="form-element-label">
                            <label for="email"></label>
                        </div>
                        <div class="form-element-input">
                            <input id="email" type="email" placeholder="e-mail adress" name="email">
                            <div class="counter-wrapper">
                                <span class="char-counter">0-20</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-element">
                        <div class="form-element-label">
                            <label for="subject"></label>
                        </div>
                        <div class="form-element-input">
                            <input id="subject" type="text" placeholder="subject" name="subject">
                            <div class="counter-wrapper">
                                <span class="char-counter">0-20</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-element">
                        <div class="form-element-label">
                            <label for="message"></label>
                        </div>
                        <div class="form-element-input">
                            <textarea id="message" name="message" placeholder="message"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-element-button">
                        <button>send message</button>
                    </div>
                </div>
            </form>
        </div>
        `;

    }
}

customElements.define('contact-form-component', ContactForm);