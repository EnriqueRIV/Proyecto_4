import './contactSection.css';
import { data } from '/data/data.js';

export const templateContact = () => {
  return `
  <section class="contactSection actives">
  <h3>Contactame</h3>
  <a href="tel:+34642746821">  
  <p>
      <span class="material-symbols-outlined"> phone_iphone </span>${data.phone}
    </p></a>
    <a href="mailto:${data.email}">
    <p>
      <span class="material-symbols-outlined"> mail </span>${data.email}
    </p></a>
    <ul>
      <li>
        <a href="http://www.linkedin.com/in/enrique-rivera-53512216"><img src="/images/linkedin.png" alt="Linkedin logo" id="linkedinIcon"/>
        </a>
      </li>
      <li>
        <a href="http://wa.me/34642746821/?text=Hola! :D"><img src="/images/whatsapp.png" alt="Whatsapp Logo" id="whatsappIcon"/>
        </a>
      </li>
    </ul>
  </section>
  `;
};
