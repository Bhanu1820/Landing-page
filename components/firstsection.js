// ES6 classes to make custom HTML tags
class FirstSection extends HTMLElement {
    constructor() {
      super();
    }
    // this Callback funtion call when HTML is loaded
    connectedCallback() {
      this.innerHTML = `
        
        <div class="FirstContainer">

        <div class="rightHalf">
        <img src="images/coding_img.png" alt="image 1">
        </div>

            <div class="LeftHalf">
                    <h1>
                      Empowred <br>
                      by inovetion
                    <h1>
            </div>
            
        <div>
      `;
    }
  }
  // defining the name of the tag
  customElements.define('first-section-component', FirstSection);

  
 


