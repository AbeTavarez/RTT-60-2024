
// let providedName = prompt("Enter your name")
// sayHello(providedName)

sayHello("Max")

// ===== Function definition (Hoisted)
function sayHello(userName) {
    console.log("Hello " + userName + "!");
}

// function call
sayHello("Max")


// ==== Function Expression
let sayBye = function(userName){
    console.log("See you later " + userName);
}

// function call
sayBye("Tom")


// ===== Arrow function
const add = (a, b) => console.log(a + b);

// function call
add(2, 4)

// Arrow Function
const addFive = (num) => {
    console.log(num + 5);
}

addFive(5)

// Using function with a function or method
const nums = [3,5, 16];

nums.forEach((num) => console.log(num))

nums.forEach(function(num) {
    console.log(num);
})

nums.forEach(addTen)


// Functions with return keyword
function addTen(a) {
    console.log(a + 10);
    return a + 10; // <- return the value outside the function
}

const result = addTen(5)


console.log(result);


// Exercise 1:

function areBothEven(n1, n2) {
    return !(n1 % 2) && !(n2 % 2);
}

const isEvenResult = areBothEven(4, 8);

console.log(isEvenResult);

console.log("==========================");

// hidden "arguments" variable
function getDevObject(name) {
    const skills = []

    for (let i = 1;  i < arguments.length; i++) {
        skills.push(arguments[i]);
    }

    return {
        devName: name,
        devSkill: skills
    }
    
}

let maria = getDevObject("Maria", "HTML", "JS", "NodeJS", "React");

console.log(maria);


// ...Rest Parameters
function getDevObject2(name, age, ...skills) {
    return {
        devName: name,
        devAge: age,
        devSkills: skills
    }
}

const max = getDevObject2("Max", 28, "JS", "CSS", "HTML");

console.log(max);



// Default Parameters

function setColor(bicycle, color) {
    bicycle.color = color || "purple";
}

const myBike = {};

setColor(myBike, "black");



function setWheels(bicycle, wheels = 2) {
    bicycle.wheels = wheels
}

setWheels(myBike, 3)


console.log(myBike);




// Functions can be pass as arguments to other functions
function myForEach(arr, func) {
    for (let item of arr) {
        func(item)
    }
}

const colors = ["reD", "Blue", "grEEn"]

myForEach(colors, (element) => {
    console.log(element.toUpperCase());
});

myForEach(colors, function(el) {
    console.log(el.toLowerCase());
});


// IIFE
(function() {
    console.log("IIFE");

})();


// let x = 5;

// {
//     console.log(x);
//     let x = 6;
// }


console.log("=============================");

// let myVar = 20;

// function passBy(myVar) {
//     myVar = myVar * 10;
//     return myVar;
// }

// function passBy(x) {
//     x = x * 10;   
// }

// function passBy(x) {
//     x = x * 10;
// }

// myVar = passBy(myVar);

// console.log("HERE: ", myVar);

// console.log(myVar); // 20 global var

// console.log(passBy(myVar)); // 200 function var

// console.log(myVar); // 20 global var


// Reference Types

// let myVar = { value: 20, type: 'Number' }

// function passBy(x) {
//     x.value = x.value * 20;
//     console.log(x);
//     return x
// }


// console.log(myVar); // 20 global var

// console.log(passBy(myVar)); // 400

// console.log(myVar); // 400 global var


// let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

// function returnEven(array) {
//     for (let i in array) {
//         if (array[i] % 2 !== 0) {
//             array.splice(i, 1);
//         }
//     }

//     return array;
// }

// console.log(numArray);
// let newArray = returnEven(numArray);
// console.log(newArray);
// console.log(numArray); 



console.log("============================");

let numArray = [
    { value: 10 },
    { value: 20 },
    { value: 0 },
    { value: -10 }, 
    { value: 15 }, 
    { value: 28 }, 
    { value: -1000 },
    { value: 42 },
    { value: 7 }
];



function returnEven(array) {
    let newArray = [];
    
    array.forEach((element) => {
        if (element.value % 2 == 0) {
            newArray.push(element);
        }
    });

    return newArray;
}
// original array
console.log(numArray);


let newArray = returnEven(numArray);



newArray[0].value += 10;


numArray[3].value = 67;

console.log(newArray); 
console.log(numArray); 

// let myEvenValue = newArray[1].value;
// myEvenValue /= 2;

console.log("============================");

// Assume these variables are reset for each of the examples below.
let numbers = [[1], [2], [3]];
let numbersCopy = [];

const strNumbersCopy = JSON.stringify(numbers)
console.log(strNumbersCopy);

const newNumbersCopy = JSON.parse(strNumbersCopy)

newNumbersCopy[0].push(1000);

console.log(newNumbersCopy);
console.log(numbers);



// For Loops
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
    
//     numbersCopy[i] = numbers[i];
// }


// While Loops
// let j = -1;
// while (++j < numbers.length) {
//     numbersCopy[j] = numbers[j];
// }


// Spread Operator
// numbersCopy = [...numbers];


// Array.map
numbersCopy = numbers.map((ele) => ele);

// numbersCopy[0] = [100]
// numbersCopy[0].push(100)

console.log(numbersCopy);
console.log(numbers);

console.log(numbers[0] === numbersCopy[0]);



const person = {
    name: {
        first: "Eric",
        last: "Smith"
    }
}

const strObj = JSON.stringify(person)

console.log(strObj);

const newPerson = JSON.parse(strObj)

console.log(newPerson.name === person.name);



const myPerson = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

function copyPerson(oldPerson) {
    let jsonString = JSON.stringify(oldPerson);

    return JSON.parse(jsonString);
}

const myPersonCopy = copyPerson(myPerson);


console.log(myPersonCopy === myPerson);
