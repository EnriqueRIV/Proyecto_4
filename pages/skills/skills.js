import './skills.css';
import { data } from '/data/data.js';

const skillsTemplate = () => {
  return `
  <section class="skillsSection">
  <h2>Habilidades</h2>
  <h3>Programación y Desarrollo</h3>
  <article>
  ${data.skills
    .map(
      (item) => `
  <div class"skillCard">
  <div class="imgSkill">
  <img src=${item.logo} alt="${item.name}" title:"${item.name}"/>
  <h3>${item.name}</h3>
  </div>
  
  </div>
  `
    )
    .join('')}
    </article>
    <h3>Idiomas</h3>
    <article class="skillsLanguage">
    <p><span>Español C2</span></p><p><span>Francés C2</span></p>
    <p><span>Ingles B2</span></p><p><span>Alemán B1</span></p>
    </article>
    <h3>Esenciales e Interpersonales</h3>
    <article class="skillsSoft">
    <p><span>Trabajo en Equipo</span></p>
    <p><span>Liderazgo</span></p>
    <p><span>Trabajo Bajo Presión</span></p>
    <p><span>Dedicación</span></p>
    <p><span>Resolución de Conflictos</span></p>
    <p><span>Pensamiento Crítico</span></p>
    <p><span>Integridad</span></p>
    </article>
    </section>
`;
};

export const printSkillsTemplate = () => {
  document.querySelector('main').innerHTML = skillsTemplate();
};
