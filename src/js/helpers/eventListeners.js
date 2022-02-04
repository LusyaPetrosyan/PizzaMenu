import {setCookie, getCookie} from "./localStorage"
import{renderMenuList} from "../views/menuList"
import{renderMenuPage} from "../views/menu"
import { renderProductMenuPage } from "../views/productMenu"
import router from "../routing"
export const registerEventListeners = () => {
    //aystex linelu e amragrel knopkayi clic ivente
    document.querySelector('.btn-register').addEventListener("click", function(){
        let selectableTable = document.getElementById("table");
        console.log(selectableTable.value);
        let number = +selectableTable.value;
         if (!isNaN(number)){
             setCookie("table", number);
            router.redirect("/menu");
         }
         else{
            alert ("Please choose the number");
         }
        })
        
}
export const menuListEventListeners = () => {
    document.querySelectorAll('.cube').forEach(function(cube){
        cube.addEventListener("click", function(event){
            console.log("worked");
            console.log(event);
            console.log(this);
            console.log(this.id);
            router.redirect(`/menu/${this.id}`);
        })
    } )
}
    export const productMenuEventListeners = () =>{
        document.querySelector('.ingr').addEventListener("click", function(){
            renderProductMenuPage();
        })
    }

    // export const 
    