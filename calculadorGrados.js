//Genere una variable Kelvin que guarda un valor
const kelvin = 0
//convierte kelvin a celcius
let celsius = kelvin - 273
//convierte celcius a fahrenheit
let fahrenheit = Math.floor((celsius * (9/5)) + 32)
//convienrte celcius a la escala de newton  
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees newton.`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

