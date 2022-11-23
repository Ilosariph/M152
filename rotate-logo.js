// index.js
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("logo");
    image.style.transform = "rotate(" + window.pageYOffset + "deg)";
}