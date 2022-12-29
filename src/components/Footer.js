const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./src/Components css/Footer.css">
    <footer class="footer">
        <div class="address">
            <div class="footer-text">
                <section class="section">
                    <h4 class="footer-title">Address: </h4>
                    <p class="footer-desc">6391 Elgin St. Celina, Delaware 10299</p>
                </section>
                <section class="section">
                    <h4 class="footer-title">Phone: </h4>
                    <p class="footer-desc">+84 1102 2703</p>
                </section>
                <section class="section">
                    <h4 class="footer-title">Email: </h4>
                    <p class="footer-desc">hello@thebox.com</p>
                </section>
            </div>
            <div class="footer-logo">
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
        </div>
        <div class="social">
            <div class="footer-input">
                <label>Newsletter:</label>
                <div class="newsletter">
                    <input placeholder="Your email here" />
                    <button class="subscribe">Subscribe</button>
                </div>
            </div>
            <div class="footer-input">
                <label>Social:</label>
                <div class="social-logo">
                <i class="fi fi-brands-facebook"></i>
                <i class="fi fi-brands-linkedin"></i>
                <i class="fi fi-brands-twitter"></i>
                <i class="fi fi-brands-instagram"></i>
                <i class="fi fi-brands-telegram"></i>
                </div>
            </div>
        </div>
        </footer>
        <div class="copy">TheBox Company © 2022. All Rights Reserved</div>
`


class Footer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export default Footer;