//Creo una variable con mi edad
let myAge = 26;
//Valor que va cambiar
let earlyYears = 2;
earlyYears *= 10.5;
//Tomamos la variable myAge le restamos dos y la guardamos en una nueva
myAge -= 2;
let laterYears = myAge
//Multiplicamos la variable por 4 y la guardamos nuevamente
laterYears *= 4;

let myAgeInDogYears = earlyYears + laterYears;

let myName = "Nicolas"; // Ejemplo de nombre
let myNameLowerCase = myName.toLowerCase();


console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

console.log(laterYears);