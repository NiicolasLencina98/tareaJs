let bobsFollowers = ['mike','miguel','matias','luis'];

let tinasFollowers =['rosita','luis','matias'];

let mutualFollowers = []
//aca recorremos cada matriz y vemos si hay alguno repetido y si hay iguales los gaurda en mutualFollores
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
      break;
    }
  }
}

console.log(mutualFollowers);