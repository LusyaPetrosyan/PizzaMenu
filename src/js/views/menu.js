import {productMenuEventListeners} from "../helpers/eventListeners";
import {renderFilterPage} from "./filter";
import {humburgerEventListener} from "../helpers/eventListeners";
import  CONSTANTS from "../helpers/constant";
import {createSlugFromName} from "../helpers/helpers"

export const renderMenuPage = (product_type_id) => {
    const wrapper = `<div class="pizza" >
    <div class="cards">        
        </div>
        <div class="filterMenu"></div>
    </div>
    <div class="load"> <p>Loading...</p> </div>
    `
    document.querySelector(".container1").innerHTML = wrapper;
    // fetch(`${CONSTANTS.HOST}/product?url=get-all-by-product-type&product_type_id=${product_type_id}`)
      fetch(`${CONSTANTS.HOST}/product?url=get-all-by-product-type&product_type_id=1`)
    .then(function(response){
        return response.json();
    }) 

    .then(function(data){        
        console.log(data)      
          let x = data.map(function(params) {
            console.log("params",params)
         return `<div class="card ingr card_${params.productTypeId}" id="${createSlugFromName(params.name)}">
         <div class="sec1">
             <img src="./image/pizza3.png" alt="" class="imgpiz">
         </div>
         <hr class="hrst" style="border: 1px solid black;">
         <div class="sec2">
             ${params.name}<br>
             1pcs: ֏${params.price}
         </div>
         <hr class="hrst" style="border: 1px solid black;">
         <div class="sec3">
             <h3>Ingredients</h3>
             <ol style="list-style-type: inherit;">
                 <li>chesse</li>
                 <li>tomato</li>
                 <li>pepper</li>
             </ol>
         </div>
         </div>`
     })
     document.querySelector(".cards").insertAdjacentHTML("afterbegin",x.join(""))

     productMenuEventListeners();
    })
    renderFilterPage();
    
    humburgerEventListener();
}
