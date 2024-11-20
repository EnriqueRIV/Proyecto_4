import './experience.css';
import { data } from '/data/data.js';

const experienceTemplate = () => {
  return `
<section class="experienceSection">
<h2>Experiencia Profesional</h2>
${data.workExperience
  .map(
    (item) => `
<article>
  <div>
    <img src=${item.logo} alt="${item.company}" title="${item.company}"/>
  </div>
  <div class="experienceData">
    <h3>${item.startDate} - ${item.endDate}</h3>
    <h3>${item.company}</h3>
    <h3>${item.position}</h3>
    <p>${item.description}</p>
  </div>
</article>
`
  )
  .join('')}
</section>
`;
};

export const printExperienceTemplate = () => {
  document.querySelector('main').innerHTML = experienceTemplate();
};
