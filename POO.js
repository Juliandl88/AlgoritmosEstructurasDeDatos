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

 /* Imprime ambas propiedades del dogobjeto en tu consola. */

   /* -------------------------------------------------------------- */

 /* Imprime ambas propiedades del dogobjeto en tu consola. */

   /* -------------------------------------------------------------- */

 /* Imprime ambas propiedades del dogobjeto en tu consola. */