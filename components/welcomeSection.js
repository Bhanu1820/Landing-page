// ES6 classes to make custom HTML tags// ES6 classes to make custom HTML tags
class WelcomeSection extends HTMLElement {
    constructor() {
      super();
    }
    // this Callback funtion call when HTML is loaded
    connectedCallback() {
      this.innerHTML = `
        
        <div class="welcome-section-container">


            <div class="welcome-text">
        
                <h2>Welcome To Ayoma Technologies Private Limited</h2>
        
                <p>Ayoma Technologies Pvt. Ltd., is a successful offshore business process outsourcing 
                (BPO) service provider with an impeccable track record of delivering services to its clients.
                Ayoma Solution Pvt. Ltd.'s Management Team comprises of experienced technocrats and service-industry
                professionals who had served in different parts of the World for many years.
                </p>
        
            </div>
    
            <div class="welcome-image">
        
                <img src="images/dev.png" alt="welcome image">
        
            </div>
    
    
        </div>


      `;
    }
  }
  // defining the name of the tag
  customElements.define('welcome-section', WelcomeSection);