// const doc_style = getComputedStyle(document.documentElement);

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


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener("orientationchange", function() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}, false);


const hoverables = document.querySelectorAll('a');

class Cursor {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        this.delay = 8;
        this.end_x = window.innerWidth / 2;
        this.end_y = window.innerHeight / 2;
        this.dot = document.getElementById('cursor__ball--small');
        this.outline = document.getElementById('cursor__ball--big');
    }

    init() {
        this.setupEventListeners();
        this.animateDotOutline();
    }

    setupEventListeners() {
        let self = this;
        document.addEventListener('mousemove', function(e) {
            self.end_x = e.pageX;
            self.end_y = e.pageY;
            self.dot.style.top = self.end_y + 'px';
            self.dot.style.left = self.end_x + 'px';
        });

        // Anchor hovering
        hoverables.forEach( item => {
            item.addEventListener('mouseover', function() {
                self.outline.style.transform = 'translate(-50%, -50%) scale(2)';
            });
            item.addEventListener('mouseout', function() {
                self.outline.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });

        // Click events
        document.addEventListener('mousedown', function() {
            self.outline.style.transform = 'translate(-50%, -50%) scale(2)';
        });
        document.addEventListener('mouseup', function() {
            self.outline.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    }

    animateDotOutline() {
        let self = this;
        
        self.x += (self.end_x - self.x) / self.delay;
        self.y += (self.end_y - self.y) / self.delay;
        self.outline.style.top = self.y + 'px';
        self.outline.style.left = self.x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    }
}

const cursor = new Cursor(window.innerWidth / 2, window.innerHeight / 2);
cursor.init();

// hoverables.forEach( item => {

// });

