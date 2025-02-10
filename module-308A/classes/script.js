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
  static speak(sound) {
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
// dog1.speak("huh");

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
        // super.speak("Meow...");
        Animal.speak("Meow...")
    }

    toString() {
        return super.toString("Cat");
    }

}

const newCat = new Cat(2, 4, "black", true, false);
console.log(newCat);

newCat.speak()
// Cat.speak()



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


console.log("======================================");

class Human extends Animal {
  constructor(isAwake, isMoving, hair, first, last, age, occupation, city, state, zip) {
    super(2, 2, isAwake, isMoving);
    this.hair = hair;
    this.name = {
      first,
      last
    };
    this.age = age;
    this.occupation = occupation;
    this.location = {
      city,
      state,
      zip
    }
  }

  introduce() {
    console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
  }
}


const person1 = new Human(true, true, "Black", "Paul", "Walker", 30, "Mechanic", "San Francisco", "CA", 10033)

console.log(person1);
person1.introduce();



cat1.eyes = "yellow"

console.log(cat1);


class Learner {
  // private properties
  #grades = [];
  #name = {
    first: '',
    last: '',
  }
  #age;

	constructor(firstName, lastName, age) {
		this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
	}


  get name() {
    return this.#name.first + " " + this.#name.last; 
  }

  get age() {
    return this.#age;
  }

  // setter method
  // set grades(grade) {
  //   grade = Number(grade);

  //   if (grade >= 0 && grade <= 100) {
  //     this.#grades.push(grade);
  //   }
  // }

  get grades() {
    return this.#grades;
  }

  // instance method
  addGrades(...grades) {
    grades = grades.flat();

    grades.forEach(grade => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade)
      }
    })
  }

  get average() {
    const arr = [...this.#grades];
    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b) / arr.length;
  }
}

// instance of the Learner class
const learner1 = new Learner('Leeroy', 'Jenkins', 18);

// we can't override private properties
learner1.name ="paul"
learner1.age = 847

// (Setter) setting a new grade
// learner1.grades = 80;
// learner1.grades = 100;
// learner1.grades = 70;

// (Getters) read the private properties
console.log(learner1.name);
console.log(learner1.age);
console.log(learner1.grades);


learner1.addGrades(98, 87, [95, 100, 77], [96, 89])

console.log(learner1.grades);

learner1.average = 100;
console.log(learner1.average);

console.log("=================================");


const cat7 = new Cat(2,4, "blue", true, false)
console.log(cat7);

const dog7 = new Dog('golden', true, true);
console.log(dog7);


// instanceof operator
console.log(cat7 instanceof Cat);
console.log(cat7 instanceof Animal);
console.log(cat7 instanceof Object);
// -----------------------------------
console.log(dog7 instanceof Cat);
console.log(dog7 instanceof Animal);
console.log(dog7 instanceof Object);

if (cat7 instanceof Animal) {
  console.log(cat7.toString())
}


const arr = [];
console.log(arr instanceof Array);
console.log(arr instanceof Object);
console.log(arr instanceof String);

