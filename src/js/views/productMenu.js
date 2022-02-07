import { productMenuPageEventListeners } from "../helpers/eventListeners";
import {humburgerEventListener} from "../helpers/eventListeners";
import   CONSTANTS from "../helpers/constant";


export const renderProductMenuPage = (params) => { 
    console.log("pepe:", params);
  
    const product = `<div id="text" class="text">
    <h1>Պեպերոնի</h1>
</div>
<div class="main">    
    
</div>
<div class="add"><button class="btn-green addBasket" id="text">Ավելացնել զամբյուղ</button></div>`
document.querySelector(".container1").innerHTML = product;
      
      fetch(`${CONSTANTS.HOST}/product?url=get-by-id&product_id=1`)
      .then(function(response){
          return response.json()
      })
      .then(function(data){  
          data = data[0];
          console.log("data:",data)
         let container = `<div class="pizzaMain">
         
         <h1>${data.name}</h1>
         <div class="pizzaImage">
         <img class="imgPizza" src="./image/pizza2.png" alt=""></div>
         <div id="text" class="pizzaGin">
             Գին՝ ${data.currency}${data.price}
         </div>
     </div>
     <div class="ingr">
         <div id="text" class="ingText">
             <p>Բաղադրություն</p>
         </div>
         <div id="text" class="whatIn">`;
          let ingrData =  data.ingredients.map(function(ingredient){

               return `<div>${ingredient.name}</div>`
           });
           container += ingrData.join("")
         container += `</div>
         <div id="text" class="count">
             Քանակ՝  <br>
             Կտոր +/- 
         </div>
     </div>`    
     document.querySelector(".main").insertAdjacentHTML("beforeend",container);
     
     productMenuPageEventListeners();
     humburgerEventListener();
    })     
   
    
 
}
