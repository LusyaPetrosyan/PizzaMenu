import {menuListEventListeners} from "../helpers/eventListeners";
import {humburgerEventListener} from "../helpers/eventListeners";
import   CONSTANTS from "../helpers/constant";
import {State} from "../helpers/model";


export const renderMenuList = () => {
    const wrapper = `<div class="menuList-container">
 <div class="yashik">

        </div>
    </div>`
    document.querySelector(".container1").innerHTML = wrapper;
   fetch(`${CONSTANTS.HOST}/productType?url=get-all&=`)
   .then(function(response){
       return response.json()
   })
   .then(function(data){       
       State.productTypes = data;
       console.log(State);
       let cub = data.map((el) => {
        let result = `<div id="${el.name}" class="cube food" > 
        <div class="cubeText">
              <p>${el.name}</p> 
         </div>                 
     </div>`
     return result;
       }).join("");
       document.querySelector(".yashik").insertAdjacentHTML("beforeend",cub);
   

    menuListEventListeners();
    humburgerEventListener();
})
 }
