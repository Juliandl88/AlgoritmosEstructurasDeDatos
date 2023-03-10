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

/* Convierte una cuerda en una caja espinal. 
El caso espinal es todo-palabras-en-minúsculas-unidas-por-guiones.*/

function spinalCase(str) {
  
  return str
  .split(/\s|_|(?=[A-Z])/)
  .join("-")
  .toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));

/* -------------------------------------------------------------- */

/* Pig Latin es una forma de alterar palabras en inglés. Las reglas son las siguientes:

- Si una palabra comienza con una consonante, tome la primera consonante o grupo de consonantes, 
muévala al final de la palabra y añádala ay.

- Si una palabra comienza con una vocal, solo agregue wayal final.*/

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");

/* -------------------------------------------------------------- */

/* Realice una búsqueda y reemplace en la oración utilizando los argumentos 
proporcionados y devuelva la nueva oración.

El primer argumento es la oración para realizar la búsqueda y reemplazar.

El segundo argumento es la palabra que reemplazará (antes).

El tercer argumento es con lo que reemplazará el segundo argumento (después).*/

function myReplace(str, before, after) {
  // Find index where before is on string
  let index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/* -------------------------------------------------------------- */

/* Los pares de cadenas de ADN consisten en pares de nucleobases. 
Los pares de bases están representados por los caracteres AT y CG , que forman bloques de 
construcción de la doble hélice del ADN.

A la hebra de ADN le falta el elemento de emparejamiento. 
Escribe una función para hacer coincidir los pares de bases que faltan para la hebra de ADN proporcionada. Para cada carácter de la cadena proporcionada, busque el carácter del par base. Devuelve los resultados como una matriz 2d.

Por ejemplo, para la entrada GCG, devuelva[["G", "C"], ["C","G"], ["G", "C"]]

El carácter y su pareja se emparejan en una matriz, y todas las matrices 
se agrupan en una matriz encapsulante.*/

function pairElement(str) {
  // Function to match each character with the base pair
  const matchWithBasePair = function(char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };

  // Find pair for every character in the string
  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(matchWithBasePair(str[i]));
  }

  return pairs;
}

// test here
pairElement("GCG");

/* -------------------------------------------------------------- */

/* Encuentre la letra que falta en el rango de letras aprobadas y devuélvala.

Si todas las letras están presentes en el rango, devuelve undefined.*/

function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

/* -------------------------------------------------------------- */

/* Escriba una función que tome dos o más matrices y devuelva una nueva matriz de valores únicos en el orden de las matrices proporcionadas originalmente.

En otras palabras, todos los valores presentes de todas las matrices deben incluirse en su orden original, pero sin duplicados en la matriz final.

Los números únicos deben clasificarse según su orden original, pero la matriz final no debe clasificarse en orden numérico.

Consulte las pruebas de aserción para ver ejemplos.*/

function uniteUnique(arr) {
  const args = [...arguments];
  const result = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/* -------------------------------------------------------------- */

/* Convierta los caracteres &, <, >, "(comillas dobles) y '(apóstrofe) de una cadena en sus 
entidades HTML correspondientes.*/

function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

//test here
convertHTML("Dolce & Gabbana");

/* -------------------------------------------------------------- */

/* Dado un entero positivo num, devuelve la suma de todos los números impares de Fibonacci que son menores o iguales que num.

Los primeros dos números en la secuencia de Fibonacci son 1 y 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. Los primeros seis números de la sucesión de Fibonacci son 1, 1, 2, 3, 5 y 8.

Por ejemplo, sumFibs(10)debe volver 10porque todos los números impares de Fibonacci menores o iguales que 10son 1, 1, 3 y 5.*/

function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);

/* -------------------------------------------------------------- */

/* Reescribe sumPrimespara que devuelva la suma de todos los números primos que son menores o iguales que num.*/

function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

sumPrimes(10);

/* -------------------------------------------------------------- */

/* Encuentre el múltiplo común más pequeño de los parámetros proporcionados que se puede 
dividir uniformemente por ambos, así como por todos los números secuenciales 
en el rango entre estos parámetros.

El rango será una matriz de dos números que no necesariamente estarán en orden numérico.*/


function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);


/* -------------------------------------------------------------- */

/* Dada la matriz arr, itere y elimine cada elemento comenzando desde el primer elemento (el índice 0) 
hasta que la función funcregrese truecuando el elemento iterado pase a través de él.*/

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});


/* -------------------------------------------------------------- */

/* Aplane una matriz anidada. Debe tener en cuenta los diferentes niveles de anidamiento.*/

function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

// test here
steamrollArray([1, [2], [3, [[4]]]]);

/* -------------------------------------------------------------- */

/* Devuelve una oración traducida al inglés de la cadena binaria pasada.*/

function binaryAgent(str) {
  let biString = str.split(" ");
  let uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}


binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/* -------------------------------------------------------------- */

/* Comprueba si el predicado (segundo argumento) es verdadero en todos los elementos de una colección (primer argumento).*/

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  let counter = 0;
  // Check for each object
  for (let c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

/* -------------------------------------------------------------- */

/* Cree una función que sume dos argumentos. Si solo se proporciona un argumento, 
devuelve una función que espera un argumento y devuelve la suma..*/

function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}

/* -------------------------------------------------------------- */

/* Complete el constructor de objetos con los siguientes métodos a continuación:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)*/

const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());

/* -------------------------------------------------------------- */

/* De acuerdo con la Tercera Ley de Kepler, el período orbital T
 de dos masas puntuales que orbitan entre sí en una órbita circular o elíptica es:

T= 2 pia3m−−−√
 
a
 es el semieje mayor de la órbita
μ =GRAMOMETRO
  es el parámetro gravitacional estándar
GRAMO
  es la constante gravitacional,
METRO
  es la masa del cuerpo más masivo.
Devuelve una nueva matriz que transforma la altitud promedio de los elementos en sus períodos orbitales (en segundos).*/

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    return { name, orbitalPeriod };
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

/* -------------------------------------------------------------- */


