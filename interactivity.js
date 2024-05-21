const more = document.querySelector(".orange");
const less = document.querySelector("a.Two");
const popUp = document.querySelector(".popUp");

function openMore () {
    popUp.style.display = 'block';
    more.style.display = 'none';
    less.style.display = 'inline-block';
}

function hidePopUp() {
    popUp.style.display = 'none';
    more.style.display = 'inline-block';
    less.style.display = 'none';
}

