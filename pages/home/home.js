import './home.css';
import { templateData as dataSection } from '/components/aside/dataSection.js';
import { templateAbout as aboutSection } from '/components/aside/aboutSection.js';
import { templateContact as contactSection } from '/components/aside/contactSection.js';

const homeTemplate = () => {
  return `
  <section class="homeSection">
  <div class="optionContainer">
  <ul>
  <li><a href="#" class="navLink" id="skillsLinkh" alt="Habilidades" title="Habilidades"><span class="navText">Habilidades</span><span class="material-symbols-outlined navLinkMobile">construction</span></a></li>
  <li><a href="#" class="navLink" id="experienceLinkh" alt="Experiencia" title="Experiencia"><span class="navText">Experiencia</span><span class="material-symbols-outlined navLinkMobile">mindfulness</span></a></li>
  <li><a href="#" class="navLink" id="educationLinkh" alt="Educacion" title="Formación"><span class="navText">Formación</span><span class="material-symbols-outlined navLinkMobile">school</span></a></li>
  <li><a href="#" class="navLink" id="projectsLinkh" alt="Proyectos" title="Proyectos"><span class="navText">Proyectos</span><span class="material-symbols-outlined navLinkMobile">home_storage</span></a></li>
  </ul>
  </div>
  </section>
  `;
};
export const printHomeTemplate = () => {
  document.querySelector('main').innerHTML = homeTemplate();
};
