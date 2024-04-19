let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);



let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}
//esto es lo mismo en ambos sentidos 

isLocked ? console.log('You will need a key to open the door.')
: console.log('You will not need a key to open the door.');

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.')
: console.log('You will not need a key to open the door.');



let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

isCorrect ? console.log('Correct!')
: console.log('Incorrect!')

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

//Todo lo anterior es refactorizar el codigo

//Condicionales con If y else if

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}