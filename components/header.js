// ES6 classes to make custom HTML tags
class Header extends HTMLElement {
  constructor() {
    super(); 
  }
  // this Callback funtion call when HTML is loaded
  connectedCallback() {
    this.innerHTML = `
      
    <header>
    <nav class="nav-bar">
        <h2>Ayoma Technologies</h2>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutUs">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  </header>
    `;
  }
}

// defining the name of the tag

customElements.define('header-component', Header);