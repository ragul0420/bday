
var i = 30;
setInterval(
function nam() {
    window.scrollTo(0,i);
    if (i>1900) {
        i=30;
    }
    else{
        i+=625;
    }
}
, 4000);
function myFunction() {
    var x = document.getElementById("myAudio").autoplay;
  }