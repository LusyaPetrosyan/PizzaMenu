import { renderFirstPage } from "./js/views/firstPage";
//import { renderMenuList }  from "./js/views/menuList";
// import { renderBasketPage } from "./js/views/basket";
//import { renderMenuPage}  from "./js/views/menu";

//import { renderFilterPage } from "./js/views/filter";
import router from "./js/routing";
import {getCookie, setCookie} from "./js/helpers/localStorage";
//renderFilterPage();
//renderMenuPage();
setCookie("table",3);
getCookie("table");
   renderFirstPage();
   //renderMenuList();
// renderBasketPage();
//document.querySelector(".btn").addEventListener("click",function(){
   //renderMenuList();
   
//})
