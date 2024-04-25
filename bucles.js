/*Analicemos el ejemplo:

La inicialización es let counter = 0, por lo que el bucle comenzará a contar en 0.
La condición de parada es counter < 4, lo que significa que el bucle se ejecutará siempre que la variable del iterador countersea menor que 4.
La declaración de iteración es counter++. Esto significa que después de cada ciclo, el valor de counteraumentará en 1. Para la primera iteración counterserá igual a 0, para la segunda iteración counterserá igual a 1, y así sucesivamente.
El bloque de código está dentro de las llaves console.log(counter)y se ejecutará hasta que la condición se evalúe como false. La condición será falsa cuando countersea mayor o igual a 4; el punto en el que la condición se vuelve falsa a veces se denomina condición de parada .
Este forbucle hace posible escribir 0, 1, 2y 3mediante programación.
 */

for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
  }

/*este bucle va contar de 5 hasta 10 */

  for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  }

/* este bucle contara de 3 a 0*/
  for (let counter = 3; counter >= 0; counter--) {
    console.log(counter);
  }
  