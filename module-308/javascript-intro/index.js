
// console logs are used for debug our code
console.log("Hello from External Script")
console.log(100);
console.log(true);

// Variables
var myVariable = "My First Variable";
let username = "user123";
let loggedIn = true;

// absent of value
let password = null;
password = "password123";
console.log(password);


// constant variable
const PI = 3.14;
console.log(PI);

// undefined variable
let someValue;
console.log(someValue);

// store the new value
someValue = 23.5
console.log(someValue);


let userAddress = "123 Main Street"
console.log(userAddress);

// ======  Variable declaration rules =====

let x = 10; // global scope
console.log("Global: ", x);

{
    // local/block scope
    x = 2;
    console.log("Block: ", x);
    let y = 100;
}
// result = y; // reference error
// console.log(y);

console.log("Bottom: ", x);

// Check data type of literals and variables
console.log(typeof x);
console.log(typeof userAddress);
console.log(typeof PI);
console.log(typeof loggedIn);

console.log(typeof "Hi!");
console.log(typeof 500);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);