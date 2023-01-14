
var i = 1;
setInterval(
function nam() {
    window.scrollTo(0,i);
    if (i>1000) {
        i=0;
    }
    else{
        i+=600;
    }
}
, 4000);