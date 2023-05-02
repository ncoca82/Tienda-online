class SwipeableElement extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .modal-box-content {
                display: flex;
                width: 100%;
                height: 100%;
                left: 50%;
                z-index: 1000;
                overflow: hidden;
                position: absolute;
            }
        </style>

        <div class="modal-box-content">
            <slot name="primary-swipe-content"></slot>
            <slot name="secondary-swipe-content"></slot>
        </div>        
        `;

    }
}

customElements.define('swipeable-element-component', SwipeableElement);