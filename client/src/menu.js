class Menu extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
        .header-menu ul {
            display: flex;
            gap: 2rem;
            justify-content: space-between;

        }
        
        .header-menu ul li {
            color: hsl(207, 17%, 72%);
            font-family: "Poppins",sans-serif;
            list-style: none;
            text-transform: uppercase;

        }
        .header-menu ul li a {
            color: hsl(206, 17%, 72%);
            text-decoration: none;
        }
        </style>
        <div class="header-menu">
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Featured</a></li>
                        <li><a href="">Details</a></li>
                        <li><a href="">Team</a></li>
                        <li><a href=""> Contact</a></li>
                    </ul>
                </nav>
            </div>
        `;

    }
}

customElements.define('menu-component', Menu);