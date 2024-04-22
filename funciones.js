//Sintaxis y desarollo de una funcion
function getReminder(){
    console.log('Water the plants.')
  }
  
  function greetInSpanish(){
    console.log('Buenas tardes.')
  }

  //Llamar funciones
 //creamos una funcion y la llamamos varias veces
  function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.')
  }
  
  sayThanks()
  sayThanks()
  sayThanks()
  
  //Parametros y argumentos en una funcion
  // aca le damos un parametro y un argumento en este caso es Name, aca realizamos un saludo personalizado.
  function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  
  sayThanks('Cole')
  //Prueba de conexion

  //Es una funcion que se utiliza para contar monitores


  function monitorCount(rows,columns){
    return rows * columns
  };
  
  const numOfMonitors = monitorCount(5,4);//cuando se le asigna un valor al parametro se llama argumento
  
  console.log(numOfMonitors)

  //Una funcion para calcular el costo de todos los monitores

  function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows,columns){
    return monitorCount(rows, columns)  * 200
  }
  
  const totalCost = costOfMonitors(5,4)
  
  console.log(totalCost)

//Esta funcion comprueba el dia de la semana que es , si es Wednesday da true de lo contrario da False
 /* const plantNeedsWater = function(day) {
    if(day === 'Wednesday'){
      return true;
    } else {
      return false;
    }
  };
  
  console.log(plantNeedsWater('Tuesday'))

//Modificamos una funcion normal para volverla funcion flecha
const plantNeedsWater = function(day) {
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};*/
//funcion flecha
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};

//Otro tipo de refactorizacion en un solo bloque es el siguiente 

const plantNeedsWater2 = day => day === 'Wednesday' ? true : false;

//Funciones globales 
//Notarás que el bloque de funciones callMyNightSky()puede acceder a las variables globales libremente ya que las variables están disponibles para todas las líneas de código del archivo.
const satellite = 'The Moon';
const galaxy ='The Milky Way';
const stars = 'North Star';

function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}


console.log(callMyNightSky())