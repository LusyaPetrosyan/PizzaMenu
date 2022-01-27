import {menuListEventListeners} from "../helpers/eventListeners"
export const renderMenuList = () => {
    const wrapper = `<div class="menuList-container">

 <div class="yashik">
        <div class="cube food" > 
           <div class="cubeText">
                 <p>Տաք Ուտեստ</p> 
            </div>         
        </div>
        <div class="cube">
            <div class="cubeText" > 
                <p> Խորտիկներ  </p>
            </div>
        </div>
        <div class="cube">
           <div class="cubeText"> 
               <p>Քաղցրավենիք</p>
            </div>
        </div>
        <div class="cube"> 
           <div class="cubeText">
              <p> Ըմպելիք </p>
            </div>
        </div>
        <div class="cube"> 
            <div class="cubeText"> 
              <p> Պիցցաներ </p>
            </div>
        </div>
        <div class="cube"> 
            <div class="cubeText"> 
               <p> Աղցաններ </p> 
            </div>
        </div>
    </div>`
    document.querySelector(".container1").innerHTML = wrapper;
    menuListEventListeners();

// function openHidelogin() {
//     let menyuHidden = document.querySelector(".btnIcon");
//     const newLocal = menyuHidden.style.display;
//     if (newLocal === '' || newLocal === 'none') {
//         newLocal = 'block';
//     } else {
//         newLocal= 'none';
//     };
// };
 }
