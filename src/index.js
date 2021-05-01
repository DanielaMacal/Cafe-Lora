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

// let ordered = false;

// const orderBtnElm = document.querySelector('.order-btn');
// orderBtnElm.addEventListener('click', () => {
//   if (ordered === false) {
//     document.querySelector('.drink__cup').classList.add('drink__cup--selected');
//     ordered = true;
//     orderBtnElm.textContent = 'Zrušit';
//   } else {
//     document
//       .querySelector('.drink__cup')
//       .classList.remove('drink__cup--selected');
//     orderBtnElm.textContent = 'Objednat';
//     ordered = false;
//   }
// });

import { Layer } from './Layer/index';

// const layerElm = document.querySelector('.drink__info');

// const layers = [
//   {
//     color: '#feeeca',
//     label: 'mléčná pěna',
//   },
//   {
//     color: '#fed7b0',
//     label: 'teplé mléko',
//   },
//   {
//     color: '#613916',
//     label: 'espresso',
//   },
// ];

// for (let i = 0; i < layers.length; i++) {
//   layerElm.innerHTML += Layer(layers[i]);
// }

// const layerElm = document.querySelector('.drink__info');

// const layers = [
//   {
//     id: 'romano',
//     name: 'Romano',
//     ordered: false,
//     layers: [
//       {
//         color: '#fbdf5b',
//         label: 'citrón',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//   },
// ];

// for (let i = 0; i < layers.length; i++) {
//   layerElm.innerHTML += Layer(layers[i]);
// }

import { Drink } from './Drinks/index';

const drinkListElm = document.querySelector('.drinks-list');
drinkListElm.appendChild(
  Drink({
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  }),
);
