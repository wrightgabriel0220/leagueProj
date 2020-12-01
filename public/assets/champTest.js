const levelUp = document.querySelector('#levelup');
const levelDown = document.querySelector('#leveldown');
const reset = document.querySelector('#levelreset');

let level = 0;

levelUp.addEventListener('click', () => {level++; console.log(level)});
levelDown.addEventListener('click', () => {level--; console.log(level)});
reset.addEventListener('click', () => {level = 0; console.log(level)});