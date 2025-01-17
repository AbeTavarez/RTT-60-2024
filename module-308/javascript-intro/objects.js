

const myCar = {
    color: "blue",
    year: 1989,
    hp: 4000,
    isElectric: false,
    "active registration": true,
}

console.log(typeof myCar.color); // return the data type
console.log(myCar.color);
console.log(myCar.year);
console.log(myCar.hp);
console.log(typeof myCar["active registration"]);

// also access the value of the provided key
console.log(myCar["isElectric"]);


// reassign the value of properties
myCar.color = "Hot Pink";
myCar.isElectric = true;


// add new properties
//    key = value
myCar.mpg = 20;
myCar.autoPilot = "Teslas Auto Software"

// deletes a property of an object
delete myCar["active registration"];


console.log(myCar);

// loop over an object, we access each each using a for in loop
for (const key in myCar) {
    // console.log(myCar[key]);

    if (myCar[key] === 4000){
        console.log(`HP is: ${myCar[key]}`);
        break
    } else {
        console.log(myCar[key]);
    }
    
}

// returns an array of the object's value
const values = Object.values(myCar);
values.forEach((value) => console.log(value));

// create an array and loop over the array of values
for (let value of Object.values(myCar)) {
    console.log(value);
}



if (myCar.year < 2000) {
    console.log('Check the engine');   
}



// add an new engine property
myCar.engine = {
    size: 3.1,
    cylinders: 6,
}

console.log(myCar);
console.log(myCar.engine.size);

// makes a copy of an object using the spread operator
const myUsedCar = {...myCar}

console.log(myUsedCar);

console.log(myCar == myUsedCar);

// objects and arrays
const product = {
    price: 300,
    description: "Sunglasses"
}

console.log(product.price)

const products = [product];

console.log(products[0]["price"]);


console.log(myCar);

myCar.isElectric = false
console.log(myCar.price);

if (myCar.price) {
    console.log(`Car is electric`);
} else {
    console.log("No for sale!");
    
}

const user = {
    isAdmin: false
}


if (user.isAdmin) {
    console.log(`Admin`);

} else {
    console.log('User');
    
}



