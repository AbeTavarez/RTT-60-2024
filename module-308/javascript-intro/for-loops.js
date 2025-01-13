// For Loops

console.log("==== Count to from 0 to 10 ======");

// Counts up from 0 to 10
for (let i = 0; i <= 10; i++) {
    console.log(`The value of i is: ${i}`);
}


console.log("==== Count to from 10 to 1 ======");

// Counts down from 10 to 1
for (let x = 10; x >= 1; x--){
    console.log(x);
}

console.log("==== Count to from 5 to 15 ======");


// Count to from 5 to 15
for (let x = 5; x <= 15; x += 1) {
    console.log(x);
}


console.log("==== Output odd numbers from 1 to 10. ======");

for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

console.log('===============');

for (let i = 1; i <= 10; i++) {
    // checks if the reminder is not equals to 0
    if (i % 2 !== 0) {
        console.log("ODD: ", i);
    }
}

console.log("==== Output even number from 1 to 10. ====");

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("EVEN: ", i);
        
    }
}


console.log("=== Output multiples of 3, starting at 6 and ending at 60. ===");

for (let i = 6; i <= 60; i += 3) {
    console.log(i);
}


console.log("=== Output an increasing number of # symbols, from 1 to 7, as shown below.===");


let hashtag = ''

for (let i = 1; i <= 7; i++) {
    hashtag += "#"
    console.log(hashtag);
    
    // console.log("#".repeat(i));
}



console.log("==== Loop over a String =========");

let str = "Hello World!";

console.log(str[0]) // access a char by the index
console.log(str.length); // access the length of the string

let allCAps = ''

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);

    
    // allCAps += str[i].toUpperCase()
    // console.log(`The character ${str[i]} is at index ${i}`);
}

console.log(allCAps);


console.log("=== For in Loop ========");

// For in loops are normally used with object 
// and they return the index or the property name.
for (const i in str) {
    // console.log(i);
    
    console.log(str[i]);
}

// Looping over object will return the property name
let myObject = {name: "Max"}

for (const i in myObject) {
    // console.log(i);
}

console.log("=== For of Loop ========");

// For of loop return the values of a iterable
for (const i of str) {
    console.log(i);
}

// Loop over an array and access each value in the array
let myArray = ["Hello", "world", "JS", "HTML"]

for (const word of myArray) {
    console.log(word);
    
}


console.log("=== Continue (Control Flow) ========");

for (let i = 0; i < str.length; i++) {
    
    if (str[i] === 'l') {
        continue // skips the current iteration
    } else if (str[i] === 'W') {
        break // exit the loop
    }
    
    console.log(str[i]);
    
}

console.log("=== Continue (In) (Control Flow) ========");

for (const i in str) {
    if (str[i] == "l") {
        continue;
	}
    
	console.log(str[i]);
}

console.log("=== Continue (Of) (Control Flow) ========");
for (const c of str) {
	if (c == "l") {
		continue;
	}

	console.log(c);
}


console.log("======== While Loop =============");


let value = 30;

while(value > 0) {
    console.log(value);
        
    if (value === 15) {
        break;
    }
    
    value--
}
