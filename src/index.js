//import { renderFirstPage } from "./js/views/firstPage";
//import { renderMenuList }  from "./js/views/menuList";
import { renderBasketPage } from "./js/views/basket";
//import { renderMenuPage}  from "./js/views/menu";

//import { renderFilterPage } from "./js/views/filter";
import router from "./js/routing";
import {getCookie, setCookie} from "./js/helpers/localStorage";
//renderFilterPage();
//renderMenuPage();

const hash = window.location.hash;

//renderFirstPage();
setCookie("table",3);
getCookie("table");
console.log("getCookie",getCookie("table"))
   //renderMenuList();
renderBasketPage();
//document.querySelector(".btn").addEventListener("click",function(){
   //renderMenuList();
   
//})
