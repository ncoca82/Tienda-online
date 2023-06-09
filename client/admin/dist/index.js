(()=>{var n={582:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n        .button{\n            display:flex;\n            justify-content:center;\n        }\n            button {\n                width:95%;\n                height:3.5rem;\n                margin-bottom:3rem;\n                cursor:pointer;\n            }\n            button svg{\n                height:2rem;\n                fill:rgb(109,183,243);\n            }\n        </style>\n        <div class="button">\n            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg></button>\n        </div>\n        '}}customElements.define("button-component",n)},434:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            .form{\n                width: 100%;\n            }\n            .form-header{\n                background-color: white;\n                display: flex;\n                justify-content: space-between;\n                margin-bottom:6rem ;\n                height: 4rem;\n            }\n            .form-tabs{\n                display: flex;\n                align-items: center;\n                gap: 1rem;\n                max-width: 100%;\n            }\n            .form-tabs :first-child{\n                color: white;\n                background-color: hsl(207, 85%, 69%);\n                height: 4rem;\n                display: flex;\n                align-items: center;\n                padding: 0 1.5rem;\n            }\n            .form-icons{\n                display: flex;\n                gap: 1rem;\n                align-items: center;\n                cursor: pointer;\n                margin-right: 1rem;\n            }\n            .form-icons svg{\n                height: 4rem;\n                fill: hsl(207, 85%, 69%);\n            }\n            .form-tabs p{\n                font-family: \'Roboto\', sans-serif;\n                font-weight: 600;\n                font-size: 24px;\n                color:#808080 ;\n                cursor: pointer;\n            }\n            \n            .section-inputs-form {\n                position: relative;\n                margin: 1rem 0;\n                \n            }\n            \n            .section-inputs-form span {\n                position: absolute;\n                top: -50px;\n                font-size: 24px;\n                color: white;\n                font-weight: 600;\n                font-family: \'Roboto\', sans-serif;\n            }\n            \n            .section-inputs-form input {\n                padding: 15px 350px 10px 25px;\n                border-style: hidden;\n                border-bottom: 1px solid hsl(0, 0%, 100%);\n                margin-right: 1rem;\n                background-color: rgb(113,139,224);\n                font-family: \'Roboto\', sans-serif;\n            }\n            .section-inputs{\n                margin-bottom: 5rem;\n                width: 100%;\n            }\n            #date{\n                width: 165px;\n                color: hsl(0, 0%, 100%);\n                font-size: 18px;\n                font-family: \'Roboto\', sans-serif;\n            }\n        </style>\n        <div class="form">\n                <div class="form-header">\n                    <div class="form-tabs">\n                        <p>Principal</p>\n                        <p>Imágenes</p>\n                    </div>\n                    <div class="form-icons">\n                        <div id="clean-button">\n                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>\n                        </div>\n                        <div id="send-form-button">\n                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>\n                        </div>\n                    </div>\n                </div>\n                <form id="form" action="" method="">\n                    <div class="section-inputs">\n                        <label class="section-inputs-form" for="name">\n                            <span>Nombre</span>\n                            <input type="text" id="name" name="name"/>\n                        </label>\n                        <label class="section-inputs-form" for="email">\n                            <span>Email</span>\n                            <input type="email" id="email" name="email"/>\n                        </label>\n                    </div>      \n                    <div class="section-inputs">    \n                        <label class="section-inputs-form" for="password">\n                            <span>Password</span>\n                            <input type="password" id="password" name="password"/>\n                        </label>\n                        <label class="section-inputs-form" for="password">\n                            <span>Repeat password</span>\n                            <input type="password" id="password" name="repeat-password"/>\n                        </label>\n                    </div>\n                </form>\n            </div>\n        ';const n=this.shadow.getElementById("form");this.shadow.getElementById("send-form-button").addEventListener("click",(t=>{t.preventDefault();let e=new FormData(n),s=Object.fromEntries(e.entries());fetch("http://127.0.0.1:8080/api/admin/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((n=>n.json())).then((t=>{document.dispatchEvent(new CustomEvent("refreshTable")),n.reset()})).catch((n=>{console.log(n)}))}))}}customElements.define("form-component",n)},239:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            header{\n                display:flex;\n                justify-content:space-between;\n                align-items:center;\n                margin-bottom:1rem;\n                margin-left:3rem;\n            }\n            h1{\n                color:white;\n                font-size:3rem;\n                font-family: \'Poppins\', sans-serif;\n                font-weight:600;\n\n            }\n            .hamburger-button {\n                cursor: pointer;\n                width: 10%;\n                height: 2.5rem;\n                padding: 0;\n                position: relative;\n                transition: all 0.3s ease-in-out;\n                display:flex;\n                justify-content:center;\n            }\n            .hamburger-button span {\n                background-color: #fff;\n                height: 2px;\n                transition: all 0.3s ease-in-out;\n                width: 2rem;\n                color: white;\n                position: absolute;\n            }\n            .hamburger-button span:first-child {\n                top: calc(50% - 6px);\n            }\n            .hamburger-button span:nth-child(2) {\n                top: 50%;\n                transform: translateY(-50%);\n            }\n            .hamburger-button span:last-child {\n                bottom: calc(50% - 6px);\n            }\n            \n            .hamburger-button.active{\n                position: relative;\n            }\n            \n            .hamburger-button.active span:first-of-type {\n                transform: translateY(5px) rotate(45deg);\n            }\n            \n            .hamburger-button.active span:nth-of-type(2) {\n                opacity: 0;\n            }   \n            \n            .hamburger-button.active span:last-of-type {\n                transform: translateY(-5px) rotate(-45deg);\n            }\n        </style>\n        <header>\n            <div class="logo">\n                <h1>Detectib</h1>\n            </div>\n            <div class="title">\n                <h1>Clientes</h1>\n            </div>\n            <div class="hamburger-button">\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n        </header> \n        '}}customElements.define("header-component",n)},700:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.data=[]}static get observedAttributes(){return["url"]}async connectedCallback(){document.addEventListener("refreshTable",(async n=>{await this.loadData(),await this.render()}))}async attributeChangedCallback(n,t,e){await this.loadData(),await this.render()}loadData=async()=>{try{const n=await fetch(`http://127.0.0.1:8080/api${this.getAttribute("url")}`);this.data=await n.json()}catch(n){console.log(n)}};render(){this.shadow.innerHTML="\n        <style>\n            .cards{\n                width: 60vh;\n            }\n            .card{\n                with:100%;\n                height: 9rem;\n                margin-bottom: 2.5rem;\n                \n            }\n            .card-header{\n                background-color: hsl(207, 85%, 69%);\n                height: 3.5rem;\n                display: flex;\n                justify-content: end;\n                gap: 1rem;\n                cursor: pointer;\n            }\n            .card-header svg{\n                height: 3rem;\n                fill: hsl(0, 0%, 100%);\n            }\n            .card-info{\n                height: 50%;\n                background-color: rgb(113,139,224);\n                color: white;\n                padding: 1rem 0;\n                box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);\n            }\n            \n            .card-info-tag{\n                margin-left: 0.5rem;\n            \n            }\n            li {\n                font-family: 'Roboto', sans-serif;\n                font-weight: 600;\n                font-size: 21px;\n                line-height: 0.75;\n                margin-top: 0;\n                margin-bottom: 0.5rem;\n                list-style: none;\n                \n            }\n        </style>\n        <div class=\"cards\">\n            \n        </div>\n        ",this.data.rows.forEach((n=>{let t=this.shadow.querySelector(".cards"),e=document.createElement("div");e.classList.add("card"),t.appendChild(e);let s=document.createElement("div");s.classList.add("card-header"),e.appendChild(s),s.innerHTML='\n                <svg class="update" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>\n                <svg class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>\n            ';let o=document.createElement("ul");o.classList.add("card-info"),e.appendChild(o),Object.entries(n).forEach((([n,t])=>{let e=document.createElement("li");o.appendChild(e),e.textContent=`${n}: ${t}`}))}))}}customElements.define("info-card-component",n)}},t={};function e(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={exports:{}};return n[s](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var s in t)e.o(t,s)&&!e.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:t[s]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{"use strict";e(239),e(582),e(700),e(434)})()})();