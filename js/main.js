const doc_style = getComputedStyle(document.documentElement);

// Get all the list elements
let li_collection = document.getElementsByClassName("nav-li");
const home = li_collection[1].getElementsByClassName("nav-li-a")[0];

console.log(li_collection[0]);
console.log(getComputedStyle(home).height);
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

})
