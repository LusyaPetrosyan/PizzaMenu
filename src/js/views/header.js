export const renderHeaderPage = () => {
   const HeaderPage =  `<div>
        <button class="btnIcon"><i class="fas fa-align-justify"></i></button>;
        <button class="btnIcon"><i class="fal fa-arrow-alt-left"></i></button>
    </div>`
    document.querySelector(".headerMenu").innerHTML = HeaderPage;
}


