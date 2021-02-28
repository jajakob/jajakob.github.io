const doc_style = getComputedStyle(document.documentElement);

// Get all the list elements
let li_collection = document.getElementsByClassName("nav-li");
const home = li_collection[1].getElementsByClassName("nav-li-a")[0];

// document.documentElement.style.setProperty('--li-height', getComputedStyle(home).height);


// Loop through the li items and add the active class to the current/clicked button
for (let i = 0; i < li_collection.length; i++) {
    li_collection[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

const logo = document.getElementById("logo");

logo.addEventListener("click", () => {
    li_collection[0].className = "nav-li active";
    for (let i = 1; i < li_collection.length; i++) {
        li_collection[i].className = "nav-li";
    }

});

// preloader
window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
        preloader.classList.add("preloader-finish");    
    }
});

// cursor
const bigBall = document.getElementById('cursor__ball--big');
const smallBall = document.getElementById('cursor__ball--small');
const hoverables = document.querySelectorAll('a');

function updateCursorPosition(e) {
    // let time = Date.now() - start;
    // start = Date.now();

    // let speed = 0.5;

    // let p1 = bigBall.getBoundingClientRect().y + bigBall.getBoundingClientRect().height/2;
    // let py = p1 + (e.pageY - p1) * speed;
    
    // p1 = bigBall.getBoundingClientRect().x + bigBall.getBoundingClientRect().width/2;
    // let px = p1 + (e.pageX - p1) * speed;

    let py = e.pageY;
    let px = e.pageX;

    bigBall.style.top = py + "px";
    bigBall.style.left = px + "px";
    smallBall.style.top = e.pageY + "px";
    smallBall.style.left = e.pageX + "px"; 
}

// Listeners
window.addEventListener('mousemove', updateCursorPosition);

// console.log(hoverables);

for (let i = 0; i < hoverables.length; i++) {    
    hoverables[i].addEventListener('mouseenter', e => {
        bigBall.style.transform = "translate(-50%, -50%) scale(2)";
    });
    hoverables[i].addEventListener('mouseleave', e => {
        bigBall.style.transform = "translate(-50%, -50%) scale(1)";
    });

    hoverables[i].addEventListener('mousedown', e => {
        bigBall.style.opacity = "0.1";
    });
    
    hoverables[i].addEventListener('mouseup', e => {
        bigBall.style.opacity = "1";
    });

}
