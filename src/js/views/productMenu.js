import { productMenuPageEventListeners } from "../helpers/eventListeners";
import {humburgerEventListener} from "../helpers/eventListeners";
export const renderProductMenuPage = () => {
    const product = `<div id="text" class="text">
    <h1>Պեպերոնի</h1>
</div>
<div class="main">

    <div class="pizzaMain">
        <div class="pizzaImage">
        <img class="imgPizza" src="./image/pizza2.png" alt=""></div>
        <div id="text" class="pizzaGin">
            Գին՝  ֏350
        </div>
    </div>
    <div class="ingr">
        <div id="text" class="ingText">
            <p>Բաղադրություն</p>
        </div>
        <div id="text" class="whatIn">
            Պանիր +/- <br>
            Երշիկ 
        </div>
        <div id="text" class="count">
            Քանակ՝  <br>
            Կտոր +/- 
        </div>
    </div>
    
</div>
 <div class="add"><button class="btn-green addBasket" id="text">Ավելացնել զամբյուղ</button></div>`
      document.querySelector(".container1").innerHTML = product;
      productMenuPageEventListeners();
      humburgerEventListener();
    }
