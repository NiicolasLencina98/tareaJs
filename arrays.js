/*
La matriz está representada por los corchetes []y el contenido interior.
Cada elemento de contenido dentro de una matriz se llama elemento .
Hay tres elementos diferentes dentro de la matriz.
Cada elemento dentro de la matriz es un tipo de datos diferente.

*/
const hobbies =['basquet','voley','futbol'];

console.log(hobbies)


//accedemos a un elemento y lo modificamos 

let seasons = ['Winter'/*0*/, 'Spring'/*1*/, 'Summer'/*2*/, 'Fall'/*3*/];

seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

//Accedo al segundo elemento y lo modifico  
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados'
// al ser una variable const se puede modificar los elementos , mas no la variable en si 

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

 condiments[0]='Mayo'

 console.log(condiments)

condiments = ['Mayo'];
console.log(condiments); // Imprime: ['Mayo']

utensils[3]='Spoon'

console.log(utensils)

//funciones en array .PUSH  Entonces, ¿cómo funciona .push()?
/*Accedemos al pushmétodo usando notación de puntos, conectando pushcon itemTrackerun punto.
Luego lo llamamos como una función. Esto se debe a que .push()es una función que JavaScript nos permite usar directamente en una matriz.
.push()Puede tomar un solo argumento o varios argumentos separados por comas. En este caso, estamos agregando dos elementos: 'item 3'y 'item 4'a itemTracker.
Observe que cambia , .push()o muta ,. itemTrackerEs posible que también .push()lo conozca como método de matriz destructivo , ya que cambia la matriz inicial.
Si está buscando un método que mute una matriz agregándole elementos, ¡entonces .push()es el método para usted!*/

const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
/*
Repasemos lo que sucedió en el ejemplo:

La flowersmatriz que tiene 3 elementos.
La función addFlower()tiene un parámetro de arrusos .push()para agregar un 'lily'elemento arr.
Llamamos addFlower()con un argumento flowersque ejecutará el código interno addFlower.
¡Comprobamos el valor de flowersy ahora incluye el 'lily'elemento! ¡La matriz fue mutada!
*/

const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']