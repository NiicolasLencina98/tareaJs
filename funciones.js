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