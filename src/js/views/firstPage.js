import { registerEventListeners } from "../helpers/eventListeners";
export const renderFirstPage = () => {   
    const wrapper = `<div  class="tableBack"><div class="table-child"> 
    <select name="" id="table">   
                <option hidden>Ընտրել Սեղանը</option>              
            </select><br>
            <button id="btn-green" class="btn-green">Ամրագրել</button>
            </div>
            </div>`
    document.querySelector(".container1").innerHTML += wrapper;
    fetch("http://localhost:8080/table?url=get-all")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log("then 1:",data[0].id);

       let x =  data.reduce(function(prValue,elem){
           return prValue +=  `<option value="${elem.id}">${elem.number}</option>`;
        }, "") 
        //   console.log("x");
          document.getElementById("table").insertAdjacentHTML("beforeend", x);
    })
  
    registerEventListeners();
}
// style="background-image: url(./image/connect_to_table.jpg)" sra backgroundna chem karum dnem chi linum
