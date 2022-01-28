import {menuListEventListeners} from "../helpers/eventListeners"
export const renderMenuList = () => {
    const wrapper = `<div class="menuList-container">

 <div class="yashik">
        <div id="hot_dishes" class="cube food" > 
           <div class="cubeText">
                 <p>Տաք Ուտեստ</p> 
            </div>         
        </div>
        <div id="snacks" class="cube">
            <div class="cubeText" > 
                <p> Խորտիկներ  </p>
            </div>
        </div>
        <div id="cace" class="cube">
           <div class="cubeText"> 
               <p>Քաղցրավենիք</p>
            </div>
        </div>
        <div id="drink" class="cube"> 
           <div class="cubeText">
              <p> Ըմպելիք </p>
            </div>
        </div>
        <div id="pizza" class="cube pizza"> 
            <div class="cubeText"> 
              <p> Պիցցաներ </p>
            </div>
        </div>
        <div id="salads" class="cube"> 
            <div class="cubeText"> 
               <p> Աղցաններ </p> 
            </div>
        </div>
    </div>`
    document.querySelector(".container1").innerHTML = wrapper;
    menuListEventListeners();
 }
