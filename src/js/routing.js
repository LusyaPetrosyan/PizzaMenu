import Router from "./lib/router.js";
import { renderFirstPage } from "./views/firstPage.js";
import {renderMenuList } from "./views/menuList";
import {renderMenuPage } from "./views/menu";
import {renderHeaderPage} from "./views/header";
import {renderProductMenuPage} from "./views/productMenu";
import {renderBasketPage} from "./views/basket";

let router = new Router();

router.addRoute("/", function () {
  renderFirstPage();
});

router.addRoute("/menu", function (event) {

  renderHeaderPage();
  renderMenuList();
});

router.addRoute("/menu/:product", function (event) {  

  renderMenuPage(event.params.product);
  });


router.addRoute("/menu/:product/:item", function (event) {  
  renderProductMenuPage(event.params);  
  
});
router.addRoute("/basket", function () {
  renderBasketPage();
});
export default router;