function checkURL(url) {
    console.log("url checking", url);

    var check =  /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(check.test(url)){
        return true;
    }
    
    return false;
    
 }
export { checkURL }
