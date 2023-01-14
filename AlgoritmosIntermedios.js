/* Secuencias de comandos de algoritmos intermedios
Ahora que conoce los conceptos básicos del pensamiento algorítmico, 
junto con la programación orientada a objetos y la programación funcional, 
pruebe sus habilidades con los desafíos de secuencias de comandos de algoritmos intermedios. */

/* -------------------------------------------------------------- */

/* Le pasaremos una matriz de dos números. Devuelve la suma de esos dos números más 
la suma de todos los números entre ellos. El número más bajo no siempre vendrá primero.*/

function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll([1, 4]);
  console.log(sumAll)

/* -------------------------------------------------------------- */

/* Compare dos matrices y devuelva una nueva matriz con cualquier elemento que solo 
se encuentre en una de las dos matrices dadas, pero no en ambas. 
En otras palabras, devuelva la diferencia simétrica de las dos matrices.*/

function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/* -------------------------------------------------------------- */

/* Utilice la palabra clave delete para eliminar las claves oranges.*/

function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

/* -------------------------------------------------------------- */

/* Cree una función que mire a través de una matriz de objetos (primer argumento) y devuelva una matriz de 
todos los objetos que tienen pares de nombre y valor coincidentes (segundo argumento). 
Cada par de nombre y valor del objeto de origen debe estar presente en el objeto de la colección 
si se va a incluir en la matriz devuelta..*/

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter(obj => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (!obj.hasOwnProperty(souceKeys[i]) ||
          obj[souceKeys[i]] !== source[souceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

/* -------------------------------------------------------------- */

/* Utilice la palabra clave delete para eliminar las claves oranges.*/

/* -------------------------------------------------------------- */

/* Utilice la palabra clave delete para eliminar las claves oranges.*/

/* -------------------------------------------------------------- */

/* Utilice la palabra clave delete para eliminar las claves oranges.*/

/* -------------------------------------------------------------- */

/* Utilice la palabra clave delete para eliminar las claves oranges.*/

/* -------------------------------------------------------------- */

/* Utilice la palabra clave delete para eliminar las claves oranges.*/

/* -------------------------------------------------------------- */

/* Utilice la palabra clave delete para eliminar las claves oranges.*/

/* -------------------------------------------------------------- */

/* Utilice la palabra clave delete para eliminar las claves oranges.*/

/* -------------------------------------------------------------- */

/* Utilice la palabra clave delete para eliminar las claves oranges.*/
