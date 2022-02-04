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
        console.log("then 1:",data);
        data.reduce
       
    })
  
    registerEventListeners();
}
// style="background-image: url(./image/connect_to_table.jpg)" sra backgroundna chem karum dnem chi linum

/* <option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option> */