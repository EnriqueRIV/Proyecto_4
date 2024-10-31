import './projects.css';
import { data } from '/data/data.js';
import { carouselTemplate } from '/components/carousel/carousel.js';

const projectsTemplate = () => {
  return `
  <section class="projectsSection">
  <h2>Proyectos</h2>
  <h3>Diseño</h3>
  <article>
  <div class="projectsBox">
  ${carouselTemplate(data.projects_1)}
  ${carouselTemplate(data.projects_1)}
    </div>
    <h3>Web App</h3>
    <div class="projectsBox">
  ${carouselTemplate(data.projects_2)}
  ${carouselTemplate(data.projects_2)}
    </div>
    <div class="footerContainer" id="guideContainer">
    <span class="material-symbols-outlined">gesture_select</span>
    <span>Click en la imagen para visitar Site</span>
    </div>
    </article>
  </section>
  `;
};
export const printProjectsTemplate = () => {
  document.querySelector('main').innerHTML = projectsTemplate();
};
