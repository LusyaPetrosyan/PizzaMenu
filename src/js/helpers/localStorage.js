export const setCookie =(name, value, expDate = 30) => {
    let date = new Date ();
    let time = date.getTime() + expDate * 24 * 60 * 60 * 1000;
    document.cookie = `${name} = ${value} ; expires = ${new Date(time)}`;
}

export const getCookie =(name) => {    
    console.log("tableName")
        let cname = name + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let cookieProps = decodedCookie.split(';');
        for(let i = 0; i < cookieProps.length; i++) {
          let c = cookieProps[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length+1, c.length);
          }
        }
        return "";      
}

export const  deleteCookie=(name) => {
  setCookie(name, "", {
    'max-age': -1
  })
}

export const setStorage = () => {
localStorage.setItem('basket', 'State.basket');
}

export const getStorage = () => {
 localStorage.getItem('basket');
}
