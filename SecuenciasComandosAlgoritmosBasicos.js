/* Secuencias de comandos de algoritmos básicos

Un algoritmo es una serie de instrucciones paso a paso que describen cómo hacer algo.
Para escribir un algoritmo efectivo, es útil dividir un problema en partes más pequeñas y 
pensar detenidamente en cómo resolver cada parte con código.
En este curso, aprenderá los fundamentos del pensamiento algorítmico al escribir algoritmos 
que hacen de todo, desde convertir temperaturas hasta manejar arreglos 2D complejos. */

/* Se le da una variable que celsiusrepresenta una temperatura en Celsius. 
Utilice la variable fahrenheitya definida y asígnele la temperatura Fahrenheit equivalente 
a la temperatura Celsius dada. Use la fórmula mencionada anteriormente para ayudar a convertir 
la temperatura Celsius a Fahrenheit. */

function convertCtoF(celsius) {
    let fahrenheit = celsius*(9/5)+32; ;
    return fahrenheit
  }
  
  convertCtoF(30);
 


/* -------------------------------------------------------------- */

/* Invierta la cadena proporcionada y devuelva la cadena invertida.
Por ejemplo, "hello"debería convertirse en "olleh". */

function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  reverseString("hello");


  /* -------------------------------------------------------------- */

/* Devuelve el factorial del entero proporcionado. */

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  factorialize(5);


   /* -------------------------------------------------------------- */

/* Devuelve la longitud de la palabra más larga en la oración proporcionada. Su respuesta debe ser un número. */

function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

    /* -------------------------------------------------------------- */

/* Devuelve una matriz que consiste en el número más grande de cada subarreglo proporcionado. 
Para simplificar, la matriz proporcionada contendrá exactamente 4 sub-matrices. */

function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }
  
    return results;
  }

      /* -------------------------------------------------------------- */

/* Compruebe si una cadena (primer argumento, str) termina con la cadena de 
destino dada (segundo argumento, target). */

function confirmEnding(str, target) {
    return str.slice(-target.length) === target
  }
  
  confirmEnding("Bastian", "n");

  
      /* -------------------------------------------------------------- */

/* Compruebe si una cadena (primer argumento, str) termina con la cadena de 
destino dada (segundo argumento, target). */

function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";
  
    for (let i = 0; i < num; i++) {
      accumulatedStr += str;
    }
  
    return accumulatedStr;
  }
  
  repeatStringNumTimes("abc", 3);

/* -------------------------------------------------------------- */

 /* Trunca una cadena (primer argumento) si es más larga que la longitud máxima de cadena dada (segundo argumento). 
  Devuelve la cadena truncada con un ...final. */

  function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

  /* -------------------------------------------------------------- */

   /* Cree una función que mire a través de una matriz arry devuelva el primer elemento que 
   pase una 'prueba de verdad'. Esto significa que dado un elemento x, la 'prueba de verdad' 
   se pasa si func(x)es true. Si ningún elemento pasa la prueba, devuelve undefined. */

   function findElement(arr, func) {
    let num = 0;
  
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
  
    return undefined;
  }

  // También puedo usar directamente el método find
  // return arr.find(func)
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

  /* -------------------------------------------------------------- */

   /* Comprueba si un valor se clasifica como un primitivo booleano. Regresar trueo false.
Las primitivas booleanas son truey false. */

const  booWho = bool => bool === true || bool === false;
  
  
  booWho(null);

  
  /* -------------------------------------------------------------- */

   /* Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúscula. 
   Asegúrate de que el resto de la palabra esté en minúsculas. A los efectos de este ejercicio, 
   también debe escribir en mayúsculas las palabras de conexión como they of. */

   function titleCase(str) {
    return str
      .toLowerCase() // Pasamos a minuscula
      .split(" ") // Separamos el Array 
      .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase())) // Reemplazamos la primera letra por mayuscula
      .join(" "); // volvemos a unir la cadena
  }
  
  titleCase("I'm a little tea pot");

  /* -------------------------------------------------------------- */

   /* Se le dan dos matrices y un índice.
Copie cada elemento de la primera matriz en la segunda matriz, en orden.
Comience a insertar elementos en el índice nde la segunda matriz.
Devuelve la matriz resultante. Las matrices de entrada deben permanecer iguales 
después de que se ejecute la función. */

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

  /* -------------------------------------------------------------- */

/* Elimina todos los valores falsos de una matriz. 
Devuelve una nueva matriz; no cambie la matriz original.
Los valores falsos en JavaScript son false, null, 0, "", undefinedy NaN.
Sugerencia: Intente convertir cada valor a un valor booleano. */

function bouncer(arr) {
    return arr.filter(Boolean); // filtramos los valores boolean
  }
  
  
  bouncer([7, "ate", "", false, 9]);

  /* -------------------------------------------------------------- */

 /* Devuelve el índice más bajo en el que se debe insertar un valor (segundo argumento) 
en una matriz (primer argumento) una vez que se ha ordenado. El valor devuelto debe ser un número.
Por ejemplo, getIndexToIns([1,2,3,4], 1.5)debería regresar 1porque es mayor que 1(índice 0), 
pero menor que 2(índice 1). */

function getIndexToIns(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
  }
  
  getIndexToIns([40, 60], 50);

   /* -------------------------------------------------------------- */

 /* Retorna true si la cadena en el primer elemento de la matriz contiene todas las letras 
 de la cadena en el segundo elemento de la matriz. */

 function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
  mutation(["hello", "hey"]);

 /* -------------------------------------------------------------- */

 /* Escriba una función que divida una matriz (primer argumento) en grupos de 
 la longitud de size(segundo argumento) y los devuelva como una matriz bidimensional. */

 function chunkArrayInGroups(arr, size) {
    // Break it up.
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);