// index.js
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("abc");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}