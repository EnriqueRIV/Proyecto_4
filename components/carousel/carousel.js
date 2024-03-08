import './carousel.css';

export const carouselTemplate = (images) => {
  return `
<div class="carouselContainer">

${images
  .map(
    (item, index) => `
<a href=${item.link} class="carouselLink" id="carouselLink${index}  target="_blank" alt="Link" rel="noreferrer noopener" title="Click para visitar Site"> 
<div class="carouselCard">
<img src=${item.preview} alt="${item.title}" id="slide${index}"/>
<div class="contentCard">
<h3>${item.title}</h3>
<p>${item.description}</p>
</div>
</div>
</a>
`
  )
  .join('')}
  </div>
  `;
};
