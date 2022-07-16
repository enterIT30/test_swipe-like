
const searchForm = document.querySelector('.header__form.form-header');
const searchInput = document.querySelector('.form-header__input');
const searchBtn = document.querySelector('.form-header__button');
const windowOuterWidth = window.outerWidth;


document.addEventListener('click', (e) => {
  if (searchBtn.classList.contains('active') && !e.target.closest('.header__form.form-header')) {
    searchBtn.classList.remove('active');
    searchInput.style.display = 'none';
    searchForm.style.cssText = `
      flex: 0 0 25px;
    `;
    searchBtn.style.cssText = `
      right: 0;
    `;
  }
});

searchForm.addEventListener('click', (e) => {

  if (windowOuterWidth <= 360 && !searchBtn.classList.contains('active')) {
    e.preventDefault();
    searchBtn.classList.add('active');
    searchInput.style.display = 'block';
    searchForm.style.cssText = `
      flex: 0 0 100%;
    `;
    searchBtn.style.cssText = `
      right: 10px;
    `;
  } /* else {
    e.target.submit();
  } */

});




