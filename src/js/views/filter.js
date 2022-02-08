// import {productMenuEventListeners} from "../helpers/eventListeners"
import {humburgerEventListener} from "../helpers/eventListeners";
import  CONSTANTS from "../helpers/constant";
import {State} from "../helpers/model";

export const renderFilterPage = () => {
  const filter = `        
      
<div class="dropdown">
<button  class="dropbtn">Filter</button>
</div>
     `;   
     const dropDownWidget = `
     <div id="myDropdown" class="dropdown-content">
  <p>Filter</p>
  <input type="text" placeholder="Search.." id="myInput" >
  
  <a href="#about">Sunk</a>
  <a href="#base">Popok</a>
  <a href="#blog">Pnduk</a>
  <a href="#contact">Mandarin</a>
  <a href="#custom">Mayonez</a>
  <a href="#support">Ketchup</a>  
</div>`   
   
  document.querySelector(".filterMenu").innerHTML = filter;
  if(!document.getElementById('myDropdown')){
      document.querySelector('body').insertAdjacentHTML("afterend",dropDownWidget);

  }
  humburgerEventListener();
};

{/* <ol style="list-style-type: inherit;">`;                     
let ingrData =  params.ingredients.map(function(ingredient){
   return `<li>${ingredient.name}</li>`
});
container += ingrData.join("");
container +=` </ol>    */}