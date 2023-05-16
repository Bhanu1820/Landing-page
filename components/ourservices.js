// ES6 classes to make custom HTML tags
class Services extends HTMLElement {
    constructor() {
      super(); 
    }
    // this Callback funtion call when HTML is loaded
    connectedCallback() {
      this.innerHTML = `
      <div class="aboutUs container">
            <div class="aboutUs-tital">
            <h1>Services</h1>
            <h3>See what we do best</h3>
            </div>
            <div class="card-container">    

                <div class="card-service">
                    <img src="images/digi.jpg" alt="Digital Marking">
                    <h3>Digital Marking</h3>  
                </div>

                <div class="card-service">
                    <img src="images/web.jpg" alt="Web Devlopment">
                    <h3>Web Devlopment</h3>
                </div>

                <div class="card-service">
                    <img src="images/software.jpg" alt="Software Devlopment">
                    <h3>Software Devlopment</h3>
                </div>

                <div class="card-service">
                    <img src="images/quality.jpg" alt="Quality Assurance">
                    <h3>Quality Assurance</h3>
                </div>

            </div>
        </div>
      `;
    }
  }
  
  // defining the name of the tag
  
  customElements.define('services-component',Services);



        

