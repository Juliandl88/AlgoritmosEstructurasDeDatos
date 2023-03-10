//PROGRAMACIÓN FUNCIONAL - MAP() - FILTER()

/* Aprenda sobre la programación funcional
La programación funcional es un estilo de programación donde las soluciones son funciones simples y aisladas, 
sin efectos secundarios fuera del alcance de la función:INPUT -> PROCESS -> OUTPUT

La programación funcional se trata de:

Funciones aisladas: no depende del estado del programa, que incluye variables globales que están sujetas a cambios.

Funciones puras: la misma entrada siempre da la misma salida

Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función se controla cuidadosamente */

// Ejercicios

/* En el editor de código, las funciones prepareTeay getTeaya están definidas para usted. 
 Llame a la getTeafunción para obtener 40 tazas de té para el equipo y guárdelas en la tea4TeamFCCvariable. */

// Function that returns a string representing a cup of green tea
const prepareTea = () => "greenTea";

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line

/* -------------------------------------------------------------- */

/* Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and 
tea4BlackTeamFCC variables, respectively. Note that the getTea function has been modified 
so it now takes a function as the first argument. */

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => "greenTea";

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => "blackTea";

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

/* ------------------------------------------------------------- */

/* Examine the code in the editor. It's using a method that has side effects in the program, 
causing incorrect behaviour. The final list of open tabs, stored in finalTabs.tabs, should be 
['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] 
but the list produced by the code is slightly different.

Change Window.prototype.tabClose so that it removes the correct tab.  */

// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push("new tab"); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
};

// Let's create three browser windows
const workWindow = new Window([
  "GMail",
  "Inbox",
  "Work mail",
  "Docs",
  "freeCodeCamp",
]); // Your mailbox, drive, and other work sites
const socialWindow = new Window([
  "FB",
  "Gitter",
  "Reddit",
  "Twitter",
  "Medium",
]); // Social sites
const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

/* ------------------------------------------------------------- */

/* Fill in the code for the function incrementer so it returns the value of the global variable 
fixedValue increased by one. */

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  let fixIncremented = fixedValue + 1;
  return fixIncremented;
  // Only change code above this line
}

/* ------------------------------------------------------------- */

/* Write the incrementer function so it takes an argument, and then returns a result after increasing 
the value by one.  */

// The global variable
let fixedValue2 = 4;

// Only change code below this line
function incrementer(value) {
  return value + 1;

  // Only change code above this line
}

/* ------------------------------------------------------------- */

/* Vuelva a escribir el código para que la matriz global bookListno cambie dentro de ninguna función. 
La addfunción debe agregar lo dado bookNameal final de la matriz que se le pasó y devolver una nueva matriz (lista). 
La removefunción debe eliminar lo dado bookNamede la matriz que se le pasó.  */

// The global variable
const bookList2 = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(bookName) {
  bookList2.push(bookName);
  return bookList2;

  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList2.indexOf(bookName);
  if (book_index >= 0) {
    bookList2.splice(book_index, 1);
    return bookList2;

    // Change code above this line
  }
}

/* ------------------------------------------------------------- */

/* Vuelva a escribir el código para que la matriz global bookListno cambie dentro de ninguna función. 
La addfunción debe agregar lo dado bookNameal final de la matriz que se le pasó y devolver una nueva matriz (lista). La removefunción debe eliminar lo dado bookNamede la matriz que se le pasó.  */

// the global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

function add(list, bookName) {
  return [...list, bookName];
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

function remove(list, bookName) {
  return list.filter((book) => book !== bookName);
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(bookList);

/* ------------------------------------------------------------- */

/* La watchListmatriz contiene objetos con información sobre varias películas. 
Use map on watchList para asignar una nueva matriz de objetos a la ratingsvariable. 
Cada película en la nueva matriz debe tener solo una titleclave con el nombre de la película y 
una ratingclave con la calificación de IMDB. El código en el editor actualmente usa un forbucle 
para hacer esto, por lo que debe reemplazar la función de bucle con su mapexpresión.  */

// The global variable
const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

// Only change code below this line

console.log("-----------------------------");

const ratings = watchList.map((item) => ({
  title: item["Title"],
  rating: item["imdbRating"],
}));

// Only change code above this line

console.log(JSON.stringify(ratings));

/* ------------------------------------------------------------- */

/* Escribe el tuyo propio Array.prototype.myMap(), que debería comportarse exactamente como Array.prototype.map(). 
No debe utilizar el mapmétodo integrado. Se Arraypuede acceder a la instancia en el myMapmétodo usando this.d  */

Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};

/* ------------------------------------------------------------- */

/* La variable watchListcontiene una matriz de objetos con información sobre varias películas. 
Use una combinación de filtery mapon watchListpara asignar una nueva matriz de objetos con 
solo las teclas titley . rating 
La nueva matriz solo debe incluir objetos donde imdbRatingsea mayor o igual a 8.0. 
Tenga en cuenta que los ratingvalores se guardan como cadenas en el objeto y es posible que deba 
convertirlos en números para realizar operaciones matemáticas con ellos.  */

// The global variable
const watchList2 = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

/* La variable watchListcontiene una matriz de objetos con información sobre varias películas. 
Use una combinación de filtery mapon watchListpara asignar una nueva matriz de objetos con 
solo las teclas titley . rating 
La nueva matriz solo debe incluir objetos donde imdbRatingsea mayor o igual a 8.0. 
Tenga en cuenta que los ratingvalores se guardan como cadenas en el objeto y es posible que deba 
convertirlos en números para realizar operaciones matemáticas con ellos.  */

// Only change code below this line

const filteredList = watchList2
  .map((item) => ({
    title: item["Title"],
    rating: item["imdbRating"],
  }))
  .filter((user) => Number(user.rating) > 8);

// Only change code above this line

console.log(filteredList);

/* ------------------------------------------------------------- */

/* Escribe el tuyo propio Array.prototype.myFilter(), que debería comportarse exactamente como 
Array.prototype.filter(). No debe utilizar el filtermétodo integrado. 
Se Arraypuede acceder a la instancia en el myFiltermétodo usando this.  */

Array.prototype.myFilter = function (callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
        if (Boolean(callback(this[i], i, this)) === true) {
            newArray.push(this[i]);
          }
    }
    // Only change code above this line
    return newArray;
  };

let result = ["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi")

console.log(result);

/* ------------------------------------------------------------- */

/* Use el slicemétodo en la sliceArrayfunción para devolver parte de la animmatriz 
dados los beginSliceíndices endSliceproporcionados. La función debe devolver una matriz.  */

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  return anim.slice(beginSlice, endSlice)
  
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);

/* ------------------------------------------------------------- */

/* Reescriba la función nonMutatingSpliceutilizando sliceen lugar de splice. 
Debería limitar la citiesmatriz proporcionada a una longitud de 3 y devolver 
una nueva matriz con solo los tres primeros elementos.  */

function nonMutatingSplice(cities) {
    // Only change code below this line
    
    let result = cities.slice(0,3)
    return result
  
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);

/* ------------------------------------------------------------- */

/* Use el concatmétodo en la nonMutatingConcatfunción para concatenar attachhasta el final de original. 
La función debe devolver la matriz concatenada.  */

function nonMutatingConcat(original, attach) {
    // Only change code below this line
  let result;
  return result = first.concat(second);
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);

/* ------------------------------------------------------------- */

/* Cambie la nonMutatingPushfunción para que se use concatpara fusionarse newItemhasta 
el final originalsin mutar originalo newItemmatrices. La función debe devolver una matriz.  */

function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);
  
    // Only change code above this line
  }
  
  const first2 = [1, 2, 3];
  const second2 = [4, 5];
  nonMutatingPush(first2, second2);

/* ------------------------------------------------------------- */

/* La variable watchListcontiene una matriz de objetos con información sobre varias películas. 
Úselo reducepara encontrar la calificación promedio de IMDB de las películas dirigidas por Christopher Nolan. 
Recuerde de los desafíos anteriores cómo obtener filterdatos y mapsobre ellos para obtener lo que necesita. 
Es posible que deba crear otras variables y devolver la calificación promedio de la getRatingfunción. 
Tenga en cuenta que los valores de calificación se guardan como cadenas en el objeto y deben convertirse 
en números antes de que se utilicen en cualquier operación matemática.  */

// The global variable

const watchList3 = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];

function getRating(watchList){
    // Add your code below this line
    const averageRating = watchList
      // Use filter to find films directed by Christopher Nolan
      .filter(film => film.Director === "Christopher Nolan")
      // Use map to convert their ratings from strings to numbers
      .map(film => Number(film.imdbRating))
      // Use reduce to add together their ratings
      .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    // Divide by the number of Nolan films to get the average rating
    watchList.filter(film => film.Director === "Christopher Nolan").length;
    // Add your code above this line
    return averageRating;
  }


/* ------------------------------------------------------------- */

/* Complete el código de la squareListfunción usando cualquier combinación de map(), filter()y reduce(). 
La función debe devolver una nueva matriz que contenga los cuadrados de solo los números enteros positivos 
(los números decimales no son enteros) cuando se le pasa una matriz de números reales. 
Un ejemplo de una matriz de números reales es [-3, 4.8, 5, 3, -3.2].  */

const squareList = arr => {
    // Only change code below this line
    let sum = arr.
    filter(num => (num > 0) && (Number.isInteger(num)))
    .map(num => num*num);
    
    return sum;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);

/* ------------------------------------------------------------- */

/* Use el sortmétodo en la alphabeticalOrderfunción para ordenar los elementos arren orden alfabético. 
La función debe devolver la matriz ordenada.  */

function alphabeticalOrder(arr) {
    // Only change code below this line
     return arr.sort(function(a, b) {
      return a === b ? 0 : a > b ? 1 : -1;
    });
    
  
    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

/* ------------------------------------------------------------- */

/* Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
The function should return a new array, and not mutate the globalArray variable.  */

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let order = [].concat(arr)
  order.sort((a,b)=>(a-b));
  return order

  // Only change code above this line
}

nonMutatingSort(globalArray);

/* ------------------------------------------------------------- */

/* Use el splitmétodo dentro de la splitifyfunción para dividir stren una matriz de palabras. 
La función debe devolver la matriz. Tenga en cuenta que las palabras no siempre están separadas por espacios 
y que la matriz no debe contener signos de puntuación.  */

function splitify(str) {
  // Only change code below this line
  let separa = str.split(/\W/)  // ESTA EXPRESIÓN REGULAR Coincide con cualquier carácter que no sea una palabra.
  return separa;

  // Only change code above this line
}

splitify("Hello World,I-am code");

/* ------------------------------------------------------------- */

/* Use el joinmétodo (entre otros) dentro de la sentensifyfunción para hacer una oración a partir 
de las palabras en la cadena str. La función debe devolver una cadena. 
Por ejemplo, I-like-Star-Warsse convertiría a I like Star Wars. 
Para este desafío, no utilice el replacemétodo.  */

function sentensify(str) {
  // Only change code below this line
  //Primero separamos todo lo que no sea una cadena
  //Despues unimos
  return str.split(/\W/).join(" ");
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");

/* ------------------------------------------------------------- */

/* Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. 
You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces  */

// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title
    .split(" ")
    .filter(substr => substr !== "")
    .join("-")
    .toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

/* ------------------------------------------------------------- */

/* Use el everymétodo dentro de la checkPositivefunción para verificar si cada elemento arres positivo. 
La función debe devolver un valor booleano.  */

function checkPositive(arr) {
  // Only change code below this line
let result = arr.every(function(currentValue) {
  return currentValue > 0;
});
return result

  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));



/* ------------------------------------------------------------- */

/* Use el somemétodo dentro de la checkPositivefunción para verificar si algún elemento arres positivo. 
La función debe devolver un valor booleano.  */

function checkPositive(arr) {
  // Only change code below this line
let result = arr.some((item)=>item > 0);
return result

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

/* ------------------------------------------------------------- */

/* Rellene el cuerpo de la addfunción para que use curry para agregar parámetros x, yy z.  */

function add(x) {
  // Only change code below this line
  return function (y) {
    return function (z) {
      return x+y+z
    }
  }

  // Only change code above this line
}

add(10)(20)(30);

/* ------------------------------------------------------------- */







 