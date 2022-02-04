import {productMenuEventListeners} from "../helpers/eventListeners"
export const renderMenuPage = () => {
    const wrapper = `<div class="pizza">
    <div class="cards">
        <div class="card ingr">
            <div class="sec1">
                <img src="./image/pizza1.png" alt="" class="imgpiz">
            </div>
            <hr class="hrst" style="border: 1px solid black;">
            <div class="sec2">
                Cheese Pizza <br>
                1pcs: ֏350
            </div>
            <hr class="hrst" style="border: 1px solid black;">
            <div class="sec3">
                <h3>Ingredients</h3>
                <ol style="list-style-type: inherit;">
                    <li>chesse</li>
                    <li>tomato</li>
                    <li>pepper</li>
                </ol>
            </div>
        </div>
        <div class="card ingr">
            <div class="sec1">
                <img src="./image/pizza2.png" alt="" class="imgpiz">
            </div>
            <hr class="hrst" style="border: 1px solid black;">
            <div class="sec2">
                Cheese Pizza <br>
                1pcs: ֏350
            </div>
            <hr class="hrst" style="border: 1px solid black;">
            <div class="sec3">
                <h3>Ingredients</h3>
                <ol style="list-style-type: inherit;">
                    <li>chesse</li>
                    <li>tomato</li>
                    <li>pepper</li>
                </ol>
            </div>
        </div>
        <div class="card ingr">
            <div class="sec1">
                <img src="./image/pizza3.png" alt="" class="imgpiz">
            </div>
            <hr class="hrst" style="border: 1px solid black;">
            <div class="sec2">
                Cheese Pizza <br>
                1pcs: ֏350
            </div>
            <hr class="hrst" style="border: 1px solid black;">
            <div class="sec3">
                <h3>Ingredients</h3>
                <ol style="list-style-type: inherit;">
                    <li>chesse</li>
                    <li>tomato</li>
                    <li>pepper</li>
                </ol>
            </div>
        </div>
    </div>
    <div class="load"> <p>Loading...</p> </div>


    `
    document.querySelector(".container1").innerHTML = wrapper;
    productMenuEventListeners();
}
//     <div class="hamburger-menu">
//     <input id="menu__toggle" type="checkbox" />
//     <label class="menu__btn" for="menu__toggle">
//       <span class="filterButton">Filter</span>
//     </label>
//     <ul class="menu__box">
//       <h1 class="filterWindowName">FILTER</h1>
//       <div class="parentInput">
//       <input type="text" class="searchIngredient" placeholder="Search ingredients..." />
//       <button class="searchButton"><i class="fas fa-search"></i></button>
//       </div>
//       <li><a class="menu__item" href="#">Chees</a></li>
//       <li><a class="menu__item" href="#">Tomato</a></li>
//       <li><a class="menu__item" href="#">Ketchup</a></li>
//       <li><a class="menu__item" href="#">Mushroom</a></li>
//       <li><a class="menu__item" href="#">Maiones</a></li>
//     </ul>
//   </div>
//     </div>