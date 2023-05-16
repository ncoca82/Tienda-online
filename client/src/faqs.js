class Faqs extends HTMLElement {

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
            .faqs {
                width: 100%;
            }
            .faqs-header {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                
            }
            
            .faqs-header-title {
                justify-content: flex-start;
            }
            .faqs-header-title h1{
                font-family:"Poppins", "sans-serif";
                color: #374048;
                font-size: 2.5rem;
                font-weight: 600;
                text-decoration: none;
            }
            
            .faqs-header-description {
                display: flex;
                flex-direction: column;
                width: 35%;
            
            }
            
            .faqs-header-description p {
                font-weight: 300;
                color:hsl(210, 5%, 54%) ;
                font-size: 1.1rem;
                text-align: center;
            }
            
            .faqs-question {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                text-align: flex-start;
                margin: 8%;
                font-weight: 300;
            }
            .faq-question-item span{
                background-color: #fff;
                display: block;
                height: 2px;
            }
            
            .faqs-question-item-title {
                color: #374048;
            
            }
            .faqs-question-item-title h2{
                font-family: "Poppins", "sans-serif";
                font-size: 2rem;
                font-weight: 300;
                text-decoration: none;
                color: #374048;
            }
            .faqs-question-item-image {
                width: 24px;
                height: 24px;
                margin-left: 10px;
                justify-content: right;
            }
            .faqs-question-item-image.active{
                transform: translateY(5px) rotate(45deg);
            }    
            
            .faqs-question-item-flex {
                border-bottom: 1px solid #ddd;
                display: flex;
                justify-content: space-between;
                padding: 0.5rem 0;
            }
            .faqs-question-item {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .faqs-question-item-flex svg{
                cursor: pointer;
            }
            .faq-paragrafs{
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s;
            }
            
            .faq-paragrafs.active{
                max-height: 50vh;
            }
            
            .plus-minus-toggle {
                cursor: pointer;
                position: relative;
                width: 30px;
                height: 30px;
            }
            
            .plus-minus-toggle::before,
            .plus-minus-toggle::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 80%;
                height: 2px;
                background-color: black;
                transform: translate(-50%, -50%);
                transition: transform 0.3s ease, opacity 0.3s ease;
            }
            
            .plus-minus-toggle::before {
                transform-origin: center center;
                transform: translate(-50%, -50%) rotate(0deg);
            }
            
            .plus-minus-toggle::after {
                transform-origin: center center;
                transform: translate(-50%, -50%) rotate(90deg);
            }
            
            .plus-minus-toggle.active::before {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            
            .plus-minus-toggle.active::after {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            
            .plus-minus-toggle.active::before {
                opacity: 0;
            }
        
        </style>
        <div class="faqs">
                <div class="faqs-header">
                    <div class="faq-header-title">
                        <h1>Bootstrap 5 FAQ</h1>
                    </div>
                    <div class="faqs-header-description">
                        <p>A lot of people don't appreciate the moment until it's passed. I'm not trying my hardest, and I'm not trying to do.</p>  
                    </div>
                </div>
                <div class="faqs-question">
                    <div class="faqs-question-item">
                        <div class="faqs-question-item-flex">
                            <div class="faqs-question-item-title">
                                <h2>How do I order?</h2>
                            </div>
                            <div class="plus-minus-toggle"></div>
                        </div>
                        <div class="faq-paragrafs">
                            <p>We're not always in the position that we want to be at. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.</p>
                        </div>
                    </div>

                    <div class="faqs-question-item">
                        <div class="faqs-question-item-flex">
                            <div class="faqs-question-item-title">
                                <h2>How do I order?</h2>
                            </div>
                            <div class="plus-minus-toggle"></div>
                        </div>
                        <div class="faq-paragrafs">
                            <p>We're not always in the position that we want to be at. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.</p>
                        </div>
                    </div>
                    <div class="faqs-question-item">
                        <div class="faqs-question-item-flex">
                            <div class="faqs-question-item-title">
                                <h2>How do I order?</h2>
                            </div>
                            <div class="plus-minus-toggle"></div>
                        </div>
                        
                        <div class="faq-paragrafs">
                            <p>We're not always in the position that we want to be at. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.</p>
                        </div>
                    </div>
                    <div class="faqs-question-item">
                        <div class="faqs-question-item-flex">
                            <div class="faqs-question-item-title">
                                <h2>How do I order?</h2>
                            </div>
                            <div class="plus-minus-toggle"></div>
                        </div>
                        <div class="faq-paragrafs">
                            <p>We're not always in the position that we want to be at. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

    }
}

customElements.define('faq-component', Faqs);