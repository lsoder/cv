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

/**
 * Menu drops down when hamburger icon is clicked and hidden when clicked again.
 */
const header = document.querySelector('header');
const menuOut = document.getElementById('hamburger-menu');

menuOut.onclick = function() {
    if (header.style.height == '100%') {
        header.style.height = null;
    } else {
        header.style.height = '100%';
    }
}

/**
 * Changes background color on "About me" container.
*/
let color1 = document.getElementById('div-about');

color1.onclick = function() {
    color1.classList.toggle("color-bg");
}

/**
 * Hides background on hamburger menu when link is clicked.
 */
let home1 = document.getElementById('home1');
    
home1.onclick = function() {
    header.style.height = null;
}

let about1 = document.getElementById('about1');
    
about1.onclick = function() {
    header.style.height = null;
}

let skills1 = document.getElementById('skills1');
    
skills1.onclick = function() {
    header.style.height = null;
}

let contact1 = document.getElementById('contact1');
    contact1.onclick = function() {
    header.style.height = null;
}