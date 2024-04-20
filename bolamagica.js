// Definir la variable userName y establecerla en una cadena vacía
let userName = '';

// Verificar si el usuario ingresó un nombre
if (userName !== '') {
  // Usar interpolación de cadenas para iniciar sesión con el nombre del usuario
  console.log(`Hello, ${userName}!`);
} else {
  // Iniciar sesión sin nombre
  console.log('Hello!');
}
//Cree una variable con la pregunta a hacer 
let userQuestion = "¿Cuál es mi futuro?"

console.log(`El usuario ${userName} preguntó: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = ""
//Hago un switch donde depende el numero random que me de ,me da una respuesta

switch (randomNumber) {
    case 0:
        eightBall = 'Puede ser bueno';
        break;
    case 1:
        eightBall = 'definitivamente no es nada bueno';
        break;
    case 2:
        eightBall = 'Intenta de nuevo';
        break;
    case 3:
        eightBall = 'No lo se';
        break;
    case 4:
        eightBall = 'No se nada sobre eso';
        break;
    case 5:
        eightBall = 'Se viene algo bueno';
        break;
    case 6:
        eightBall = 'No parece ser prospero';
        break;
    case 7:
        eightBall = 'seguro pisas caca'
    default:
        eightBall = 'Sos salame';
        break;
}

console.log(eightBall);