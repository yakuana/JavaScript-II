// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const number = 22;

function multiply48() {
  console.log(number * 48); 
}; 

// multiply48(); 

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  var count = 0; 
  return () => {
    return count = count + 1; 
  }
};

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

//INCOMPLETE

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  var counter = 0; 
  return  {
    "increment": () => {return counter += 1}, 
    "decrement": () => {return counter -= 1},
  }
};

const newCounterFactory = counterFactory();
console.log(newCounterFactory); // 1
console.log(newCounterFactory); // 2
