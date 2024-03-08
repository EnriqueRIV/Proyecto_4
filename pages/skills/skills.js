import './skills.css';
import { data } from '/data/data.js';

const skillsTemplate = () => {
  return `
  <section class="skillsSection">
  <h2>Habilidades</h2>
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
    </section>
`;
};

export const printSkillsTemplate = () => {
  document.querySelector('main').innerHTML = skillsTemplate();
};
