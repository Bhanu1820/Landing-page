// ES6 classes to make custom HTML tags
class ContactUsSection extends HTMLElement {
    constructor() {
      super();
    }
    // this Callback funtion call when HTML is loaded
    connectedCallback() {
      this.innerHTML = `
      <div class="content-section-contner">

        <div class="content-heading">
            <h2>Contact Us</h2><br>
            <h4>Get in touch</h4>
        </div>

        <div class="contact-body">

            <div class="contact-form">

            <form onsubmit="submitFunction()">

    
                <input type="text" id="name" name="name" placeholder="Name"><br><br>
                
                <input type="email" id="email" name="email" placeholder="Email"><br><br>
                
                <input type="text" id="contentNo" name="contentNo" placeholder="Contact No."><br><br>
                
                <input type="text" id="message" name="message" placeholder="Your Message"><br><br>
                
                <input type="submit" id="submit-button">
        
        
            </form>

            </div>
            <div class="contact-info">

                <h3>Contact & Support</h3>
                <p>Do you think you are missing out on something in the technology domain! or you have queries on
                any of the products or solutions we offer! Do fill the form and we will be more than happy to contact you.
                </p>
                <p>Phone: +91 8948117797</p>
                <p>Email: support@ayomatechnologies.com</p>
                

            </div>

        </div>


      </div>`
    
    }
}
// defining the name of the tag
customElements.define('contact-us-section-component', ContactUsSection);


// defining the funtion to sumit tha HTMl form
function submitFunction(){
  let Name= document.getElementById('name').value;
  let Email= document.getElementById('email').value;
  let ContactNo= document.getElementById('contentNo').value;
  let Message= document.getElementById('message').value;
  alert("Thank You "+Name+" Your Message: "+Message+" Contact No.: "+ContactNo+" Email:"+Email);  
}
