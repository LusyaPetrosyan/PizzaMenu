import {setCookie, getCookie,deleteCookie} from "./localStorage";
import{renderMenuList} from "../views/menuList";
import{renderMenuPage} from "../views/menu";
import { renderProductMenuPage } from "../views/productMenu";
import router from "../routing";


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
};
export const menuListEventListeners = () => {
    document.querySelectorAll('.cube').forEach(function(cube){
        cube.addEventListener("click", function(event){
            // console.log("worked");
            // console.log(event);
            // console.log(this);
            // console.log(this.id);
            router.redirect(`/menu/${this.id}`);
        })
    } )
};

    export const productMenuEventListeners = () =>{
        document.querySelectorAll('.card').forEach(item => item.addEventListener("click", function(){
           let hash = window.location.hash;
            router.redirect(`${hash}/${this.id}`);
        }))

        document.querySelector('.ingr').addEventListener("click", function(){
            renderProductMenuPage();            
        })
        document.querySelector('.dropbtn').addEventListener("click",function(){
            toggleFilter();
            
        })
        document.getElementById("myInput").addEventListener("keyup",function(){
            filterFunction();
        })
        function toggleFilter() {
            document.getElementById("myDropdown").classList.toggle("show");
            
          }
          
          function filterFunction() {
            var input, filter, ul, li, a, i,div,txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            div = document.getElementById("myDropdown");
            
            a = div.getElementsByTagName("a");
            console.log("a");
            for (i = 0; i < a.length; i++) {
                console.log("a");
              txtValue = a[i].textContent || a[i].innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
              } else {
                a[i].style.display = "none";
              }
            }
          }
    };

    export const sideNavEventListeners = () => {
        document.querySelector(".sidenav-span").addEventListener("click", function(){
            openNav();
            
        });document.querySelector(".closebtn").addEventListener("click", function(){
         closeNav();
        });function openNav() {
         document.getElementById("mySidenav").style.width = "250px";
        }function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }     
      document.querySelector(".tableId span").innerHTML = getCookie("table");
 };
      
 export const productMenuPageEventListeners = () => {
     document.querySelector(".addBasket").addEventListener("click", function() {         
        router.redirect("/basket");       
     })
 }
 
 export const humburgerEventListener = () => {
    if (document.querySelector(".humburger_exit")) {
        document.querySelector(".humburger_exit").addEventListener("click", function() {
            deleteCookie("table");
            router.redirect("/");
        });
    }
    if(document.querySelector(".humburger_home")) {
      document.querySelector(".humburger_home").addEventListener("click", function(){
       router.redirect("/menu");

      });
    }
    if(document.querySelector(".humburger_basket")) {
        document.querySelector(".humburger_basket").addEventListener("click", function(){
         router.redirect("/basket");
  
        });
      }
 }

    // export const 
    