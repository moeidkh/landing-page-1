const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./src/Components css/Reputation.css">
    <div class="reputationbox">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 13.3333C35.884 13.3333 36.7319 13.6845 37.357 14.3096C37.9821 14.9348 38.3333 15.7826 38.3333 16.6667V23.3333C38.3333 24.2174 37.9821 25.0652 37.357 25.6904C36.7319 26.3155 35.884 26.6667 35 26.6667H33.23C32.8236 29.8888 31.2554 32.852 28.8195 35C26.3837 37.148 23.2476 38.3333 20 38.3333V35C22.6521 35 25.1957 33.9464 27.071 32.0711C28.9464 30.1957 30 27.6522 30 25V15C30 12.3478 28.9464 9.80429 27.071 7.92893C25.1957 6.05357 22.6521 5 20 5C17.3478 5 14.8043 6.05357 12.9289 7.92893C11.0535 9.80429 9.99996 12.3478 9.99996 15V26.6667H4.99996C4.1159 26.6667 3.26806 26.3155 2.64294 25.6904C2.01782 25.0652 1.66663 24.2174 1.66663 23.3333V16.6667C1.66663 15.7826 2.01782 14.9348 2.64294 14.3096C3.26806 13.6845 4.1159 13.3333 4.99996 13.3333H6.76996C7.17668 10.1115 8.74509 7.14878 11.1809 5.00112C13.6167 2.85346 16.7525 1.66846 20 1.66846C23.2474 1.66846 26.3832 2.85346 28.819 5.00112C31.2548 7.14878 32.8232 10.1115 33.23 13.3333H35ZM12.9333 26.3083L14.7 23.4817C16.2884 24.4767 18.1256 25.003 20 25C21.8743 25.003 23.7115 24.4767 25.3 23.4817L27.0666 26.3083C24.9487 27.6352 22.4992 28.3372 20 28.3333C17.5007 28.3372 15.0512 27.6352 12.9333 26.3083Z" fill="#F9995D"/>
        </svg>
        <div class="reputation-text">
            <h3 class="reputation-text-title"></slot></h3>
            <p class="reputation-desc"></p>
        </div>
    </div>
`

class Reputation extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        const hTagTitle = this.shadowRoot.querySelector(".reputation-text-title");
        hTagTitle.innerHTML = this.getAttribute("title")
        const pElem = this.shadowRoot.querySelector(".reputation-desc");
        pElem.innerHTML = this.getAttribute("desc")
    }
    observedAttributes(){
        return ["title" , "desc"]
    }
}

export default Reputation;