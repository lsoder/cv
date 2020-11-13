
const header = document.querySelector('header');
const menuOut = document.getElementById('hamburger-menu');

menuOut.onclick = function() {
    if (header.style.height == '100%') {
        header.style.height = null;
    } else {
        header.style.height = '100%';
    }
}

function mouseDown(color) {
    color.style.backgroundColor = "#D90368";
}

function h1Change() {
    let h1 = document.getElementById('h1');
    
    if (h1.innerHTML = "Hello world.") {
        h1.innerHTML = "Designers."; 
    } else if (h1.innerHTML = "Designers.") {
        h1.innerHTML = "Developers.";
    } else if (h1.innerHTML = "Developers.") {
        h1.innerHTML = "Gamers.";
    } else if 
        (h1.innerHTML = "Gamers.") {
        h1.innerHTML = "Hello Everyone!";
    } else if (h1.innerHTML = "Hello Everyone!") {
        h1.innerHTML = "Hello world.";
    }
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