// Global Scope

let lastName = "Pain";
let firstName = "Max";

{
    let firstName = 'John';
    let lastName = "Soap";

    // Local Scope
    let fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}

console.log(firstName);
console.log(lastName);


 // console.log(fullName); // reference error

 console.log(window);

//  var pollution = 'sucks'
 let pollution = 'sucks'

 console.log(window.pollution)
 console.log(pollution);


 // Var
// {
//     var x = 1;
//     {
//       var x = 2;  // same variable!
//       console.log(x);  // 2
//     }
//     console.log(x);  // 2
// }

// {
//     let x = 1;
//     {
//       let x = 2;  // different variable
//       console.log(x);  // 2
//     }
//     console.log(x);  // 1
// }
 
let x = 10;

{
	let y = 5;
	{
		let z = x + y;
        console.log(z);
	}
}


let total = 10;

// Single line block
// -- concatenation
if (total > 5) console.log("success!" + " " + total + " " + (3 + 3));
else console.log("error");

// multiline block
if (total === 10) {
    // -- template literal
    console.log(`Total is "equal"s 'to' ${total} ${3 + 3}`);
} else {
    console.log("Sorry total is not equals to 10");
}

console.log('=====================================');

// let secretCode;
let myVar;

if (myVar) {
    console.log("true");
    
} else {
    console.log("falsy");
}


let num = 0;

if (num > 0) {
    console.log("positive");
} else {
    console.log("negative");
}


// ============
// let userAge = prompt("enter your age");
let userAge = 18;
let paidUser = true;

if (userAge >= 18) {
    console.log("Everyone over 18: Access Granted");
    // ....

    // nested conditional
    if (paidUser) {
        console.log("Unlimited music");
    } else {
        console.log("Watch ads every 30 mins");
    }

} else {
    console.log("Access Denied!");
}



let value = 18;

if (value >= 10) {
    console.log("greater");
} else if (value < 10) {
    console.log("lower");
} else {
    console.log("invalid value");
}

userAge = 60;

// ages 13 and lower
if (userAge <= 13) {
    console.log("Kids Team");

// 14-17
} else if (userAge < 18) {
    console.log("Teenagers Team");

// 18 and up
} else if (userAge >= 18) {
    console.log('Adult Team');

    if (userAge > 59) {
        console.log("Senior Team");
    }

} else {
    console.log("Age is not valid");
}

console.log("end of script");
