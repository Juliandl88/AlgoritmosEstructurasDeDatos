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

 function Dog(){
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

 /* Imprime ambas propiedades del dogobjeto en tu consola. */

 function Dog6() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  
  let hound = new Dog6();

  /// BORRAR ESTE ULTIMO

   /* -------------------------------------------------------------- */

 /* Imprime ambas propiedades del dogobjeto en tu consola. */

   /* -------------------------------------------------------------- */

 /* Imprime ambas propiedades del dogobjeto en tu consola. */

   /* -------------------------------------------------------------- */

 /* Imprime ambas propiedades del dogobjeto en tu consola. */

   /* -------------------------------------------------------------- */

 /* Imprime ambas propiedades del dogobjeto en tu consola. */

   /* -------------------------------------------------------------- */

 /* Imprime ambas propiedades del dogobjeto en tu consola. */