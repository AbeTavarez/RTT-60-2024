const targetNum = 3;
let numberOfGuesses = 2;
let gameOver = false;




while(numberOfGuesses > 0 && !gameOver) {
    setTimeout(() => {
        const userInput = parseInt(prompt("Please enter a number between 1-100"));
        console.log(userInput);

        if (userInput > targetNum) {
            alert(`Your guess ${userInput} is too high!`)
        } else if (userInput < targetNum) {
            alert(`Your guess ${userInput} is too low!`)
        } else if (userInput === targetNum) {
            alert(`Congrats you guessed it right! ${userInput} was the number.`);
            gameOver = true;
        }


    }, 0);

    numberOfGuesses--; // decrease by 1
};