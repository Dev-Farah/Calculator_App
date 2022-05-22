"use strict";
// Calculator
var input = document.getElementById("input");

function getValue(num) {
    input.value += num;
}

function totalValue() {
    input.value = eval(input.value);
}

function allClear() {
    input.value = "";
}

function backspace() {
    input.value = input.value.slice(0, -1);
}

// Button Sound Effect
const audio = new Audio();
audio.src = "./images/pop.mp3";


// Bubbles Animation
function createBubble() {
    let section = document.querySelector('section');
    let createElement = document.createElement('span');
    var size = Math.random() * 60;

    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';

    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove();
    }, 3000)

}
setInterval(createBubble,50);