import './education.css';
import { data } from '/data/data.js';

const educationTemplate = () => {
  return `
  <section class="educationSection">
  <h2>Educación Superior</h2>
  ${data.education
    .map(
      (item) => `
    <article>
      <div>
        <img src=${item.logo} alt="${item.university}" title="${item.university}"/>
      </div>
      <div class="educationData">
        <h3>${item.degree}</h3>
        <p>${item.university}</p>
        <p> ${item.graduationYear}</p>
      </div>
    </article>
    `
    )
    .join('')}
  </section>
  `;
};

export const printEducationTemplate = () => {
  document.querySelector('main').innerHTML = educationTemplate();
};
