import './style.css';
import { printHeaderTemplate as Header } from './components/header/header.js';
import { printAsideTemplate as Aside } from './components/aside/aside.js';
import { printFooterTemplate as Footer } from './components/footer/footer.js';
import { printSkillsTemplate as Skills } from './pages/skills/skills.js';
import { printExperienceTemplate as Experience } from './pages/experience/experience.js';
import { printEducationTemplate as Education } from './pages/education/education.js';
import { printProjectsTemplate as Projects } from './pages/projects/projects.js';
import { printHomeTemplate as Home } from './pages/home/home.js';
import { linkPages } from './utils/linkPages.js';

Header();
Aside();
Footer();

Home();

linkPages('#homeLink', Home);
linkPages('#skillsLink', Skills);
linkPages('#experienceLink', Experience);
linkPages('#educationLink', Education);
linkPages('#projectsLink', Projects);
if (
  document.querySelector(
    '.skillsLinkh .experienceLinkh .educationLinkh .projectsLinkh'
  )
) {
  linkPages('#skillsLinkh', Skills);
  linkPages('#experienceLinkh', Experience);
  linkPages('#educationLinkh', Education);
  linkPages('#projectsLinkh', Projects);
}
if (document.querySelector('#homeLink')) {
  document.querySelector('#homeLink').addEventListener('click', () => {
    document.querySelector('.home').classList.add('active');
    document.querySelector('.contactSection').classList.add('actives');
  });
}
