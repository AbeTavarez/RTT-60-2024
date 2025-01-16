
// Count down to 0 from a given number.

// let x = parseInt(prompt("enter a number for the count down"))
let x = 10;

while(x >= 0) {
    console.log(`x is ${x}`);
    x--
}


// Log integers in multiples of 3 as long as they are less than 35.

let i = 3;

while (i < 35) {
    console.log(i);
    i += 3
}


// Print integers in multiples of 5 as long as they are less than 100.
let j = 5;

while (j < 100) {
    
    if (j % 5 === 0) {
        console.log(j);
    }

    j++
}

// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.


let y = 0;

while (y <= 20) {
    if (y % 2 === 0) {
        console.log(y * 3);
    }
   y++
}

//  ============= Nested For loop ================= 
//  index  012
let str = "ABC";
console.log(str.length);


//                  3 <- length
for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);

    for (let j = 0; j < str.length; j++) {
        // index ->     0        0
        console.log(str[i] + str[j]);
    }
    
}

// =============== Prime Numbers ========================

// a whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11).

// Now, write a for loop that iterates from 1 to 20. The loop should:

// Print “prime” for all prime numbers.
// Print “even” for all even numbers.
// Print “odd” for all odd numbers.
// Treat 2 as an even number and 1 & 3 as odd, rather than prime.


for (let i = 1; i <= 20; i++) {

    let isPrime = true; //flag

    // 1 & 3 as odd
    if (i === 1 || i == 3) {
        console.log(`${i} is Odd`);
        continue

        // log odd numbers
    } else if (i % 2 !== 0) {
        console.log(`${i} is Odd`);
    }
    
    // Treat 2 as an even number
    if (i === 2) {
        console.log(`${i} is Even`);
        continue

        // log even numbers
    } else if (i % 2 === 0) {
        console.log(`${i} is Even`);
    }

    // checks for prime numbers
    for (let j = 2; j < i; j++) {
        
        // if i is divisible by j
        if (i % j === 0) {
            isPrime = false
            // console.log(`${i} is Not Prime`);
            break;
        }
    }

    if (isPrime) {
        console.log(`${i} is Prime`);
    }
}

// Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

// Write a loop that outputs how many quarters Romeo received.

let change = 10 - 4; // 6
let quarters = 0;

while (change >= 0.25) {
    console.log(`Change is ${change}`);
    console.log(`Quarters ${quarters}`);
    change -= 0.25;
    quarters++; // count the quarters
    
}

console.log(quarters);


// Do While Loop

let z = 10;

do {
	z--;
	console.log(z);10
} while (z > 50);

// ===================================

let num;

do {
    console.log("Welcome to my number game!");

    // if (num && num <= 10 || num >= 20) {
    //     console.log(`Number is to be number greater than 10 and less than 20`);
    // }
    
    num = parseInt(prompt("Enter a number greater than 10 and less than 20"));

    console.log(`You enter: ${num}`);
    
} while (num <= 10 || num >= 20);



