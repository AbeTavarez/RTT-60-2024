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




