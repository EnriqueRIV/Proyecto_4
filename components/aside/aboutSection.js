import './aboutSection.css';
import { data } from '/data/data.js';

export const templateAbout = () => {
  return `
  <section class="aboutSection">
  <h3>Sobre mi</h3>
  <p>"${data.aboutMe}"</p>
  </section>
  `;
};
