const person = {
  name: {
    first: "Elyan",
    last: "Kemble",
  },
  age: 32,
  location: {
    city: "Garland",
    state: "Texas",
    zip: 75040,
  },
  occupation: "Front-End Developer",
};

const person2 = {
  name: {
    first: "Elyan2",
    last: "Kemble2",
  },
  age: 32,
  location: {
    city: "Garland",
    state: "Texas",
    zip: 75040,
  },
  occupation: "Front-End Developer",
};

function introduce() {
  console.log(this);

  console.log(
    `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`,
  );
}

person.introduce = introduce;
person2.introduce = introduce;
introduce();

console.log(person);

person.introduce();
person2.introduce();

console.log("=========================");

// Class Definition
class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    //obj.eyes = eyes
    this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
  }
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }

  toString(animal="Animal") {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
  }
}

// Instance of a class
const cat1 = new Animal(2, 4, true, false);
console.log(cat1.eyes);

const cat2 = new Animal(2, 4, false, false);
console.log(cat2.legs);

const dog1 = new Animal(2, 4, true, true);
dog1.speak("huh");

const cow1 = new Animal(2, 4, true, false);
cow1.sit();
cow1.sleep()
console.log(cow1);


console.log(cat1.toString());
console.log(cat1);


//  =============== Cat Class =====================
class Cat extends Animal {
    constructor(eyes, legs, fur, isAwake, isMoving) {
        super(eyes, legs, isAwake, isMoving); // parent class
        this.fur = fur; // adding a new property to the object
    }

    speak() {
        super.speak("Meow...");
    }

    toString() {
        return super.toString("Cat");
    }

}

const newCat = new Cat(2, 4, "black", true, false);
console.log(newCat);

newCat.speak()


//  =============== Dog Class =====================
class Dog extends Animal {
    constructor(fur, isAwake, isMoving) {
        super(2, 4, isAwake, isMoving);
      this.fur = fur;
    }

    speak() {
      super.speak("Woof!");
    }
    
    toString() {
        return super.toString("Dog");
    }
}

// Instance
const newDog = new Dog("yellow", true, true);
console.log(newDog);



//  =============== Cow Class =====================
class Cow extends Animal {
    constructor(hair, isAwake, isMoving) {
      super(2, 4, isAwake, isMoving);
      this.hair = hair;
    }
    speak() {
      super.speak("Moo.");
    }
    toString() {
      return super.toString("Cow");
    }
  }

const newCow = new Cow("black and white", false, false);
console.log(newCow);
