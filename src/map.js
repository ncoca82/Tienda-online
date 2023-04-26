class Map extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .contact-map iframe{
                border: none;
                height: 75vh;
                width: 100%;
            }
        </style>
        <div class="contact-map">
            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-122.47386932373048%2C37.54661889462636%2C-122.32967376708986%2C37.64210198997575&amp;layer=mapnik"></iframe>
        </div>
        `;

    }
}

customElements.define('map-component', Map);