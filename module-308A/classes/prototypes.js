class Animal {}
class Cat extends Animal {}
class Tabby extends Cat {}
class SpottedTabby extends Tabby {}

const cat1 = new SpottedTabby();
let object = cat1;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

const cat2 = new SpottedTabby();
const cat3 = new SpottedTabby();
const cat4 = new SpottedTabby();

console.log(cat1.breed); // undefined
console.log(cat2.breed); // undefined
console.log(cat3.breed); // undefined
console.log(cat4.breed); // undefined


Object.getPrototypeOf(cat1).breed = "Tabby";

console.log(cat1.breed); // Tabby
console.log(cat2.breed); // Tabby
console.log(cat3.breed); // Tabby
console.log(cat4.breed); // Tabby


// New instance has the same prototype.
const cat5 = new SpottedTabby();
console.log(cat5.breed); // Tabby

// Setting this directly on this instance.
cat5.breed = "Tabby"; 


delete Object.getPrototypeOf(cat1).breed;

console.log(cat1.breed); // undefined
console.log(cat2.breed); // undefined
console.log(cat3.breed); // undefined
console.log(cat4.breed); // undefined
console.log(cat5.breed); // Tabby



const commPrototype = {
    introduce() {
      console.log("Hey there, I don't have a name because I'm just an example, but nice to meet you!");
    }
  };
  
//   const person = Object.create(commPrototype);
//   person.introduce();


function Person(name) {
    this.name = name;
}
  
  Object.assign(Person.prototype, commPrototype);
  // or
  // Person.prototype.introduce = commPrototype.introduce;
  
  const person = new Person("Leo");
  person.introduce(); // Hey there, I have a name now! I'm Leo!
