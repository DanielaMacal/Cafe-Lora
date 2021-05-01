import './style.css';

// console.log('funguju!');

const navElm = document.querySelector('nav');
const navAElm = document.querySelectorAll('nav a');

const showHideNav = () => {
  navElm.classList.toggle('nav-closed');
};

const navBtn = document.querySelector('#nav-btn');
navBtn.addEventListener('click', showHideNav);

navAElm.forEach((elm) => {
  elm.addEventListener('click', showHideNav);
});

let ordered = false;

const orderBtnElm = document.querySelector('.order-btn');
orderBtnElm.addEventListener('click', () => {
  if (ordered === false) {
    document.querySelector('.drink__cup').classList.add('drink__cup--selected');
    ordered = true;
    orderBtnElm.textContent = 'Zrušit';
  } else {
    document
      .querySelector('.drink__cup')
      .classList.remove('drink__cup--selected');
    orderBtnElm.textContent = 'Objednat';
    ordered = false;
  }
});
