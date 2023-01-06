
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
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
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
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);


/* ------------------------------------------------------------- */

/* Examine the code in the editor. It's using a method that has side effects in the program, 
causing incorrect behaviour. The final list of open tabs, stored in finalTabs.tabs, should be 
['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] 
but the list produced by the code is slightly different.

Change Window.prototype.tabClose so that it removes the correct tab.  */

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line
  
    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
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
  let fixIncremented = fixedValue + 1
  return fixIncremented
  // Only change code above this line
}

/* ------------------------------------------------------------- */

/* Write the incrementer function so it takes an argument, and then returns a result after increasing 
the value by one.  */

// The global variable
let fixedValue2 = 4;

// Only change code below this line
function incrementer(value) {
  return value + 1

  // Only change code above this line
}   

/* ------------------------------------------------------------- */

/* Vuelva a escribir el código para que la matriz global bookListno cambie dentro de ninguna función. 
La addfunción debe agregar lo dado bookNameal final de la matriz que se le pasó y devolver una nueva matriz (lista). 
La removefunción debe eliminar lo dado bookNamede la matriz que se le pasó.  */

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}


/* ------------------------------------------------------------- */

/* Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and  */

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}


/* ------------------------------------------------------------- */

/* Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and  */



/* ------------------------------------------------------------- */

/* Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and  */



/* ------------------------------------------------------------- */