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
