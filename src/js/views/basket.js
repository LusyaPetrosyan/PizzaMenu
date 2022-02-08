import { humburgerEventListener } from "../helpers/eventListeners";
import { State } from "../helpers/model";
import {busketEventListener} from "../helpers/eventListeners";

export const renderBasketPage = () => {
  let sum;
  if (State.basket.length > 0) {
    sum = State.basket.reduce((a, b) => {
      return a + b.amount;
    }, 0);
  } else {
    sum = 0;
  }

  const wrapper = `<div class="coner">  <div class="coner1">      
    <div class="div4">Ընդհանուր։ <span>${sum}</span></div>
    <button class="btn-green" id="text">Հաստատել</button>  
</div> </div>`;
  
  document.querySelector(".container1").innerHTML = wrapper;
  let basket = State.basket.reduce((acc, current) => {
      console.log("State.basket:=", State.basket);
    return (acc += `
        <div class="div1" id="${current.id}">
        <div class="nkar">
        <img  class = "basketImg" src="${current.imagePath}" alt="${current.name}" width = "85px">
        </div>
        <div>${current.name}</div>
        <div>Գին՝ ${current.price}</div>
        <div>Քանակ՝ ${current.quantity} </div>
        <div>Արժեքը՝ ${current.amount}</div>
        <div class="ic  order-btn"><i class=" far fa-times-circle"></i></div>
        </div> 
    `);
  }, "");

  document.querySelector(".coner").insertAdjacentHTML("afterbegin", basket);
  humburgerEventListener();
  busketEventListener();
};


