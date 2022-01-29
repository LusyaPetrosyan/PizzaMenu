export const renderHeaderPage = () => {
   const HeaderPage =  `<div class="headerIcon">
   <div id="mySidenav" class="sidenav">
   <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
   <a href="#">About</a>
   <a href="#">Services</a>
   <a href="#">Clients</a>
   <a href="#">Contact</a>
 </div>
 
 
 <span style="font-size:30px;cursor:pointer;float:right;background-color:white;" onclick="openNav()">&#9776; </span>
 <i class="fa fa-arrow-left" style="font-size:48px;color:blue;display:in-line"></i>
        
    </div>`
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
    document.querySelector(".headerMenu").innerHTML = HeaderPage;
}


// style="font-size:60px;color:blue
// <button class="btnIconArrow"><i class="fal fa-arrow-alt-left"></i></button> 
//<button class="btnIconHamburger"><i class="fas fa-align-justify"style="inline-block"></i></button>
