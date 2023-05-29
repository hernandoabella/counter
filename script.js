// Variables

const numero = document.getElementById('numero');
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');

/* ----------------------------------------------------------
   1. Elimina las clases animacion y animacion2
   2. Agrega la clase animación luego de 10 milisegundos de haber presionado el botón
   3. Incremena la variable numero
   4. Ejecuta la función testColor()
   5. Imprime la consola
   6. Devuelve el contenido de la variable numero
------------------------------------------------------------- */

const sumar = () => {
   removeAnimationClass();
   setTimeout(() =>{
      numero.classList.add('animacion');
   }, 10);
   numero.innerText++;
   testColor();
   console.log(numero.innerHTML);
   return numero.innerText;
}

/* ----------------------------------------------------------
   1. Elimina las clases animacion y animacion2
   2. Agrega la clase animacion2 luego de 10 milisegundos de haber presionado el botón
   3. Decrementa la variable numero
   4. Ejecuta la función testColor()
   5. Imprime la consola
   6. Devuelve el contenido de la variable numero
------------------------------------------------------------- */

const restar = () => {
   removeAnimationClass();
   setTimeout(() =>{
      numero.classList.add('animacion2');
   }, 10);
   numero.innerText--;
   testColor();
   console.log(numero.innerHTML);
   return numero.innerText;
}

// Elimina las clases animacion y animacion2

const removeAnimationClass = () => {
   numero.classList.remove('animacion2', 'animacion');
}

/* ----------------------------------------------------------
   Comprueba si el color del número es mayor o menor que 0
   Si es menor el número se coloca de color verde
   Si es menor el número se coloca de color rojo
------------------------------------------------------------- */

const testColor = () =>{
   if(numero.innerText === '0'){
      numero.style.color = '#000';
   }else if(numero.innerText < '0'){
      numero.style.color = "var(--color2)";
   }else{
      numero.style.color = "var(--color1)";
   }
}

// Activa el contador automático: 

// Sumar automáticamente
// setInterval(sumar, 1000);

// Restar automáticamente
// setInterval(restar, 1000);

const reiniciar = () => {
   numero.innerText = '0'; // Reinicia la variable "numero" a 0
   removeAnimationClass(); // Elimina las clases de animación
   testColor(); // Actualiza el color del número
   console.log(numero.innerHTML); // Imprime el número reiniciado en la consola
   return numero.innerText; // Devuelve el contenido de la variable "numero" reiniciada
}