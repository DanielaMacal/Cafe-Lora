import './style.css';
import { Layer } from '../Layer/index';

export const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  drinkElm.innerHTML = `
              <div class="drink__product">
              <div class="drink__cup">
                <img src="../assets/cups/${props.id}.png" />
              </div>
              <div class="drink__info">
                <h3>${props.name}</h3>
                
              </div>
            </div>
            <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>
  `;
  let layerElm = drinkElm.querySelector('.drink__info');

  // for(let i = 0; i < props.layers.lenght; i++) {
  //   layerElm.innerHTML += Layer(props.layers[i]);
  //   console.log('funguj');
  // }

  props.layers.forEach((item) => (layerElm.innerHTML += Layer(item)));

  const orderBtn = drinkElm.querySelector('.order-btn');
  orderBtn.addEventListener('click', () => {
    if (props.ordered === true) {
      orderBtn.textContent = 'Zrušit';
      drinkElm
        .querySelector('.drink__cup')
        .classList.add('drink__cup--selected');
      props.ordered = false;
    } else {
      orderBtn.textContent = 'Objednat';
      drinkElm
        .querySelector('.drink__cup')
        .classList.remove('drink__cup--selected');
      props.ordered = true;
    }
  });

  return drinkElm;
};
