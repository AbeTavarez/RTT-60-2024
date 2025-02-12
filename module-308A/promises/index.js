function greeting() {
  // [1] Some code here
  sayHi();
  // [2] Some code here
}
function sayHi() {
  return "Hi!";
}

// alert("Sync");

// Invoke the `greeting` function
greeting();

// [3] Some code here

console.log("first");

setTimeout(() => {
  console.log("second");
}, 1000);

console.log("third");

// ============= Promises =============

// Creating a promise

// const myPromise = new Promise((resolve, reject) => {
//     let value = true;

//     if (value) {
//         resolve("DATA IS BACK!")
//     } else {
//         reject("REJECT ERROR!");
//     }
// });

// myPromise
//     .then(result => {
//         console.log(result);
//         return "SOME VALUE"
//     })
//     .then(value => console.log(value))
//     .catch(error => console.error(error)) // reject
//     .finally( () => console.log("ANYWAYS")); // completed

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("Guess this worked!");
    } else {
      reject("ERROR!");
    }
  }, 1000);
});

console.log(typeof myPromise);

// myPromise
//   .then((x) => x + " Again?")
//   .then((x) => x + " Third time!")
//   .then((x) => x + " Promises are cool.")
//   .then((result) => console.log(result))
//   .catch((err) => {
//     console.error(err);
//   });

// fetch("https://jsonplaceholder.typicode.com/todos") // step1
//   .then((response) => response.json()) // step 2
//   .then((json) => console.log(json)); // step 3

// ========================
// new Promise((resolve, reject) => {
//   console.log("Initial");

//   resolve();
// })
//   .then(() => {
//     throw new Error("Something failed");

//     console.log("Do this");
//   })
//   .catch(() => {
//     console.error("Do that");
//   })
//   .then(() => {
//     console.log("Do this, no matter what happened before");
//     throw new Error("Error");

//   })
//   .catch(() => console.error("Also catch errors"))

const func1 = () => {
  return new Promise((resolve) => setTimeout(() => resolve("Hello"), 1000));
};

const func2 = (prev) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(prev + " World"), 2000),
  );
};

const func3 = (prev) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(prev + " !!!"), 3000),
  );
};

//? ===== Concurrently
Promise.allSettled([func1(), func2(), func3()])
  .then((result) => console.log(result))
  .catch((e) => console.error(e));

// ========
Promise.resolve()
  .then(func1)
  .then(func2)
  .then(func3)
  .then((result) => console.log(result))
  .catch((e) => console.error(e));

// Promise.any
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// Promise.race
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise4, promise5]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"

// ==============
function saySomething(message) {
  console.log(message);
  throw new Error("Error in say something");
}

const wait = (ms) =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(resolve, ms);
    } catch (e) {
      reject(e);
    }
  });

// wait(5000)
//   .then(() => saySomething("5 seconds"))
//   .catch((e) => console.error(e));

// ===================
wait(0).then(() => console.log("Cat"));

Promise.resolve()
  .then(() => console.log("Dog"))
  .then(() => console.log("Cow"));

console.log("Bird");

// ==========================
const myObj = {
  prop1: 123,
  prop2: "hello",
  then: function (onFulfilled) {
    setTimeout(() => onFulfilled("Hey"), 100);
  },
};

const p = Promise.resolve(myObj);
console.log(p instanceof Promise); // true

Promise.resolve()
  .then(() => myObj)
  .then((val) => console.log(val)); // Hey



// =============== async/await =====================
const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();

// =======================================

function resolveAfterSeconds(t) {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done!");
    }, t * 1000);
  });

  return myPromise;
}

async function testAwait() {
  console.log("Testing...");

  const result = await resolveAfterSeconds(2);

  console.log(result);
}

testAwait();
