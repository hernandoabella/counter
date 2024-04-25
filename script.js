// Variables
let counter = 0; // Initialize counter variable to 0
const number = document.getElementById('number'); // Get element with ID 'number'
const button1 = document.getElementById('button1'); // Get element with ID 'button1'
const button2 = document.getElementById('button2'); // Get element with ID 'button2'

const add = () => {
   removeAnimationClass(); // Remove 'animation' and 'animation2' classes
   setTimeout(() => {
      number.classList.add('animation'); // Add 'animation' class after 10 milliseconds
   }, 10);
   counter++; // Increment counter variable
   testColor(); // Update number color
   console.log(counter); // Print current counter value to console
   number.innerText = counter; // Update 'number' element content with counter variable value
   return counter; // Return current counter value
}

const subtract = () => {
   removeAnimationClass(); // Remove 'animation' and 'animation2' classes
   setTimeout(() => {
      number.classList.add('animation2'); // Add 'animation2' class after 10 milliseconds
   }, 10);
   counter--; // Decrement counter variable
   testColor(); // Update number color
   console.log(counter); // Print current counter value to console
   number.innerText = counter; // Update 'number' element content with counter variable value
   return counter; // Return current counter value
}

// Remove 'animation' and 'animation2' classes
const removeAnimationClass = () => {
   number.classList.remove('animation2', 'animation');
}

const testColor = () => {
   if (counter < 0) {
      number.style.color = "var(--color2)"; // Use 'color2' for negative numbers
   } else if (counter > 0) {
      number.style.color = "var(--color1)"; // Use 'color1' for positive numbers
   } else {
      number.style.color = '#585757'; // Use '#585757' for number 0
   }
}

// Reset counter to 0 and update number color
const reset = () => {
   counter = 0; // Reset counter variable to 0
   removeAnimationClass(); // Remove animation classes
   testColor(); // Update number color
   console.log(counter); // Print reset counter value to console
   number.innerText = counter; // Update 'number' element content with counter variable value
   return counter; // Return reset counter value
}
