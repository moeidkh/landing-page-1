const template = document.createElement("template")
template.innerHTML = `
    <link rel="stylesheet" href="./src/Components css/NavBar.css">
    <nav class="navbar-container">
        <nav class="nav-container">
            <div class="icon">
            <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0017 36.6673V47.5003L38 36.5269V25.6952L19.0017 36.6673Z" fill="#2947A9"/>
                <path d="M27.5062 15.745L36.8802 10.3284L19.0017 0V10.8328L27.5062 15.745Z" fill="#0B267D"/>
                <path d="M11.6182 18.9795V29.8158L19.0015 34.0795V23.2481L11.6182 18.9795Z" fill="#91A1D4"/>
                <path d="M38 12.2701L19.0017 23.2481V34.0795L38 23.1061V12.2701Z" fill="#2947A9"/>
                <path d="M1.13135 10.3221L10.4492 15.7703L19.0014 10.8328V0L1.13135 10.3221Z" fill="#2947A9"/>
                <path d="M9.3772 31.1103V17.68L0 12.2652V36.5266L19.0014 47.5V36.6669L9.3772 31.1103Z" fill="#91A1D4"/>
            </svg>
            <p class="site-title blue">TheBox</p>
            </div>
            <ul class="nav-item-container">
                <li class="nav-item"><a href="#">Home</a></li>
                <li class="nav-item"><a href="#">About Us</a></li>
                <li class="nav-item"><a href="#">Project</a></li>
                <li class="nav-item"><a href="#">Services</a></li>
                <li class="nav-item orange"><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    </nav>
    <nav class="mobile-nav-container">
        <div class="icon">
            <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0017 36.6673V47.5003L38 36.5269V25.6952L19.0017 36.6673Z" fill="#2947A9"/>
                <path d="M27.5062 15.745L36.8802 10.3284L19.0017 0V10.8328L27.5062 15.745Z" fill="#0B267D"/>
                <path d="M11.6182 18.9795V29.8158L19.0015 34.0795V23.2481L11.6182 18.9795Z" fill="#91A1D4"/>
                <path d="M38 12.2701L19.0017 23.2481V34.0795L38 23.1061V12.2701Z" fill="#2947A9"/>
                <path d="M1.13135 10.3221L10.4492 15.7703L19.0014 10.8328V0L1.13135 10.3221Z" fill="#2947A9"/>
                <path d="M9.3772 31.1103V17.68L0 12.2652V36.5266L19.0014 47.5V36.6669L9.3772 31.1103Z" fill="#91A1D4"/>
            </svg>
            <p class="site-title blue">TheBox</p>
        </div>
        <div class="menu-icon">
            <div class="line"></div>
        </div>
    </nav>
    <div class="open-menu">
        <ul class="mobile-item-container">
            <li class="nav-item"><a href="#">Home</a></li>
            <li class="nav-item"><a href="#">About Us</a></li>
            <li class="nav-item"><a href="#">Project</a></li>
            <li class="nav-item"><a href="#">Services</a></li>
            <li class="nav-item orange"><a href="#">Contact Us</a></li>
        </ul>
    </div>
`

class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        const menu = this.shadowRoot.querySelector(".menu-icon");
        const menuItems = this.shadowRoot.querySelector(".mobile-item-container");
        const line = this.shadowRoot.querySelector(".line");
        let isOpen = false;
        console.log(menu)
        menu.addEventListener("click" , e => {
            if(!isOpen){
                line.style.top = "-0.75rem";
                menuItems.style.display = "flex";
                line.classList.add("line-clicked");
            }else{
                line.style.top = "0.25rem"
                menuItems.style.display = "none";
                line.classList.remove("line-clicked")
            }
            isOpen = !isOpen;
        })
    }
    // connecedCallback(){
        
    // }
}

export default NavBar;