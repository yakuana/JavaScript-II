// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function multiply48() {
  
  const number = 22; 

  // returns nameless function 
  return (() => {
    // returns number times 48 
    return number * 48; 
  })();  // used IIFE to call function 

}; 

console.log(multiply48()); // returns 1056 



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  
  var count = 0; 

  // creates and returns nameless function 
  return () => {
    // returns count plus one 
    return ++count; 
  }

};

// creates an instance of counter 
const newCounter = counter();

console.log(newCounter()); // returns 1
console.log(newCounter()); // returns 2



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  var counter = 0; 

  function createMethod() {
    // returns an Object of two methods 
    return {
      "increment": () => {return ++counter}, // add one to counter 
      "decrement": () => {return --counter}, // subtract one from counter 
    }; 
  }

  // calls and returns createMethod
  return createMethod(); 
};

// instance of counterFactory
const newCounterFactory = counterFactory();

 // { increment: [Function: increment], decrement: [Function: decrement] }
console.log(newCounterFactory);

// 1 
console.log(newCounterFactory.increment()); 

// 2
console.log(newCounterFactory.increment());

// 1 
console.log(newCounterFactory.decrement());

// 0 
console.log(newCounterFactory.decrement());

