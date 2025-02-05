const form = document.getElementById('register');
console.log(form);

// nested elements
console.log(form.elements);

const username = form.elements.username;
const email = form.elements.email;

console.log(username);
console.log(email);

// fires on every input
username.addEventListener("input", function(e){
    // console.log("Data prop: ", e.data);
    console.log("Value: ", e.target.value)

    const value = e.target.value;

    if (["user1", "user2"].includes(value)) {
        console.log(`Sorry username: ${value} is taken.`);
    }
});

// fires when the user change inputs
email.addEventListener("change", function (e) {
    console.log(e.target.value);

    const value = e.target.value;

    if (["abe123@gmail.com"].includes(value)) {
        console.log(`Email already exist ${value}.`);
    }
    
});


// fires when the user submits the form 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e);

    const userData = {
        username,
        email
    }
    
    console.log(`Sending data....`);
    
})



// get a value into the localstorage
localStorage.setItem("email", "user1@test.com")
localStorage.setItem("user", "user1")

// get a value by passing the key name
let loggedInUser = localStorage.getItem("user");
console.log(loggedInUser);

// remove a value by passing the key
localStorage.removeItem("email")

// localStorage.clear()


localStorage.setItem("age", 29)

let arr = ["user99", "user88"]

// console.log(JSON.stringify(arr))

localStorage.setItem("players", JSON.stringify(arr))

let players = JSON.parse(localStorage.getItem("players"));
console.log(players[1]);



if (localStorage.getItem("cart")) {
    console.log(localStorage.getItem("cart"));
} else {
    console.log("item not found");
    localStorage.setItem("cart", JSON.stringify(["apples", "keyboard"]))
}