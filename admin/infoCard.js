class InfoCard extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            html{
                background-color:rgb(42,76,187);s
            }
            h1{
                width: 2rem;
                max-width: 100%;
                color: white;
            }
        </style>
        <div class="cards">
            <div class="card">
                <div class="card-header">
                    <img src="" alt="edit">
                    <img src="" alt="delete">
                </div>
                <div class="card-info">
                    <div class="card-info-tag"></div>
                    <div class="card-info-data"></div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <img src="" alt="edit">
                    <img src="" alt="delete">
                </div>
                <div class="card-info">
                    <div class="card-info-tag"></div>
                    <div class="card-info-data"></div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <img src="" alt="edit">
                    <img src="" alt="delete">
                </div>
                <div class="card-info">
                    <div class="card-info-tag"></div>
                    <div class="card-info-data"></div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <img src="" alt="edit">
                    <img src="" alt="delete">
                </div>
                <div class="card-info">
                    <div class="card-info-tag"></div>
                    <div class="card-info-data"></div>
                </div>
            </div>
        </div>
        `;

    }
}

customElements.define('info-card-component', InfoCard);