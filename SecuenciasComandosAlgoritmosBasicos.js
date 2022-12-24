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