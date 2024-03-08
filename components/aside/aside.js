import './aside.css';
import { templateData as dataSection } from '/components/aside/dataSection.js';
import { templateAbout as aboutSection } from '/components/aside/aboutSection.js';
import { templateContact as contactSection } from '/components/aside/contactSection.js';

const template = () => {
  return `
  <div class="asideContainer">
  ${dataSection()}
  ${aboutSection()}
  ${contactSection()}
</div>
 `;
};

export const printAsideTemplate = () => {
  document.querySelector('aside').innerHTML = template();
};
