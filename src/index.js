import router from "./js/routing";
import {getCookie, setCookie} from "./js/helpers/localStorage";


const hash = window.location.hash;
if (getCookie("table") != ""){
   let hashString = (hash.indexOf("#") >=0 &&
                    hash.split("#")[1] != "/") ? hash.split("#")[1] : "/menu";
   router.redirect(hashString);
}
else{
   router.redirect("/");
}




