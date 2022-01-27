// ogtagorcel cookie
//sexani hamar @ntreluejic amragrelu knopkan sexmelu javascriptmanak petq e vercni sexani HTMLParagraphElementev da pahum enq quqii mej

export const setCookie =(name, value, expDate = 30) => {
    let date = new Date ();
    let time = date.getTime() + expDate * 24 * 60 * 60 * 1000;
    document.cookie = `${name} = ${value} ; expires = ${new Date(time)}`;
}


export const getCookie =(name) => {    
        let cname = name + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let cookieProps = decodedCookie.split(';');
        for(let i = 0; i <cookieProps.length; i++) {
          let c = cookieProps[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length + 1, c.length);
          }
        }
        return "";      
}