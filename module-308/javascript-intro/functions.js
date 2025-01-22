
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


let x = 5;

{
    console.log(x);
    let x = 6;
}