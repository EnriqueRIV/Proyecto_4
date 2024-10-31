export const linkPages = (id, page) => {
  document.querySelector(id).addEventListener('click', () => {
    page();
    document.querySelector('.home').classList.remove('active');
    document.querySelector('.contactSection').classList.remove('actives');
  });
};
