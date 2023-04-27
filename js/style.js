//to change the carousel after 4 secs
// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    // console.log(x.length)
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
}

//incrementing the footers end date
let date = document.getElementById('incr-num');
let d = new Date();
let year = d.getFullYear();
// console.log(year)
date.innerText = year;