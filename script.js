const change = 400;
const startButtonChange = document.getElementById('startButton');
const navchanges = document.getElementById('header');

// CHANGES HEADER NAVBAR //
window.addEventListener('scroll', () => {
    if (window.scrollY >= change) {
        startButtonChange.classList.add("green-button");
        navchanges.classList.add("navChange");
        startButtonChange.classList.remove("green-button-off");
        navchanges.classList.remove("head-off");
        
    } else if (window.screenY <= change) {
        startButtonChange.classList.remove("green-button");
        navchanges.classList.remove("navChange");
        startButtonChange.classList.add("green-button-off");
        navchanges.classList.add("head-off");
    }
});


// ANIMATION SVG M //
let m = document.querySelectorAll("g[stroke-linecap='butt']");

setInterval(() => {
    const random = Math.round(Math.random() * (m.length - 1));
    m[random].classList.toggle("invisible");
}, 10);