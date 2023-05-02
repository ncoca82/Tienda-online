class CheckoutForm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .modal-box-2{
                background-color: hsl(0, 0%, 100%);
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            
            .modal-box-2-header{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 2rem;
            }
            .section-inputs{
                display: flex;
                gap: 2rem;
                position: relative;
                padding: 0.5rem 2.5rem;
            }
            .section-inputs ::placeholder{
                position: absolute;
                color:hsl(205, 15%, 77%) ;
                font-weight: 300;
            }
            .section-inputs input{
                width: 100%;
                border: 1px solid hsl(206, 29%, 91%);
                background-color: hsl(204, 56%, 98%);
            }
            .modal-box-2-header button {
                background-color: hsl(0, 0%, 100%);
                border: 1px solid hsl(206, 29%, 91%);
                border-radius: 18px;
                padding: 0.5rem 2rem;
                color: rgb(189, 199, 206);
                font-size: 13px;
                font-weight: 300;
                cursor: pointer;
            }
            .section-email{
                display: flex;
                flex-direction: column;
                padding:0.5rem 2.5rem;
            }
            .section-email input {
                height: 45px;
                border: 1px solid hsl(206, 29%, 91%);
                width: 100%;
                background-color: hsl(204, 56%, 98%);
                margin: 1rem auto;
            }
            .section-email ::placeholder{
                position: absolute;
                color:hsl(205, 15%, 77%) ;
                font-weight: 300;
            }
            .section-inputs-select{
                padding:0.5rem 2.5rem;
                width: 100%;
            }
            .section-inputs-select input {
                height: 45px;
                border: 1px solid hsl(206, 29%, 91%);
                width: 85%;
                background-color: hsl(204, 56%, 98%);
                
            }
            .section-inputs-select ::placeholder{
                position: absolute;
                color:hsl(205, 15%, 77%) ;
                font-weight: 300;
            }
            .modal-box-2-button{
                all: unset;
                align-self: center;
                border:none;
                margin-top: 10px;
            }
            
            .modal-box-2-button button:hover{
                background-color: hsl(0, 0%, 32%);
            }
            .modal-box-2-button button {
                background-color:hsl(209, 100%, 50%);
                color:hsl(0, 0%, 100%);
                border: none;
                width: 28rem;
                height: 5rem;
                border-radius: 4px;
                font-size: 1.5rem;
                font-weight: 600;
                text-transform: uppercase;
                cursor: pointer;
            }
            </style>

        <div slot="secondary-swipe-content" class="modal-box-2">
            <div class="modal-box-2-header">
                <button>Go back</button>
                <p></p>
            </div>
            <form action="submit">
                <div class="section-inputs">
                    <label for="name">
                        <input type="text" id="name" placeholder="First Name"/>
                    </label>
                    <label for="lastname">
                        <input type="text" id="username" placeholder="Last Name"/>
                    </label>
                </div>
                <div class="section-email">
                    <label for="email">
                        <input type="email" id="email" placeholder="Email address"/>
                    </label>
                    <label for="address">
                        <input type="text" placeholder="Address line 1" id="address"/>
                        <input type="text" id="address" placeholder="Address line 2"/>
                    </label>  
                </div>
                <div class="section-inputs">
                    <label for="state">
                        <input type="text" id="state" placeholder="State"/>
                    </label>
                    <label for="zipcode">
                        <input type="number" placeholder="Zip code">
                    </label>
                </div>
                <div class="section-inputs-select">
                    <label for="chosecountry">
                        <input list="chosecountry" placeholder="Please chose an option" id="chosecountry"/>
                        <datalist id="countries">
                            <option value="Spain">
                            <option value="United States">
                            <option value="England">
                            <option value="France">
                            <option value="Italy">
                        </datalist>
                    </label>  
                </div>
                
            </form>
            <div class="modal-box-2-button">
                <button>Finish Purchase</button>
            </div>
        </div>    
        `;

    }
}

customElements.define('checkout-form-component', CheckoutForm);