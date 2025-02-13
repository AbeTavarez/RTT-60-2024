import divide, { add, 
    calculateTheTotalSalesFromCart as cartTotal, 
    greeting as greet 
} from "./helpers.js";

import * as Helpers from './helpers.js';

import { nums, greeting, multiply } from "./myModule.js";

import Game from "./myGame.js";

const myGame = new Game();

console.log(nums);

nums.forEach(n => console.log(n*2));

greeting();
greet()


const r2 = multiply(3,3)
console.log(r2);


const r3 = cartTotal(8, 55);
console.log(r3);


const r1 = Helpers.add(2,2)
console.log(r1);


console.log(Helpers.codes);

const r4 = Helpers.default(4,2)
console.log(r4);
