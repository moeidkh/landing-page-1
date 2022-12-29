const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="./src/Components css/ServicesBox.css">
    <div class="services-box">
        <div class="servicebox-icon">
            <i class="fi"></i>
        </div>
        <hr />
        <h3></h3>
    </div>
`

class ServicesBox extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        const serviceBox = this.shadowRoot.querySelector(".services-box");
        serviceBox.classList.add(this.getAttribute("background"));
        const iTag = this.shadowRoot.querySelector("i");
        const iTagAttr = this.getAttribute("icon");
        iTag.classList.add(iTagAttr);
        const hr = this.shadowRoot.querySelector("hr");
        hr.classList.add(this.getAttribute("hrColor"))
        const h3 = this.shadowRoot.querySelector("h3");
        h3.innerHTML = this.getAttribute("title");
    }

    observedAttributes(){
        return ["icon" , "background" , "hrColor" , "title"]
    }
}


export default ServicesBox;