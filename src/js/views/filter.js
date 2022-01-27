export const renderFilterPage = () => {
  const filter = `<div class="main">
    <div class="filter1">
        <p>Filter</p>
        <ol class="olfil" >
            <li>Sunk</li>
            <li>Popok</li>
            <li>Pnduk</li>
            <li>Mandarin</li>
            <li>Mayonez</li>
            <li>Ketchup</li>
            <li>Fint u flyushka</li>
        </ol>
 
    </div>
    <div class="cards">
        <div class="card">
            <div class="sec1">
                <img src="./image/pizza2.png" alt="" class="imgpiz">
            </div>
            <hr class="hrst" style="border: 1px solid black;"> 
 
            <div class="sec2">                    
                Pepperoni Pizza <br>
                1pcs: ֏350                    
            </div>
 
            <hr class="hrst" style="border: 1px solid black;">
 
            <div class="sec3">                   
                <h3>Ingredients</h3>
                <ol style="list-style-type: inherit;">
                    <li >cheese</li>
                    <li>tomato</li>
                    <li>pepper</li>
                </ol>
            </div>
        </div>
        <div class="card">
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
                    <li>cheese</li>
                    <li>tomato</li>
                    <li>pepper</li>
                </ol>
            </div>
        </div>
    </div>
  </div>`;
  document.querySelector(".container1").innerHTML = filter;
};

