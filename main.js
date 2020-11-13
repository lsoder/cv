window.addEventListener('load', main);

/**
 * Makes H1 clickable.
 */
function main() {
    let h1 = document.getElementById('h1');
    h1.addEventListener('click', h1Change);
}

/**
 * Change H1 heading on click to different text messages.
 */
function h1Change() {
    let h1 = document.getElementById('h1');
    
    if (h1.innerHTML === "Hello world.") {
        h1.innerHTML = "Designers."; 
    } else if (h1.innerHTML === "Designers.") {
        h1.innerHTML = "Developers.";
    } else if (h1.innerHTML === "Developers.") {
        h1.innerHTML = "Gamers.";
    } else if (h1.innerHTML === "Gamers.") {
        h1.innerHTML = "Hello Everyone!";
    } else if (h1.innerHTML === "Hello Everyone!") {
        h1.innerHTML = "Hello world.";
    }
}

/* HAMBURGER MENU ICON. */
const header = document.querySelector('header');
const menuOut = document.getElementById('hamburger-menu');
/**
 * Menu drops down when hamburger icon is clicked and hidden when clicked again.
 */
menuOut.onclick = function() {
    if (header.style.height == '100%') {
        header.style.height = null;
    } else {
        header.style.height = '100%';
    }
}

/** HAMBURGER MENU BACKGROUND SHOW/HIDE. */
let home1 = document.getElementById('home1');
 /**
 * Hides background on hamburger menu when home link is clicked.
 */   
home1.onclick = function() {
    header.style.height = null;
}

let about1 = document.getElementById('about1');
 /**
 * Hides background on hamburger menu when about link is clicked.
 */   
about1.onclick = function() {
    header.style.height = null;
}

let skills1 = document.getElementById('skills1');
 /**
 * Hides background on hamburger menu when skills link is clicked.
 */   
skills1.onclick = function() {
    header.style.height = null;
}
let contact1 = document.getElementById('contact1');
/**
 * Hides background on hamburger menu when contact link is clicked.
 */
    contact1.onclick = function() {
    header.style.height = null;
}

/* ABOUT ME CONTAINER BACKGROUND */
let color1 = document.getElementById('div-about');
/**
 * Changes background color on "About me" container onclick.
*/
color1.onclick = function() {
    color1.classList.toggle("color-bg");
}