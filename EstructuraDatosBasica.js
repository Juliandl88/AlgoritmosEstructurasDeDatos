//Agregar pares de clave-valor a objetos de JavaScript

/* Se foodsha creado un objeto con tres entradas. 
Usando la sintaxis de su elección, agregue tres entradas más: bananascon un valor de 13, 
grapescon un valor de 35y strawberriescon un valor de 27.*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods["bananas"] = 13;
  foods.grapes = 35;
  foods["strawberries"] = 27;
  
  
  // Only change code above this line
  
  console.log(foods);

  /* -------------------------------------------------------------- */

/*Aquí hemos definido un objeto userActivity, que incluye otro objeto anidado dentro de él. 
Establezca el valor de la onlineclave en 45. */

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45;
  // Only change code above this line
  
  console.log(userActivity);

  /* -------------------------------------------------------------- */

  /*Hemos definido una función, checkInventory, que recibe un elemento escaneado como argumento. 
  Devuelve el valor actual de la scannedItemclave en el foodsobjeto. 
  Puede suponer que solo se proporcionarán claves válidas como argumento para checkInventory. */

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem]
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));


  /* -------------------------------------------------------------- */

   /* Utilice la palabra clave delete para eliminar las claves oranges, plumsy strawberriesdel foodsobjeto.*/

   let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges
  delete foods.plums
  delete foods.strawberries
  
  // Only change code above this line
  
  console.log(foods);

  
  /* -------------------------------------------------------------- */

   /* Termine de escribir la función para que regrese truesi el objeto que se le pasó contiene 
   los cuatro nombres, , Alany regresa de lo contrario.JeffSarahRyanfalse*/

   let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    if (
      userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan")
    ) {
      return true;
    }
    return false;
  }
  
  
  console.log(isEveryoneHere(users));

  /* -------------------------------------------------------------- */

   /* Hemos definido una función countOnlineque acepta un argumento (un objeto de usuarios). 
   Utilice una instrucción for...in dentro de esta función para recorrer el objeto de usuarios pasado a la 
   función y devolver la cantidad de usuarios cuya onlinepropiedad está establecida en true. 
   A continuación se muestra un ejemplo de un objeto de usuarios al que se podría pasar countOnline. 
   Cada usuario tendrá una onlinepropiedad con un valor trueo false*/