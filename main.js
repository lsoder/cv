
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

function h1Change(id) {
    id.innerHTML = "Designers.", 
    id.innerHTML = "Developers.", 
    id.innerHTML = "Gamers", 
    id.innerHTML = "Hello Everyone!";
    
}