//? Exercise: String Manipulation Challenge

//? Objective
// Learners will use popular JavaScript string methods to solve real-world text-processing problems. This exercise introduces them to essential string methods such as length, toUpperCase, toLowerCase, trim, slice, indexOf, replace, split, and includes.

//? Scenario

// You're working on a content editing app that processes user-generated text. You need to implement various features to clean up, analyze, and modify user input.

// Tasks
// Todo Task 1: Basic Cleanup

// Prompt the user to input a sentence with extra spaces at the beginning and end.
// Use .trim() to remove the extra spaces and log the cleaned sentence.

// Example:
// Input: " Hello, World! "
// Output: "Hello, World!"
let userInput = prompt("Enter text")
userInput.trim()
console.log(userInput);


// Todo Task 2: Convert Case

// Take the cleaned sentence from Task 1 and:
// Convert it to uppercase using .toUpperCase().
// Convert it to lowercase using .toLowerCase().
// Log both results.

// Example:
// Uppercase: "HELLO, WORLD!"
// Lowercase: "hello, world!"


// Todo Task 3: Extract a Substring

// Ask the user to input a position (number).
// Use .slice() to extract a substring from that position to the end of the sentence.

// Example:
// Sentence: "Hello, World!"
// Position: 7
// Output: "World!"


// Todo Task 4: Find and Replace Words

// Ask the user for a word to find in the sentence and a word to replace it with.
// Use .replace() to replace the first occurrence of the word.

// Example:

// Sentence: "Hello, World!"
// Find: "World"
// Replace: "Universe"
// Output: "Hello, Universe!"


// Todo Task 5: Check for a Word

// Ask the user to input a word to search for.
// Use .includes() to check if the word exists in the sentence and log a message indicating the result.

// Example:

// Sentence: "Hello, Universe!"
// Word: "Hello"
// Output: "The word 'Hello' is in the sentence."


// Todo Task 6: Word Count

// Split the sentence into words using .split(" ") and count the number of words.
// Example:
// Sentence: "Hello, Universe!"
// Output: 2 words


// Todo Task 7: Character Count

// Use .length to calculate the total number of characters in the sentence.
// Example:
// Sentence: "Hello, Universe!"
// Output: 15 characters




// =============== Code Template ====================================

// Task 1: Basic Cleanup
let sentence = prompt("Enter a sentence with extra spaces:").trim();
console.log("Cleaned Sentence:", sentence);

// Task 2: Convert Case
console.log("Uppercase:", sentence.toUpperCase());
console.log("Lowercase:", sentence.toLowerCase());

// Task 3: Extract a Substring
let position = parseInt(prompt("Enter a starting position to extract a substring:"));
console.log("Substring:", sentence.slice(position));

// Task 4: Find and Replace Words
let wordToFind = prompt("Enter a word to find:");
let wordToReplace = prompt("Enter a word to replace it with:");
console.log("Updated Sentence:", sentence.replace(wordToFind, wordToReplace));

// Task 5: Check for a Word
let searchWord = prompt("Enter a word to search for:");
if (sentence.includes(searchWord)) {
  console.log(`The word '${searchWord}' is in the sentence.`);
} else {
  console.log(`The word '${searchWord}' is not in the sentence.`);
}

// Task 6: Word Count
let wordCount = sentence.split(" ").length;
console.log("Word Count:", wordCount);

// Task 7: Character Count
console.log("Character Count:", sentence.length);


// ========== Bonus Challenge (Optional) =============================
// Capitalize the First Letter:
// Write a function that takes a sentence and capitalizes the first letter of each word. Use .split(), .toUpperCase(), and .slice().

// Reverse the Sentence:
// Write a function to reverse the sentence using a combination of .split(), .reverse(), and .join().