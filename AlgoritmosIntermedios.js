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

/* -------------------------------------------------------------- */

/* Utilice la palabra clave delete para eliminar las claves oranges.*/
