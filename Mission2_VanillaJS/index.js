let road = document.getElementById('road');
let mountain = document.getElementById('mountain');
let sky = document.getElementById('sky');
let moon = document.getElementById('moon');
let header = document.getElementById('header');


window.addEventListener('scroll', () => {
    let { scrollY } = window;

    road.style.top = 0.5 * scrollY + 'px';
    mountain.style.top = (150 + 0.05 * scrollY) + 'px';
    moon.style.left = 1.1 * scrollY + 'px';
    sky.style.top = -1.2 * scrollY + 'px';
    header.style.top = scrollY * 0.5 + 'px';


});

let hrElement;
let counter = 100;
for (let i = 0; i < counter; i++) {
    hrElement = document.createElement("HR");
    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
    hrElement.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(hrElement);
}

const loader = document.querySelector(".loader");
         window.onload = function(){
           setTimeout(function(){
             loader.style.opacity = "0";
             setTimeout(function(){
               loader.style.display = "none";
             }, 500);
           },1500);
         }

const scrollBtn = document.querySelector(".btn");
const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};
document.addEventListener("scroll", () => {
    btnVisibility();
});
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

