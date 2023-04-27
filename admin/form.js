class Form extends HTMLElement {

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
        <div class="form">
            <div class="form-header">
                <div class="form-header-tabs">

                </div>
                <div class="form-header-icon">
                    <img src="" alt="clean">
                    <img src="" alt="store">
                </div>
            </div>
            <form action="" method="">
                <div class="section-inputs">
                    <label for="name">
                        <span>Nombre</span>
                        <input type="text" id="name" name="name"/>
                    </label>
                    <label for="surname">
                        <span>Apellidos</span>
                        <input type="text" id="username" name="username"/>
                    </label>  
                <div class="section-inputs">    
                    <label for="email">
                        <span>Email</span>
                        <input type="email" id="email" name="email"/>
                    </label>
                    <label for="telephone">
                        <span>Teléfono</span>
                        <input type="number" id="phone" name="phone"/>
                    </label>
                </div>
                <div class="section-inputs">
                    <label for="movile">
                        <span>Móvil</span>
                        <input type="number" id="movile" name="movil"/>
                    </label>
                    <label for="address">
                        <span>Dirección</span>
                        <input type="text" id="address" name="address"/>
                    </label>  
                </div>
                <div class="section-inputs"> 
                    <label for="Provincia">
                        <span>Provincia</span>
                        <input type="text" id="provincia" name="provincia"/>
                    </label>
                    <label for="city">
                        <span>Ciudad</span>
                        <input type="text" id="city" name="city"/>
                    </label>
                </div>
                <div class="section-inputs">
                    <label for="Postal-code">
                        <span>Código postal</span>
                        <input type="number" id="postal" name="postal"/>
                    </label>
                    <label for="date">
                        <span>Fecha de inicio de servicio</span>
                        <input type="date" id="date" name="date"/>
                    </label>
                </div>
            </form>
        `;

    }
}

customElements.define('form-component', Form);