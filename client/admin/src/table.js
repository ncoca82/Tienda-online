class InfoCard extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.data = [];
    }

    static get observedAttributes () { return ['url'] }

    async connectedCallback () {
        document.addEventListener("refreshTable", async event => {
            await this.loadData()
            await this.render()
        });
    }
    async attributeChangedCallback (name, oldValue, newValue) {

        await this.loadData()
        await this.render()
    }

    loadData = async() => {
        try {
            const response = await fetch(`http://127.0.0.1:8080/api${this.getAttribute('url')}`)
            this.data = await response.json()
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        this.shadow.innerHTML = 
        `
        <style>
            .cards{
                width: 60vh;
            }
            .card{
                with:100%;
                height: 9rem;
                margin-bottom: 2.5rem;
                
            }
            .card-header{
                background-color: hsl(207, 85%, 69%);
                height: 3.5rem;
                display: flex;
                justify-content: end;
                gap: 1rem;
                cursor: pointer;
            }
            .card-header svg{
                height: 3rem;
                fill: hsl(0, 0%, 100%);
            }
            .card-info{
                height: 50%;
                background-color: rgb(113,139,224);
                color: white;
                padding: 1rem 0;
                box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
            }
            
            .card-info-tag{
                margin-left: 0.5rem;
            
            }
            li {
                font-family: 'Roboto', sans-serif;
                font-weight: 600;
                font-size: 21px;
                line-height: 0.75;
                margin-top: 0;
                margin-bottom: 0.5rem;
                list-style: none;
                
            }
        </style>
        <div class="cards">
            
        </div>
        `;

        this.data.rows.forEach(element => {
            let cards = this.shadow.querySelector('.cards');
            let card = document.createElement('div');
            card.classList.add('card');
            cards.appendChild(card);
    
            let cardHeader = document.createElement('div');
            cardHeader.classList.add('card-header');
            card.appendChild(cardHeader);
    
            cardHeader.innerHTML = `
                <svg class="update" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                <svg class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
            `;
    
            let cardInfo = document.createElement('ul');
            cardInfo.classList.add('card-info')
            card.appendChild(cardInfo);

            Object.entries(element).forEach( ([key, value]) => {

                let li = document.createElement('li');
                cardInfo.appendChild(li);
                li.textContent = `${key}: ${value}`
            })
        });
    
    }
}

customElements.define('info-card-component', InfoCard);