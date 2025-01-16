// const names = ["John", "Abagail", "Jerome"];
// const greetings = []

// console.log(names.length);


// for (let i = 0; i < names.length; i++) {
//     greetings[i] = "hello " + names[i] + "!"
//     console.log(greetings[i]);
// }

// console.log(greetings);

// Array of strings
const names = ["John", "Abagail", "Jerome"]; // length 3
//      index   0         1          2

// loops over the array of string
for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
}

// For of
for (let name of names) {
    console.log(name); 
}


const nums = Array(1,2,3,4)
console.log(nums);


console.log("======== Movies ===============");

const movies = ['Caddyshack', 'Interstellar', 'Scarface'];
console.table(movies);

// reassigning the value of an element in the array
movies[0] = "Batman";

console.log(movies);

// assigning an element of the array to another variable
let playMovie = movies[0];
console.log(playMovie);

// get the length of the array
console.log(movies.length);

// Adds a new value to the of the array
movies[movies.length] = "Transformers"

// adds a new value to index 10 and will also add 6 empty indexes
movies[10] = 'Shrek'
// movies[9] = 'Titanic'

// undefined
console.log(movies[9]);

// update the length of the array, if the value is shorter you'll lose your data
// movies.length = 3
console.log(movies);
console.log(movies.length);

// loops over array of movies
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}



console.log("============= Array Methods =================");


// === Concat
const yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];
const myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

const ourMovies = yourMovies.concat(myMovies);

// create a copy of an array
const ourMoviesCopy = ourMovies.concat();
// const ourMoviesCopy = ourMovies;

console.log(ourMovies);
console.log(ourMoviesCopy);

// Join
const moviesStr = ourMovies.join(" ");
console.log(moviesStr.toUpperCase());

// push
ourMoviesCopy.push('Trading Places', 'Antitrust')

// unshift
ourMoviesCopy.unshift('Star Wars')

// pop
let lastMovie = ourMoviesCopy.pop();
console.log(lastMovie);

// shift
let firstMovie = ourMoviesCopy.shift()
console.log(firstMovie);

console.log(ourMoviesCopy);

// Splice
const topMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];


let removedMovies = topMovies.splice(3, 1, 'Spaceballs', 'Alien')
// This starts at element 3 (Trading Places), removes 1 element, and adds Spaceballs and Alien.
// removedMovies => ['Trading Places']
// movies => ['Caddyshack', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien']

removedMovies = topMovies.splice(0, 3)
console.log(removedMovies);
// This starts at element 0 and removes 3 elements.
// removedMovies => ['Caddyshack', 'Interstellar', 'Scarface']
// movies => ['Spaceballs', 'Alien']


console.log(topMovies);
removedMovies = topMovies.splice(1, 0, 'The Sting')
console.log(topMovies);
// This starts at element 1 and does not remove anything, but adds The Sting.
// removedMovies => []
// movies => ['Spaceballs', 'The Sting', 'Alien']

// Slice
const oldMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

const favMovies = oldMovies.slice(1, 3);
console.log(favMovies);
console.log(oldMovies);

// at
const currMovie = favMovies.at(1)
console.log(currMovie);

// reverse
console.log(oldMovies);
console.log(oldMovies.reverse());

// flat

// nested arrays
const numArray = [1,2,4,5,6,6]

console.log(numArray);














