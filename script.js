// Variables
let counter = 0;
const number = document.getElementById('number');
const subtractButton = document.getElementById('subtractButton');
const resetButton = document.getElementById('resetButton');
const addButton = document.getElementById('addButton');

const add = () => {
   removeAnimationClass();
   setTimeout(() => {
      number.classList.add('animation');
   }, 10);
   counter++;
   testColor();
   console.log(counter);
   number.innerText = counter;
   return counter;
}

const subtract = () => {
   removeAnimationClass();
   setTimeout(() => {
      number.classList.add('animation2');
   }, 10);
   counter--;
   testColor();
   console.log(counter);
   number.innerText = counter;
   return counter;
}

const removeAnimationClass = () => {
   number.classList.remove('animation2', 'animation');
}

const testColor = () => {
   if (counter < 0) {
      number.style.color = "var(--color2)";
   } else if (counter > 0) {
      number.style.color = "var(--color1)";
   } else {
      number.style.color = '#585757';
   }
}

const reset = () => {
   counter = 0;
   removeAnimationClass();
   testColor();
   console.log(counter);
   number.innerText = counter;
   return counter;
}
