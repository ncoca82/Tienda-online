class ProductInfo extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .modal-box-1{
                width: 50%;
                height: 100%;
            }
            
            .modal-box-content-header{
                height: 10rem;
                width: 90%;
                text-align: start;
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                padding:3rem 2rem;
                padding-bottom: 0;
            }
            .modal-box-content-header p{
                font-size:20px;
                font-weight:400;
                text-transform: uppercase;
                color:hsl(208, 6%, 59%) ;
            
            }
            .modal-box-content-header h1{
                text-transform: uppercase;
                font-size:30px;
                font-weight:700;
                line-height: 3rem;
            }
            .modal-box-content-header p:not(:first-child){
                font-size:15px;
                font-weight:300;
            }
            .modal-box-content-header-price :first-child{
                color: hsl(208, 6%, 59%);
                font-size:25px;
                text-decoration: line-through;
                font-weight:300;
            }
            .modal-box-content-header-price :not(:first-child){
                color:hsl(209, 100%, 50%);
                font-size:32px;
                font-weight: 600;
            }
            .modal-box-content-header-price::after{
                content: '';
                padding:35px;
            }
            .modal-box-content-header-price :last-child{
                background-color:hsl(29, 100%, 53%) ;
                color:hsl(0, 0%, 100%);
                font-size: 11px;
                text-transform: uppercase;
                padding: 3px 15px;
                border-radius: 2px;
                margin-left: 3px;
            }
            .modal-box-content-header-price{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 0.5rem;
                border-bottom:1px solid hsl(0, 12%, 92%);
                margin-right: 3rem;
            }
            .modal-box-content-text{
                margin: 1.5rem 2rem;
                line-height: 1.5rem;
                border-bottom: 1px solid hsl(0, 12%, 92%);
                padding: 2rem 0;
            }
            .modal-box-content-text p{
                color:hsl(208, 6%, 59%);
                font-size: 16px;
                font-weight: 300;
            }
            .modal-box-content-opt{
                display: flex;
                flex-direction: row;
                gap: 1rem;
                border-bottom: 1px solid hsl(0, 12%, 92%);
                margin:0 2rem;
                padding-bottom: 1.5rem;
            
            }
            .modal-box-content-opt h4{
                text-transform: uppercase;
                color:hsl(204, 4%, 49%) ;
                font-weight: 400;
            }
            .modal-box-content-opt p{
                color:hsl(209, 100%, 64%);
                text-transform: uppercase;
                font-size: 14px;
                line-height: 5rem;
            }
            .modal-box-content-button{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .modal-box-content-button button{
                background-color:hsl(209, 100%, 50%);
                color:hsl(0, 0%, 100%);
                border: none;
                width: 90%;
                height: 5rem;
                border-radius: 4px;
                font-size: 1.5rem;
                font-weight: 600;
                cursor: pointer;
            }
            .modal-box-content-button button:hover{
                background-color: hsl(0, 0%, 32%);
            }
        </style>
        < slot="primary-swipe-content" class="modal-box-1">
                        <div class="close-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                        </div>
                        <div class="modal-box-content-header">
                            <div class="modal-content-header-title">
                                <p>smart watch</p>
                                <h1>watch limited edition</h1>
                                <p>model as1500</p>
                            </div>
                            <div class="modal-box-content-header-price">
                                <span>$299</span>
                                <span>$290</span>
                                <span>early bird offer</span>
                            </div>
                        </div>
                        <div class="tabs">
                            <input type="radio" id="tab1" name="tab-control" checked>
                            <input type="radio" id="tab2" name="tab-control">
                            <input type="radio" id="tab3" name="tab-control">
                            <ul>
                                <li title="Features"><label for="tab1" role="button"><svg viewBox="0 0 24 24"><path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 15,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z"/>
                            </svg><br></label></li>
                                <li title="Delivery Contents"><label for="tab2" role="button"><svg viewBox="0 0 24 24"><path d="M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" />
                            </svg><br></label></li>
                                <li title="Shipping"><label for="tab3" role="button"><svg viewBox="0 0 24 24">
                                <path d="M3,4A2,2 0 0,0 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8H17V4M10,6L14,10L10,14V11H4V9H10M17,9.5H19.5L21.47,12H17M6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5M18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5Z" />
                            </svg><br></label></li>
                            </ul>
                            <div class="slider"></div>
                            <div class="content">
                                <section>
                                    <h2>Features</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem sequi, quo tempore in eum obcaecati atque quibusdam officiis est dolorum minima deleniti ratione molestias numquam.</section>
                                <section>
                                    <h2>Delivery Contents</h2>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.</section>
                                <section>
                                    <h2>Shipping</h2>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nemo ducimus eius, magnam error quisquam sunt voluptate labore, excepturi numquam! Alias libero optio sed harum debitis! Veniam, quia in eum.</section>
                            </div>    
                        </div>
                        <div class="plus-minus-buttons">
                            <button class="plus-minus-button">-</button>
                            <input type="number" value="1">
                            <button class="plus-minus-button">+</button>
                        </div>      
                        <div class="modal-box-content-button">
                            <button>CHECKOUT</button>
                        </div>
                    </div>
        `;

    }
}

customElements.define('product-info-component', ProductInfo);