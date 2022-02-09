import { sideNavEventListeners } from "../helpers/eventListeners";
import { State } from "../helpers/model";

export const renderHeaderPage = () => {
  console.log("Basket:=", State.basket);
  console.log("BasketLength:=", State.basket.length);
  const HeaderPage = `
   <div id="mySidenav" class="sidenav">
   <a href="javascript:void(0)" class="closebtn">&times;</a>
   <a class="tableId">Table Number <span></span></a>
   <a class="humburger_home">Home</a>   
   <a class="humburger_basket">Basket <span class="ordersQuantity"></span></a>
   
   <a class="humburger_exit">Exit</a>
 </div>
 
 
 <span  class="sidenav-span" style="font-size:30px;cursor:pointer;float:right;background-color:white;">&#9776; </span>
 <i class="fa fa-arrow-left" style="font-size:48px;color:blue;background-image:url(./image/color.jpg)"></i>
        
   `;
  document.querySelector(".headerMenu").innerHTML = HeaderPage;
  sideNavEventListeners();
};

