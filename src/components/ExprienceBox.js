const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="./src/Components css/ExprienceBox.css">
    <div class="exprience-box">
        <div class="exprience-box-icon">
            <i class="fi"></i>
        </div>
        <div class="exprience-box-text">
            <div class="exprience-box-number"></div>
            <div class="exprience-box-desc"></div>
        </div>
    </div>
`;

class ExprienceBox extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        const icon = this.shadowRoot.querySelector("i");
        icon.classList.add(this.getAttribute("icon"));
        const iconContainer = this.shadowRoot.querySelector(".exprience-box-icon");
        iconContainer.classList.add(this.getAttribute("iconDir"))
        const number = this.shadowRoot.querySelector(".exprience-box-number");
        number.innerHTML = this.getAttribute("number");
        const desc = this.shadowRoot.querySelector(".exprience-box-desc");
        desc.innerHTML = this.getAttribute("description")
    }
    observedAttributes(){
        return ["icon" , "number" , "description" , "iconDir"];
    }
}

export default ExprienceBox;