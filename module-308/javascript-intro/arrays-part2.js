


const numbers = [ 
    [1, 2, 3], // 0
    [4, 5, 6], // 1
    [7, 8, 9] // 2
];

for (let arr of numbers) {
    console.log(arr);

    for (let num of arr) {
        console.log(num);
    }
    
}

console.log(numbers);

const oneDim = numbers.flat();

console.log(oneDim);

// console.log(numbers[2][0]);
// console.table(numbers)


let numArray = [
	[1, 2, 3], // 0
	[4, 5, 6], // 1
	[ // 2
		[7, 8, 9], 
		[10, 11, 12],
		[13, 14, 15]
	],
];

console.log(numArray[2][0][0]);

const twoDim = numArray.flat(2)
console.log(twoDim);



let numArr = [4, 8, 1, 0, -14, 22, 77, 1388, 20];
console.log(numArr.sort((a, b) => a - b));


let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// console.log(movies.sort());
// console.log(movies.sort().reverse());


// find the index of the element
let index = movies.indexOf("Batman");
console.log(index);

// splice the element using the index
const deletedMovie = movies.splice(index, 1, "ToyStory");
console.log(deletedMovie);

console.log(movies);

// For Each
movies.forEach((movie) => console.log(movie));

// cannot break or continue 
movies.forEach((movie, index) => {
    console.log(index + ") " + movie);
});


for (let m of movies) {
    console.log(m);
    
    if (m === "ToyStory") {
        break
    }
}


// spread operator can make a copy of any array
const moviesCopy = [...movies];
const newMovies = ["Transformers", ...movies, "Titanic"];

console.log(movies);
console.log(moviesCopy);
console.log(newMovies);

console.log(movies === moviesCopy);







