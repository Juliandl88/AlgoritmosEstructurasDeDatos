/* Programación orientada a objetos

OOP, o Programación Orientada a Objetos, es uno de los principales enfoques del proceso de desarrollo de software. 
En OOP, los objetos y las clases organizan el código para describir cosas y lo que pueden hacer.
En este curso, aprenderá los principios básicos de la programación orientada a objetos en JavaScript, 
incluida la thispalabra clave, las cadenas de prototipos, los constructores y la herencia.  */

// Cree un dogobjeto con propiedades namey numLegs, y configúrelos en una cadena y un número, respectivamente.

let dog = {
    name: "Matilda",
    numLegs: 4
  };

 /* -------------------------------------------------------------- */

 /* Imprime ambas propiedades del dogobjeto en tu consola. */

 let dog2 = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
  console.log(dog2.name);
  console.log(dog2.numLegs);

  /* -------------------------------------------------------------- */

 /* Usando el dogobjeto, dale un método llamado sayLegs. 
 El método debe devolver la oración.This dog has 4 legs. */

 let dog3 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: ()=>`This dog has ${dog3.numLegs} legs.`
  
  };
  
  dog3.sayLegs();

  /* -------------------------------------------------------------- */

 /* Modifique el dog.sayLegsmétodo para eliminar cualquier referencia a dog. 
 Use el duckejemplo como guía. */

 let dog4 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog4.sayLegs();

  /* -------------------------------------------------------------- */

 /* Cree un constructor, Dog, con propiedades name, colory numLegsque se establezcan en una cadena, 
 una cadena y un número, respectivamente. */

 function Dog5(){
    this.name = "Matilda";
    this.color = "Atigrado";
    this.numLegs = 3;
  }

  /* -------------------------------------------------------------- */

 /* Usa el Dogconstructor de la última lección para crear una nueva instancia de Dog, 
 asignándola a una variable hound. */

 function Dog6() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  
  let hound = new Dog6();

  /* -------------------------------------------------------------- */

 /* Create another Dog constructor. This time, set it up to take the parameters name and color, 
 and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. 
 Pass it two strings as arguments for the name and color properties. */

 function Dog7(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  
  }
  
  let terrier = new Dog7("Rodolfo", "Black");
 
 
   /* -------------------------------------------------------------- */

 /* Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. 
 Then, use instanceof to verify that it is an instance of House. */

 function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  
  let myHouse = new House(4);
  
  myHouse instanceof House;

   /* -------------------------------------------------------------- */

 /* Add the own properties of canary to the array ownProps. */

 function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  
  // Only change code below this line
  
  for (let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property);
    }
  }

   /* -------------------------------------------------------------- */

 /* Añadir una numLegspropiedad a la prototypedeDog  */

 function Dog(name) {
    this.name = name;
  }
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.numLegs = 2;

   /* -------------------------------------------------------------- */

 /* Agregue todas las propiedades propias de beaglea la matriz ownProps. 
 Agregue todas las prototypepropiedades de Doga la matriz prototypeProps. */

 function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;9
  
  //let beagle = new Dog("Snoopy");
  //let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  
  for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }

/* -------------------------------------------------------------- */

 /* Escriba una joinDogFraternityfunción que tome un candidateparámetro y, usando la constructorpropiedad, 
 devuelva truesi el candidato es un Dog, de lo contrario devuelva false. */

 function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }

 /* -------------------------------------------------------------- */

 /* Agregue la propiedad numLegsy los dos métodos eat()y describe()al prototypede Dogconfigurando 
 el prototypeen un nuevo objeto. */

 function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
   numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

 /* -------------------------------------------------------------- */

 /* Defina la constructorpropiedad en el Dog prototype. */

 function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

 /* -------------------------------------------------------------- */

 /* Use isPrototypeOf to check the prototype of beagle. */

 function Dog(name) {
    this.name = name;
  }
  
  let beagle2 = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle2);

 /* -------------------------------------------------------------- */

 /* Modifique el código para mostrar la cadena de prototipo correcta. */

 function Dog(name) {
    this.name = name;
  }
  
  let beagle3 = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle3);  // yields true
  
  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);

 /* -------------------------------------------------------------- */

 /* Imprime ambas propiedades del dogobjeto en tu consola. */

 /* -------------------------------------------------------------- */

 /* Imprime ambas propiedades del dogobjeto en tu consola. */