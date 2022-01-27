import Router from "./lib/router.js";
import { renderFirstPage } from "./views/firstPage.js";
import {renderMenuList } from "./views/menuList";
import {renderMenuPage } from "./views/menu";
import {renderHeaderPage} from "./views/header"
let router = new Router();

router.addRoute("/", function () {
  renderFirstPage();
});

router.addRoute("/menu", function () {
  renderHeaderPage();
  renderMenuList();
});

router.addRoute("/menu/:product", function () {
//
});

router.addRoute("/menu/pizza", function () {
  renderMenuPage();
  });
export default router;