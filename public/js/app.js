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