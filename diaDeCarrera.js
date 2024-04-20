let raceNumbers = Math.floor(Math.random() * 1000);


let registeredEarly = true

let myAge = 15

if (myAge >= 18 && registeredEarly) {
  raceNumbers += 1000;
}


  

if(myAge >=18 && registeredEarly )

if (myAge >= 18 && registeredEarly) {
  console.log(`You will compete at 9:30 a.m. Your race number is ${raceNumbers}.`);
} else if (myAge >= 18) {
  console.log(`You will compete at 9:00 a.m. Your race number is ${raceNumbers}.`);
} else if (myAge >= 18 && !registeredEarly) {
    console.log(`You will run at 11:00 am. Your race number is ${raceNumbers}.`);
} else if(myAge <= 18 && !registeredEarly) {
    console.log(`You will run at 12:30 p.m. Your race number is ${raceNumbers}.`)
}
  else {
  console.log('You are not old enough to compete in this race.');
}
