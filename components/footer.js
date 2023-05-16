// ES6 classes to make custom HTML tags
class Footer extends HTMLElement {
    constructor() {
      super();
    }
    // this Callback funtion call when HTML is loaded
    connectedCallback() {
      this.innerHTML = `
        
      <footer>

      <div class="footer-top">
          <div class="footer-about">
              <h3>Ayoma Technologies</h3>
              <br>
              <p>
                  Ayoma Technologies Pvt. Ltd., is a successful offshore
                  technologies solutions service provider with an impeccable track record 
                  of delivering services to its clients North America.
              </p>
          </div>  
          <div class="footer-designing">
  
              <h4>Designing</h4>
              <ul>
              <li>Web Design</li>
              <li>Responsive Web Design</li>
              <li>SEO</li>
              <li>Social Media</li>
              </ul>
          </div>  
          <div class="footer-linkes">
  
              <h4>Navigetion links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutUs">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
          </div>
              
      </div>
      <div class="footer-copyright">
          <p class="cp-text">
              © Copyright 2015 Company Name. All rights reserved.
          </p>
      </div>
      
  </footer>
      `;
    }
  }
  // defining the name of the tag
  customElements.define('footer-component', Footer);