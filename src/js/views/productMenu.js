import { productMenuPageEventListeners } from "../helpers/eventListeners";
import { humburgerEventListener } from "../helpers/eventListeners";
import CONSTANTS from "../helpers/constant";
import { State } from "../helpers/model";

export const renderProductMenuPage = (params) => {
  console.log("params:", params);
  let result = State.product.filter((item) => item.name === params);
  console.log("ID:", result);
  const product = `
<div class="main"> <div class="main1"></div>         
</div>
<div class="add"><button class="btn-green addBasket" id="text">Ավելացնել զամբյուղ</button></div>`;

  document.querySelector(".container1").innerHTML = product;
  fetch(`${CONSTANTS.HOST}/product?url=get-by-id&product_id=${result[0].id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data = data[0];
      let container = `
         <div class="text" id="dataName">${data.name}</div>
         <div class="pizzaMain">        
        
         <div class="pizzaImage">
         <img class="imgPizza" src="${data.imagePath}" alt=""></div>
         <div id="text" class="pizzaGin">
             Գին՝ ${data.currency} ${data.price}
         </div>
     </div>
     <div class="ingr">
         <div id="text" class="ingText">
             <p>Բաղադրություն</p>
         </div>
         <div id="text" class="whatIn">`;
      let ingrData = data.ingredients.map(function (ingredient) {
        return `<div>${ingredient.name}</div>`;
      });
      container += ingrData.join("");
      container += `</div>
         <div id="text" class="count">
             Քանակ   <div id="price">${data.price}</div>  
             <input type="number" value="1" id="quantity"/>        
                           
              </div>
     </div>`;
    
          
     document.querySelector(".main1").insertAdjacentHTML("beforeend", container);
      productMenuPageEventListeners(data);
      humburgerEventListener();
    });
};


