import './header.css';

const headerTemplate = () => {
  return ` 
  <nav class="navBar">
  
  <ul>
  <li><a href="#" class="navLink" id="homeLink" alt="Inicio" title="Inicio"><span class="navText">Inicio</span><span class="material-symbols-outlined navLinkMobile">home</span></a></li>
  <li><a href="#" class="navLink" id="skillsLink" alt="Habilidades" title="Habilidades"><span class="navText">Habilidades</span><span class="material-symbols-outlined navLinkMobile">construction</span></a></li>
  <li><a href="#" class="navLink" id="experienceLink" alt="Experiencia" title="Experiencia"><span class="navText">Experiencia</span><span class="material-symbols-outlined navLinkMobile">mindfulness</span></a></li>
  <li><a href="#" class="navLink" id="educationLink" alt="Educacion" title="Formación"><span class="navText">Formación</span><span class="material-symbols-outlined navLinkMobile">school</span></a></li>
  <li><a href="#" class="navLink" id="projectsLink" alt="Proyectos" title="Proyectos"><span class="navText">Proyectos</span><span class="material-symbols-outlined navLinkMobile">home_storage</span></a></li>
  </nav>
  <button id="darkmodeBtn" title="Modo Noche"><img src="/icons/dark.svg" alt="Icono Modo Oscuro" id="darkmodeIcon"/></button>
  `;
};

const themeSwitch = () => {
  document.body.classList.toggle('dark');
};

const listeners = () => {
  const darkmodebtn = document.querySelector('#darkmodeBtn');
  darkmodebtn.addEventListener('click', () => {
    themeSwitch();
    const theme = document.body.classList.contains('dark');
    if (theme) {
      document.querySelector('#darkmodeIcon').src = '/icons/light.svg';
      document.querySelector('#darkmodeIcon').title = 'Modo Día';
      document.querySelector('#imgEnrique').src = '/images/enriqueRiveraI.jpg';
      document.querySelector('#linkedinIcon').src = '/images/linkedin_w.png';
      document.querySelector('#whatsappIcon').src = '/images/whatsapp_w.png';
    } else {
      document.querySelector('#darkmodeIcon').src = '/icons/dark.svg';
      document.querySelector('#darkmodeIcon').title = 'Modo Noche';
      document.querySelector('#imgEnrique').src = '/images/enriqueRivera.jpg';
      document.querySelector('#linkedinIcon').src = '/images/linkedin.png';
      document.querySelector('#whatsappIcon').src = '/images/whatsapp.png';
    }
  });
};

export const printHeaderTemplate = () => {
  document.querySelector('header').innerHTML = headerTemplate();
  listeners();
};
