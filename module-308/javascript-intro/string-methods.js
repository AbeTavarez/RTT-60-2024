// String

let myVar = 'Hello JS!'.toLowerCase()
console.log(myVar);

let html = "hello html";
console.log(html.toUpperCase());


let str1 = "Hello";
console.log(str1.length);


let str2 = "World!";
console.log(str2.length);


let message = str1 + " " + str2
console.log(message);
console.log(message.length);


let email = "user1@example.com";

let providedEmail = "user1@example.com ";


if (email.toLowerCase().trim() === providedEmail.toLowerCase().trim()) {

    console.log(`Hello ${email}`);   
} else {
    console.log("Hello random user");
    
}