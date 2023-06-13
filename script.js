// Variables
let contador = 0; // Inicializamos la variable contador en 0
const numero = document.getElementById('numero'); // Obtenemos el elemento con el ID 'numero'
const boton1 = document.getElementById('boton1'); // Obtenemos el elemento con el ID 'boton1'
const boton2 = document.getElementById('boton2'); // Obtenemos el elemento con el ID 'boton2'

/* ----------------------------------------------------------
   1. Elimina las clases 'animacion' y 'animacion2'
   2. Agrega la clase 'animacion' después de 10 milisegundos de presionar el botón
   3. Incrementa la variable contador
   4. Ejecuta la función testColor() para actualizar el color del número
   5. Imprime el valor actual del contador en la consola
   6. Actualiza el contenido del elemento 'numero' con el valor de la variable contador
   7. Devuelve el valor actual del contador
------------------------------------------------------------- */
const sumar = () => {
   removeAnimationClass(); // Elimina las clases 'animacion' y 'animacion2'
   setTimeout(() => {
      numero.classList.add('animacion'); // Agrega la clase 'animacion' después de 10 milisegundos
   }, 10);
   contador++; // Incrementa la variable contador
   testColor(); // Actualiza el color del número
   console.log(contador); // Imprime el valor actual del contador en la consola
   numero.innerText = contador; // Actualiza el contenido del elemento 'numero' con el valor de la variable contador
   return contador; // Devuelve el valor actual del contador
}

/* ----------------------------------------------------------
   1. Elimina las clases 'animacion' y 'animacion2'
   2. Agrega la clase 'animacion2' después de 10 milisegundos de presionar el botón
   3. Decrementa la variable contador
   4. Ejecuta la función testColor() para actualizar el color del número
   5. Imprime el valor actual del contador en la consola
   6. Actualiza el contenido del elemento 'numero' con el valor de la variable contador
   7. Devuelve el valor actual del contador
------------------------------------------------------------- */
const restar = () => {
   removeAnimationClass(); // Elimina las clases 'animacion' y 'animacion2'
   setTimeout(() => {
      numero.classList.add('animacion2'); // Agrega la clase 'animacion2' después de 10 milisegundos
   }, 10);
   contador--; // Decrementa la variable contador
   testColor(); // Actualiza el color del número
   console.log(contador); // Imprime el valor actual del contador en la consola
   numero.innerText = contador; // Actualiza el contenido del elemento 'numero' con el valor de la variable contador
   return contador; // Devuelve el valor actual del contador
}

// Elimina las clases 'animacion' y 'animacion2'
const removeAnimationClass = () => {
   numero.classList.remove('animacion2', 'animacion');
}

/* ----------------------------------------------------------
   Comprueba el valor del contador y actualiza el color del número:
   - Si el contador es menor que 0, el número se muestra en color 'color2'
   - Si el contador es mayor que 0, el número se muestra en color 'color1'
   - Si el contador es igual a 0, el número se muestra en color '#333'
------------------------------------------------------------- */
const testColor = () => {
   if (contador < 0) {
      numero.style.color = "var(--color2)"; // Color 'color2' para números negativos
   } else if (contador > 0) {
      numero.style.color = "var(--color1)"; // Color 'color1' para números positivos
   } else {
      numero.style.color = '#333'; // Color '#333' para el número 0
   }
}

// Activa el contador automático:

// Sumar automáticamente
// setInterval(sumar, 1000);

// Restar automáticamente
// setInterval(restar, 1000);

// Reinicia el contador y actualiza el color del número
const reiniciar = () => {
   contador = 0; // Reinicia la variable contador a 0
   removeAnimationClass(); // Elimina las clases de animación
   testColor(); // Actualiza el color del número
   console.log(contador); // Imprime el valor reiniciado del contador en la consola
   numero.innerText = contador; // Actualiza el contenido del elemento 'numero' con el valor de la variable contador
   return contador; // Devuelve el valor reiniciado del contador
}
