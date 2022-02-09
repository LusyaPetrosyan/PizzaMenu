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
  
  <a href="">Sunk</a>
  <a href="">Popok</a>
  <a href="">Pnduk</a>
  <a href="">Mandarin</a>
  <a href="">Mayonez</a>
  <a href="">Ketchup</a>  
</div>`   
   
  document.querySelector(".filterMenu").innerHTML = filter;
  if(!document.getElementById('myDropdown')){
      document.querySelector('body').insertAdjacentHTML("afterend",dropDownWidget);

  }
  humburgerEventListener();
};
