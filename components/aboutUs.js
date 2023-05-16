// ES6 classes to make custom HTML tags

class AboutUs extends HTMLElement {
    constructor() {
      super(); 
    }

    // this Callback funtion call when HTML is loaded

    connectedCallback() {
      this.innerHTML = `
      <div class="aboutUs container">
            <div class="aboutUs-tital">
            <h1>Our Strength</h1>
            <h3>Our strength lies in our ability to create and position a team hand-picked for every assignment</h3>
            </div>
            <div class="card-container">    

                <div class="card">
                    <h3>“CONTINUOUS IMPROVEMENT”</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et officia impe
                    dit debitis nisi fugiat quod, ad perspiciatis aliquid praesentium! Reprehenderit
                    repellendus dignissimos exercitationem deserunt nobis explicabo velit doloribus pariatur
                    expedita?</p>
                </div>
                <div class="card">
                    <h3>“CONTINUOUS IMPROVEMENT”</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et officia impe
                    dit debitis nisi fugiat quod, ad perspiciatis aliquid praesentium! Reprehenderit
                    epellendus dignissimos exercitationem deserunt nobis explicabo velit doloribus pariatur
                    expedita?</p>
                </div>
                <div class="card">
                    <h3>“FOCUS ON CLIENT”</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et officia impe
                    dit debitis nisi fugiat quod, ad perspiciatis aliquid praesentium! Reprehenderit
                    repellendus dignissimos exercitationem deserunt nobis explicabo velit doloribus pariatur
                    expedita?</p>
                </div>

            </div>
        </div>
      `;
    }
  }
  
  
  // defining the name of the tag
  customElements.define('about-component', AboutUs);



        

