class Login extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['url'];
    }

    async connectedCallback() {
        document.addEventListener('submitData', async (event) => {
        await this.loadData(event.detail.id);
      });
  
    await this.render();
    }
  
    async attributeChangedCallback(name, oldValue, newValue) {
    await this.render();
    }
  
    async render() {

    this.shadow.innerHTML = `
        
    <style>
        
        .container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            text-align: center;
            margin-top: 100px;
            align-items: center;
        }

        h2 {
            margin-bottom: 20px;
            font-size: 40px;
        }
        .input{
            display: flex;
            flex-direction: column;
            width: 20%;
            align-items:center;
            gap:0.5rem;
        }
        .boton{
            margin:20px;
        }

        label {
            font-size: 40px;
        }
        </style>


        <div class="container">
            <h2>Login</h2>
            <form class="submit" method="post">
            <div class="input">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input">    
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="input boton">    
                <input class="submit" type="submit" value="Login">
            </div>    
            </form>
    </div>
    `;

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleLoginFormSubmit);

    async function handleLoginFormSubmit(event) {
        event.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    await login(username, password);
    }

    async function login(username, password) {
        const url = `http://127.0.0.1:8080/api/admin/users/${id}`; 

    try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json'
                    }
                });

    if (response.ok) {
        const data = await response.json();
        console.log(data); 
    } else {
        throw new Error('Error en la solicitud al servidor');
        }
    } catch (error) {
        console.error(error);
        }
    }
}    
}

customElements.define('login-component', Login);
