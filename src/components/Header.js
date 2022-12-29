const template = document.createElement("template");
template.innerHTML= `
    <link rel="stylesheet" href="./src/Components css/Header.css">
    <header class="header">
        <h1 class="header-title">
            Building things is our mission
        </h1>
    </header>
`

class Header extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export default Header;