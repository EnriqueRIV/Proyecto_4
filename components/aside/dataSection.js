import './dataSection.css';
import { data } from '/data/data.js';

export const templateData = () => {
  return `
  <section class="dataSection">
  <div class="contactPhoto">
  <img src=${data.photo} alt="Enrique Rivera Portrait" id="imgEnrique"/>
  <a href="mailto:${data.email}" class="contactMeLink"><h3 class="contactMe">Contactame</h3><span class="material-symbols-outlined"> mail </span></a>
  </div>
  <div>
  <h2>${data.name}</h2>
  <h3>${data.occupation}</h3>
  <p><span class="material-symbols-outlined"> home_pin </span>${data.home}</p>
  <p><span class="material-symbols-outlined"> travel_explore </span>${data.status}</p>
  </div>
  </section>
  `;
};
