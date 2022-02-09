import {setCookie, getCookie,deleteCookie} from "./localStorage";
import {setStorage, getStorage} from "./localStorage";
import{renderMenuList} from "../views/menuList";
import{renderMenuPage} from "../views/menu";
import { renderProductMenuPage } from "../views/productMenu";
import router from "../routing";
import { State } from "../helpers/model"


export const registerEventListeners = () => {
    
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
            console.log("cube_event:",event);        
            router.redirect(`/menu/${this.id}`);
        })
    } )
};

    export const productMenuEventListeners = (id) =>{
        document.querySelectorAll('.card').forEach(item => item.addEventListener("click", function(){
           let hash = window.location.hash;
            router.redirect(`${hash}/${this.id}`);
        }))

        document.querySelector('.dropbtn').addEventListener("click",function(){
            toggleFilter();
            
        })
        document.getElementById("myInput").addEventListener("keyup",function(){
            filterFunction();
        })
        function toggleFilter() {
            document.getElementById("myDropdown").classList.toggle("show");
            
          }
          // կիրառել ֆիլտր ֆունկցիան
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
      
 export const productMenuPageEventListeners = (data) => {
     console.log("Data:=>", data)
     document.querySelector(".addBasket").addEventListener("click", function() {   
        console.log(document.getElementById('quantity').value)        
        const quantity = document.getElementById('quantity').value;                   
        const amount = data.price*quantity;        
        let obj = {...data,
        quantity: Number(quantity),
        amount: amount        
    }     
       let found = State.basket.find(el => el.id == obj.id )
       if(found){
           found.quantity +=  Number(obj.quantity)
           found.amount += obj.amount
       } else {
        State.basket.push(obj);
       }
       console.log("found:=", found)
            
            document.querySelector(".ordersQuantity").innerHTML = State.basket.length;
            
            console.log("BasketData=",data);
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

 export const busketEventListener = () => {
     document.querySelectorAll(".order-btn").forEach(item => item.addEventListener("click", function(event){
       
        let orderDivId = event.target.parentElement.parentElement.getAttribute("id");
        debugger
        let newBasket = State.basket.filter(item => { 
            return item.id != orderDivId;   
         }) 
        
        State.basket = newBasket; 
        document.querySelectorAll('.coner .div1').forEach(function(element){
            element.remove()
            })
           let sum = 0;
        let basket = State.basket.reduce((acc, current) => {
            sum += current.price * current.quantity;
            console.log("State.basket:=", State.basket);
          return (acc += `
              <div class="div1" id="${current.id}">
              <div class="nkar">
              <img  class = "basketImg" src="${current.imagePath}" alt="${current.name}" width = "85px">
              </div>
              <div>${current.name}</div>
              <div>Գին՝ ${current.price}</div>
              <div>Քանակ՝ ${current.quantity} </div>
              <div>Արժեքը՝ ${current.amount}</div>
              <div class="ic  order-btn"><i class=" far fa-times-circle"></i></div>
              </div> 
          `);
        }, "");

        document.querySelector(".coner").insertAdjacentHTML("afterbegin", basket);
        document.querySelector(".coner1 .div4 span").innerHTML = sum;
        document.querySelector(".ordersQuantity").innerHTML--;
        busketEventListener();       
    }))
 }

    // export const 
    